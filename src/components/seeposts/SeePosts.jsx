import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [newComment, setNewComment] = useState("");
  // const username = localStorage.getItem("username");
  const  authUser  = useAuthContext();
  console.log(authUser)
  const username=authUser.authUser.username;
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_DOMAIN}/posts`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const toggleExpand = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const handleLike = async (postId) => {
    if (!authUser) {
      toast.error("Please login to like the post!");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_DOMAIN}/posts/${postId}/like`);
      setPosts(
        posts.map((post) =>
          post._id === postId ? { ...post, likes: post.likes + 1 } : post
        )
      );
    } catch (error) {
      setError("Error liking post");
    }
  };

  const handleDislike = async (postId) => {
    if (!authUser) {
      toast.error("Please login to dislike the post!");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_DOMAIN}/posts/${postId}/dislike`);
      setPosts(
        posts.map((post) =>
          post._id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
        )
      );
    } catch (error) {
      setError("Error disliking post");
    }
  };

  const handleCommentSubmit = async (postId) => {
    if (!authUser) {
      toast.error("Please login to comment on the post!");
      return;
    }
    if (!newComment.trim()) return;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/posts/${postId}/comments`,
        { text: newComment }
      );
      setPosts(
        posts.map((post) =>
          post._id === postId
            ? { ...post, comments: [...post.comments, response.data] }
            : post
        )
      );
      setNewComment("");
    } catch (error) {
      setError("Error adding comment");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen py-10">
      <ToastContainer />
      <div className="max-w-6xl mx-auto p-4 bg-black rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-12 text-green-500 text-center">
          All Posts
        </h1>
        {posts.length === 0 ? (
          <div className="text-center text-gray-500">No posts available</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 shadow-lg rounded-lg border-2 border-gray-300 hover:shadow-2xl transition transform hover:-translate-y-1">
            {posts.map((post) => (
              <div
                key={post._id}
                className={`p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                  expandedPostId === post._id
                    ? "bg-gray-100 border-green-400"
                    : "bg-white border-gray-300 animate-border-glow"
                }`   }
                style={{
                  gridColumn: expandedPostId === post._id ? "span 3" : "span 1",
                  gridRow: expandedPostId === post._id ? "span 3" : "span 1",
                }}
                onClick={(e) => {
                  if (!e.target.closest(".expanded-area")) {
                    toggleExpand(post._id);
                  }
                }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={post.authorprofilepicture}
                    alt={post.authorname}
                    className="w-16 h-16 rounded-full border border-gray-300 mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
                    <p className="text-gray-600">Author: {post.authorname}</p>
                  </div>
                </div>
                {post.cover && (
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="mb-4 w-full h-40 object-cover rounded-lg shadow-sm"
                  />
                )}
                {expandedPostId === post._id && (
                  <div className="expanded-area">
                    <p className="text-gray-700 mb-4">{post.summary}</p>
                    <div
                      className="prose prose-green prose-lg"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <div className="mt-4">
                      <button
                        onClick={() => handleLike(post._id)}
                        className="mr-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                      >
                        Like ({post.likes})
                      </button>
                      <button
                        onClick={() => handleDislike(post._id)}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                      >
                        Dislike ({post.dislikes})
                      </button>
                      <div>
                        <h3 className="text-xl font-semibold mt-6">Comments</h3>
                        <ul className="mt-4 space-y-4">
                          {post.comments.map((comment) => (
                            <li key={comment._id} className="border-b pb-2">
                              <p>
                                <strong>{username}:</strong> {comment.text}
                              </p>
                              <p className="text-gray-500 text-sm">
                                {new Date(comment.date).toLocaleString()}
                              </p>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4">
                          <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500 transition"
                            rows="3"
                            placeholder="Add a comment..."
                          ></textarea>
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent event propagation to parent elements
                              handleCommentSubmit(post._id);
                            }}
                            className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsList;
