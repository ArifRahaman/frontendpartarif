import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const { token } = useParams(); // Get the token from the URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple password validation (length, etc.)
    if (newPassword.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true); // Set loading to true while the request is processed

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset successfully!');
      } else {
        setMessage(data.error || 'An error occurred during password reset.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }

    setLoading(false); // End the loading state after request is completed
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tncm91bmQlMjBpbWFnZSUyMDlLfGVufDB8fDB8fHww')`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-red-600 p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Your Password</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 font-semibold">
            New Password:
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Toggle between text and password
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                className="absolute right-2 top-2 text-gray-500 focus:outline-none"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </label>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700 transition-all duration-300 ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? 'Processing...' : 'Reset Password'}
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes('successfully') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
