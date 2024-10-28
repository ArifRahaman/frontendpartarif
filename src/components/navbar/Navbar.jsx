import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../../Context/AuthContext';
import Cookies from 'js-cookie';
import { FaBars, FaTimes, FaSignOutAlt, FaUser, FaUpload, FaVideo, FaComments, FaEye } from 'react-icons/fa';
import { useSpring, animated, config } from '@react-spring/web';

const Navbar = () => {
    const image = localStorage.getItem("uploadedImageUrl");
    const { authUser, setAuthUser } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const handleLogout = () => {
        Cookies.remove('jwt');
        localStorage.clear();
        setAuthUser(null);
        navigate('/login');
    };

    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

    const isActive = (path) => location.pathname === path;

    const sidebarAnimation = useSpring({
        transform: sidebarVisible ? 'translateX(0%)' : 'translateX(-100%)',
        opacity: sidebarVisible ? 1 : 0,
        config: config.gentle,
    });

    useEffect(() => {
        const handleResize = () => window.innerWidth >= 768 && setSidebarVisible(false);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const NavLink = ({ to, icon, children }) => (
        <Link
            to={to}
            className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                isActive(to)
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-blue-100 hover:text-blue-500'
            }`}
        >
            {icon}
            <span className="font-medium">{children}</span>
        </Link>
    );

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
                        Brand
                    </Link>

                    <nav className="hidden md:flex space-x-2">
                        <NavLink to="/chatbot" icon={<FaComments className="w-4 h-4" />}>Chatbot</NavLink>
                        <NavLink to="/seeposts" icon={<FaEye className="w-4 h-4" />}>Posts</NavLink>
                        {authUser && (
                            <>
                                <NavLink to="/upload" icon={<FaUpload className="w-4 h-4" />}>Upload</NavLink>
                                <NavLink to="/post" icon={<FaComments className="w-4 h-4" />}>Post</NavLink>
                                <NavLink to="/postvideo" icon={<FaVideo className="w-4 h-4" />}>Video</NavLink>
                                <NavLink to="/dashboard" icon={
                                    <img
                                        src={image || 'https://via.placeholder.com/40'}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                }>Profile</NavLink>
                            </>
                        )}
                        {authUser ? (
                            <button
                                onClick={handleLogout}
                                className="flex items-center space-x-2 px-3 py-2 rounded-full text-red-500 hover:bg-red-100 transition-all duration-300"
                            >
                                <FaSignOutAlt className="w-4 h-4" />
                                <span className="font-medium">Logout</span>
                            </button>
                        ) : (
                            <>
                                <NavLink to="/login" icon={<FaUser className="w-4 h-4" />}>Login</NavLink>
                                <NavLink to="/signup" icon={<FaUser className="w-4 h-4" />}>Signup</NavLink>
                            </>
                        )}
                    </nav>

                    <button onClick={toggleSidebar} className="md:hidden text-gray-600 focus:outline-none">
                        <FaBars className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <animated.nav
                style={sidebarAnimation}
                className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-2xl z-50 md:hidden"
            >
                <div className="p-4 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xl font-bold text-blue-600">Menu</span>
                        <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
                            <FaTimes className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <NavLink to="/chatbot" icon={<FaComments className="w-4 h-4" />}>Chatbot</NavLink>
                        <NavLink to="/seeposts" icon={<FaEye className="w-4 h-4" />}>See Posts</NavLink>
                        {authUser && (
                            <>
                                <NavLink to="/upload" icon={<FaUpload className="w-4 h-4" />}>Upload</NavLink>
                                <NavLink to="/post" icon={<FaComments className="w-4 h-4" />}>Post</NavLink>
                                <NavLink to="/postvideo" icon={<FaVideo className="w-4 h-4" />}>Post Video</NavLink>
                                <NavLink to="/dashboard" icon={
                                    <img
                                        src={image || 'https://via.placeholder.com/40'}
                                        alt="Profile"
                                        className="w-4 h-4 rounded-full object-cover"
                                    />
                                }>Profile</NavLink>
                            </>
                        )}
                    </div>
                    <div className="mt-auto">
                        {authUser ? (
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center space-x-2 px-3 py-2 rounded-full text-red-500 hover:bg-red-100 transition-all duration-300"
                            >
                                <FaSignOutAlt className="w-4 h-4" />
                                <span className="font-medium">Logout</span>
                            </button>
                        ) : (
                            <div className="space-y-2">
                                <NavLink to="/login" icon={<FaUser className="w-4 h-4" />}>Login</NavLink>
                                <NavLink to="/signup" icon={<FaUser className="w-4 h-4" />}>Signup</NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </animated.nav>
        </header>
    );
};

export default Navbar;