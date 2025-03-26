import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBolt, FaShieldAlt, FaMicrophone, FaLeaf, FaExclamationTriangle, FaCloudSun, FaVideo, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    toast.success("Successfully logged out", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-4">
      <Link to="/" className="text-xl font-bold hover:text-blue-700">Smart Home Automation</Link>
      <div className="ml-auto flex space-x-4 items-center">
        <Link to="/automate" className="text-gray-600 hover:text-blue-700">Automate</Link>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center text-gray-600 hover:text-blue-700"
          >
            Concepts ▾
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2 z-50">
              <ul className="space-y-2">
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaBolt className="text-yellow-500 mr-2" />
                  <Link to="/lighting">Lighting</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaShieldAlt className="text-green-600 mr-2" />
                  <Link to="/home-security">Home Security</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaMicrophone className="text-purple-500 mr-2" />
                  <Link to="/interactive-home">Interactive Home</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaLeaf className="text-green-500 mr-2" />
                  <Link to="/energy-efficiency">Energy Efficiency</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaExclamationTriangle className="text-red-500 mr-2" />
                  <Link to="/protection">Protection</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaCloudSun className="text-yellow-400 mr-2" />
                  <Link to="/climate">Climate</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaVideo className="text-gray-700 mr-2" />
                  <Link to="/survillance">Surveillance</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link to="/usecase" className="text-gray-600 hover:text-blue-700">Use-Cases</Link>
        {isLoggedIn && (
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-700">Dashboard</Link>
        )}
        
        {isLoggedIn ? (
          <button 
            onClick={handleLogout} 
            className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition-colors"
          >
            <span className="mr-1">Logout</span>
            <FaSignOutAlt />
          </button>
        ) : (
          <Link 
            to="/auth" 
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition-colors"
          >
            <span className="mr-1">Login</span>
            <FaSignInAlt />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

