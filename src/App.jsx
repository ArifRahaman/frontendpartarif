import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Signup = lazy(() => import("./pages/signup/Signup"));
const Login = lazy(() => import("./pages/login/Login"));
const Upload = lazy(() => import("./Home"));
const Verifyotp = lazy(() => import("./pages/verify-otp/Verifyotp"));
const Post = lazy(() => import("./components/posts/Post"));
const SeePosts = lazy(() => import("./components/seeposts/SeePosts"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Chatbot = lazy(() => import("./components/chatbot/chatbot"));
const Dashboard = lazy(() => import("./components/userprofile/UserProfile"));
const Search = lazy(() => import("./pages/searchpage/SearchPage"));
const PostVideo = lazy(() => import("./components/postVideo/PostVideo"));
const PostDetails = lazy(() => import("./PostDetail"));
const Error = lazy(() => import("./Error"));
const ChangePassword = lazy(() =>
  import("./components/changepassword/Changepassword")
);

const ResetPassword=lazy(()=>import("./components/Resetpasssword/Resetpassword"));

function App() {
  const { authUser } = useAuthContext();
  console.log("authUser in App:", authUser);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
      <div className="flex-grow">
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/login"
              element={
                !authUser ? <Login /> : <Navigate to="/upload" replace />
              }
            />
            <Route
              path="/upload"
              element={authUser ? <Upload /> : <Navigate to="/login" />}
            />
            <Route
              path="/changepassword"
              element={authUser ? <ChangePassword /> : <Navigate to="/login" />}
            />
              <Route
              path="/"
              element={authUser ? <ChangePassword /> : <Navigate to="/login" />}
            />
         <Route path="/reset-password/:token" element={<ResetPassword />} />

            <Route path="/otp-verification" element={<Verifyotp />} />
            <Route
              path="/post"
              element={authUser ? <Post /> : <Navigate to="/login" />}
            />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/seeposts" element={<SeePosts />} />
            <Route path="/posts/:postId" element={<PostDetails />} />
            <Route
              path="/dashboard"
              element={authUser ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/"
              element={
                <Navigate to={authUser ? "/upload" : "/login"} replace />
              }
            />
            <Route path="/postvideo" element={<PostVideo />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
