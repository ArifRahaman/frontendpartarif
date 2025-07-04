import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../Context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import io from 'socket.io-client'; // Import socket.io-client
// import { UserContext } from '../../../Context';

import axios from "axios";
import { FaPen, FaCheck, FaTimes } from "react-icons/fa";
import { useSpring, animated, config } from "@react-spring/web";
import { BsUpload } from "react-icons/bs";
import PostsByAuthor from "../Seemyposts/PostByme";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { authUser } = useAuthContext();
  const [userData, setUserData] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(
    "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.867424154.1713484800&semt=ais"
  );
  const [isEditing, setIsEditing] = useState({
    username: false,
    email: false,
    dob: false,
    universityname: false,
  });
  const [editData, setEditData] = useState({
    username: "",
    email: "",
    dob: "",
    universityname: "",
  });

  // Fetch user data on initial load or after any update
  const fetchUserData = async () => {
    if (authUser) {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}/user/${authUser._id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        const updatedUserData = await res.json();
        setUserData(updatedUserData);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    fetchUserData();  // Fetch user data when component mounts
  }, [authUser]);

  useEffect(() => {
    const storedImageUrl = localStorage.getItem("uploadedImageUrl");
    if (storedImageUrl) setUploadedImage(storedImageUrl);
  }, []);

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  const handleEdit = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
    setEditData({ ...editData, [field]: userData[field] });
  };

  const handleCancel = (field) => {
    setIsEditing({ ...isEditing, [field]: false });
    setEditData({ ...editData, [field]: userData[field] });
  };

  const handleChange = (e, field) =>
    setEditData({ ...editData, [field]: e.target.value });

  const handleSubmit = async (field) => {
    if (!editData[field]?.trim()) {
      toast.error("Field cannot be empty");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}/user/${userData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: editData[field] }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData?.error || "Failed to update");
      }

      // Fetch updated user data after a successful update
      fetchUserData();
      setIsEditing((prev) => ({ ...prev, [field]: false }));
      toast.success("Successfully updated");
      setEditData((prev) => ({ ...prev, [field]: "" }));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", selectedFile);
    formData.append("name", "John Doe"); // Add the name field
    formData.append("employeeId", userData._id);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/upload_profile_image`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data && response.data.imageNew) {
        setUploadedImage(response.data.imageNew.profileImage);
        toast.success("File uploaded successfully!");
        localStorage.setItem("uploadedImageUrl", response.data.imageNew.profileImage);

        // Fetch updated user data after image upload
        fetchUserData();
      } else {
        toast.error("Failed to upload file.");
      }
    } catch (error) {
      toast.error("Failed to upload file.");
    }
  };

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.gentle,
  });

  const profileCardSpring = useSpring({
    from: { transform: "scale(0.9)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: config.wobbly,
  });

  // Filter out the 'iat' field
  const filteredUserData = userData
    ? Object.fromEntries(Object.entries(userData).filter(([key]) => key !== 'iat' && key !== '_id' && key !== 'exp'))
    : {};

  return (
    <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen p-8">
      <h1 className="text-5xl font-extrabold text-center text-white mb-10 animate-pulse">User Dashboard</h1>
      <div className="flex flex-col md:flex-row">
        {/* Profile Card */}
        <animated.div style={profileCardSpring} className="profile-card bg-gray-200 p-8 rounded-lg shadow-2xl flex flex-col items-center w-full md:w-1/3 mb-8 md:mb-0 md:mr-6 transform hover:scale-105 transition-transform duration-300">
          <animated.div
            style={fadeIn}
            className="flex flex-col items-center justify-center group"
          >
            <img
              src={uploadedImage || "https://via.placeholder.com/150"}
              alt="Uploaded Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"
            />
            <label htmlFor="fileInput" className="cursor-pointer mt-4 relative overflow-hidden inline-block">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center">
                <BsUpload className="mr-2" />
                Choose File
              </div>
            </label>
            <button
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={handleUpload}
            >
              Upload Image
            </button>
          </animated.div>

          <div className="profile-details mt-6 w-full">
            {filteredUserData && (
              <div className="space-y-3">
                {Object.keys(filteredUserData)
                  .filter(
                    (key) =>
                      key !== "password" &&
                      key !== "__v" &&
                      key !== "otp" &&
                      key !== "otp expiry" &&
                      key !== "images" &&
                      key!= "profile image" &&
                      key !== "otpExpiry"&&
                      key!=="profileImage"
                  )
                  .map((key) => (
                    <animated.div key={key} style={fadeIn} className="p-2 w-full">
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="text-gray-700 font-semibold capitalize">
                          {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                        </div>
                        {isEditing[key] ? (
                          <div className="flex items-center">
                            <input
                              type={key === "dob" ? "date" : "text"}
                              className="border p-2 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              value={editData[key]}
                              onChange={(e) => handleChange(e, key)}
                            />
                            <button
                              className="bg-green-500 text-white p-2 rounded-full mr-2 hover:bg-green-600 transition-colors duration-300"
                              onClick={() => handleSubmit(key)}
                            >
                              <FaCheck />
                            </button>
                            <button
                              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                              onClick={() => handleCancel(key)}
                            >
                              <FaTimes />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <span className="mr-2">{filteredUserData[key]}</span>
                            <button
                              className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                              onClick={() => handleEdit(key)}
                            >
                              <FaPen />
                            </button>
                          </div>
                        )}
                      </div>
                    </animated.div>
                  ))}
              </div>
            )}
          </div>

          <Link
            to="/changepassword"
            className="block mt-6 text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300"
          >
            Change Password
          </Link>
        </animated.div>

        <animated.div style={fadeIn} className="w-full md:w-2/3 ml-0 md:ml-4 overflow-y-auto h-screen bg-white bg-opacity-10 rounded-lg shadow-xl p-6">
          <h2 className="text-3xl font-bold text-white mb-6">My Posts</h2>
          <PostsByAuthor />
        </animated.div>
      </div>
    </div>
  );
};

export default Dashboard;
