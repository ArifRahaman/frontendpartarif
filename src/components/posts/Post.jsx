import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!title || !summary || !content) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", content);
    if (cover) {
      formData.append("cover", cover);
    }
    const authorname = localStorage.getItem("author");
    const authorprofilepicture = localStorage.getItem("uploadedImageUrl");
    const authorId = localStorage.getItem("userId");
    formData.append("author", authorId);
    formData.append("authorname", authorname);
    formData.append("authorprofilepicture", authorprofilepicture);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/posts`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setSuccessMessage("Post created successfully!");
      setErrorMessage("");
      // Reset form fields after success
      setTitle("");
      setSummary("");
      setContent("");
      setCover(null);
    } catch (error) {
      console.error("There was an error creating the post!", error);
      setErrorMessage("Error creating post. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="bg-slate-800 min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto bg-gray-100 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create a New Post
        </h1>
        {errorMessage && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
        {successMessage && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="summary"
            >
              Summary <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="summary"
              placeholder="Enter a brief summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="content"
            >
              Content <span className="text-red-500">*</span>
            </label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              className="bg-white h-64"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="cover"
            >
              Cover Image
            </label>
            <input
              type="file"
              id="cover"
              onChange={(e) => setCover(e.target.files[0])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

// import React from 'react';
// import useOnlineStatus from './useOnlineStatus';

// const StatusComponent = () => {
//   const isOnline = useOnlineStatus();

//   return (
//     <div>
//       <h1>You are currently {isOnline ? 'Online' : 'Offline'}</h1>
//     </div>
//   );
// };

// export default StatusComponent;
