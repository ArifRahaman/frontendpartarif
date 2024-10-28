import React, { useState } from 'react';

const Changepassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage('Password reset link sent to your email!');
    } else {
      setMessage('Error: ' + data.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Reset Your Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Send Reset Link
          </button>
        </form>
        {message && (
          <p className="text-center mt-4 text-lg font-semibold text-green-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Changepassword;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false); // Loading state
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const { token } = useParams(); // Get the token from the URL

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simple password validation (length, etc.)
//     if (newPassword.length < 6) {
//       setMessage('Password must be at least 6 characters long.');
//       return;
//     }

//     setLoading(true); // Set loading to true while the request is processed

//     try {
//       const response = await fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}reset-password/${token}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ newPassword }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage('Password reset successfully!');
//       } else {
//         setMessage(data.error || 'An error occurred during password reset.');
//       }
//     } catch (error) {
//       setMessage('An error occurred. Please try again later.');
//     }

//     setLoading(false); // End the loading state after request is completed
//   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen"
//       style={{
//         backgroundImage: `url('https://wallpaperaccess.com/full/4357352.jpg')`, // Replace with your image URL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="bg-gray-300 p-6 rounded shadow-md w-80">
//         <h2 className="text-2xl font-bold mb-4 text-center">Reset Your Password</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <label className="mb-2 font-semibold">
//             New Password:
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'} // Toggle between text and password
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
//                 className="absolute right-2 top-2 text-gray-500 focus:outline-none"
//               >
//                 {showPassword ? 'Hide' : 'Show'}
//               </button>
//             </div>
//           </label>
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700 transition-all duration-300 ${loading ? 'opacity-50' : ''}`}
//           >
//             {loading ? 'Processing...' : 'Reset Password'}
//           </button>
//         </form>
//         {message && (
//           <p
//             className={`mt-4 text-center ${
//               message.includes('successfully') ? 'text-green-500' : 'text-red-500'
//             }`}
//           >
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
