import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import backgroundImage from '../../assets/background.jpg'; // Adjust the path as necessary

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    dob: '',
    universityname: '',
    password: '',
    cpassword: ''
  });
  const navigate = useNavigate();

  // Simple email regex for client-side validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    if (!form.username.trim()) throw new Error('Username is required.');
    if (!form.email.trim()) throw new Error('Email is required.');
    if (!emailRegex.test(form.email)) throw new Error('Enter a valid email address.');
    if (!form.dob) throw new Error('Date of Birth is required.');
    if (!form.universityname.trim()) throw new Error('University name is required.');
    if (!form.password) throw new Error('Password is required.');
    if (!form.cpassword) throw new Error('Confirm your password.');
    if (form.password !== form.cpassword) throw new Error('Passwords do not match.');
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      validate();
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/register`,
        {
          username: form.username.trim(),
          email: form.email.trim(),
          dob: form.dob,
          universityname: form.universityname.trim(),
          password: form.password
        }
      );
      if (response.status === 201) {
        toast.success('Signup successful! Please verify OTP.');
        localStorage.setItem('email', form.email.trim());
        navigate('/otp-verification');
      } else {
        toast.error(response.data.message || 'Signup failed.');
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || 'Signup failed.');
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error('Network error. Please try again later.');
      }
      console.error('Signup error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Toaster position="top-center" />
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Flowbite
          </a>
          <div className="w-full bg-white bg-opacity-80 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:bg-opacity-80">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an Account
              </h1>
              <form onSubmit={handleSignup} className="space-y-4 md:space-y-6">
                {/* Username Field */}
                <div className="flex items-center">
                  <i className="fas fa-user mr-2" style={{ fontSize: '24px', color: 'green' }} />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full px-3 py-2 border rounded-md focus:outline-green-600 focus:border-blue-500"
                    value={form.username}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Field */}
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-2" style={{ fontSize: '24px', color: 'red' }} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-green-600 focus:border-blue-500"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                {/* DOB Field */}
                <div className="flex items-center">
                  <i className="fas fa-calendar-alt mr-2" style={{ fontSize: '24px', color: 'cyan' }} />
                  <input
                    type="date"
                    name="dob"
                    className="w-full px-3 py-2 border rounded-md focus:outline-green-600 focus:border-blue-500"
                    max={new Date().toISOString().split("T")[0]}
                    value={form.dob}
                    onChange={handleChange}
                  />
                </div>

                {/* University Field */}
                <div className="flex items-center">
                  <i className="fas fa-university mr-2" style={{ fontSize: '24px', color: 'black' }} />
                  <input
                    type="text"
                    name="universityname"
                    placeholder="University Name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-green-600 focus:border-blue-500"
                    value={form.universityname}
                    onChange={handleChange}
                  />
                </div>

                {/* Password Field */}
                <div className="flex items-center">
                  <i className="fas fa-lock mr-2" style={{ fontSize: '24px', color: 'black' }} />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-green-600 focus:border-blue-500"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>

                {/* Confirm Password Field */}
                <div className="flex items-center">
                  <i className="fas fa-lock mr-2" style={{ fontSize: '24px', color: 'black' }} />
                  <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-green-600 focus:border-blue-500"
                    value={form.cpassword}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <i className="fas fa-user-plus mr-2"></i> REGISTER
                </button>
              </form>
              <Link to="/login" className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{' '}
                <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Log in
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
