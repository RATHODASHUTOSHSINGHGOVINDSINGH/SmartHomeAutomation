import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBolt, FaShieldAlt, FaMicrophone, FaLeaf, FaExclamationTriangle, FaCloudSun, FaVideo, FaSignInAlt, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    toast.success("Successfully logged out", {
      position: "top-right",
      autoClose: 3000,
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex items-center px-4">
      <Link to="/" className="text-xl font-bold hover:text-blue-700">Smart Home</Link>
      
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        className="ml-auto md:hidden text-gray-600"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex ml-auto space-x-4 items-center">
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
                  <Link to="/lighting" onClick={() => setIsDropdownOpen(false)}>Lighting</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaShieldAlt className="text-green-600 mr-2" />
                  <Link to="/home-security" onClick={() => setIsDropdownOpen(false)}>Home Security</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaMicrophone className="text-purple-500 mr-2" />
                  <Link to="/interactive-home" onClick={() => setIsDropdownOpen(false)}>Interactive Home</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaLeaf className="text-green-500 mr-2" />
                  <Link to="/energy-efficiency" onClick={() => setIsDropdownOpen(false)}>Energy Efficiency</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaExclamationTriangle className="text-red-500 mr-2" />
                  <Link to="/protection" onClick={() => setIsDropdownOpen(false)}>Protection</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaCloudSun className="text-yellow-400 mr-2" />
                  <Link to="/climate" onClick={() => setIsDropdownOpen(false)}>Climate</Link>
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-blue-100 rounded-md">
                  <FaVideo className="text-gray-700 mr-2" />
                  <Link to="/survillance" onClick={() => setIsDropdownOpen(false)}>Surveillance</Link>
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
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/automate" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-blue-700 py-2 border-b">Automate</Link>
            
            {/* Mobile Concepts Section */}
            <div className="py-2 border-b">
              <h3 className="text-gray-800 font-medium mb-2">Concepts</h3>
              <ul className="pl-4 space-y-2">
                <li className="flex items-center">
                  <FaBolt className="text-yellow-500 mr-2" />
                  <Link to="/lighting" onClick={() => setIsMobileMenuOpen(false)}>Lighting</Link>
                </li>
                <li className="flex items-center">
                  <FaShieldAlt className="text-green-600 mr-2" />
                  <Link to="/home-security" onClick={() => setIsMobileMenuOpen(false)}>Home Security</Link>
                </li>
                <li className="flex items-center">
                  <FaMicrophone className="text-purple-500 mr-2" />
                  <Link to="/interactive-home" onClick={() => setIsMobileMenuOpen(false)}>Interactive Home</Link>
                </li>
                <li className="flex items-center">
                  <FaLeaf className="text-green-500 mr-2" />
                  <Link to="/energy-efficiency" onClick={() => setIsMobileMenuOpen(false)}>Energy Efficiency</Link>
                </li>
                <li className="flex items-center">
                  <FaExclamationTriangle className="text-red-500 mr-2" />
                  <Link to="/protection" onClick={() => setIsMobileMenuOpen(false)}>Protection</Link>
                </li>
                <li className="flex items-center">
                  <FaCloudSun className="text-yellow-400 mr-2" />
                  <Link to="/climate" onClick={() => setIsMobileMenuOpen(false)}>Climate</Link>
                </li>
                <li className="flex items-center">
                  <FaVideo className="text-gray-700 mr-2" />
                  <Link to="/survillance" onClick={() => setIsMobileMenuOpen(false)}>Surveillance</Link>
                </li>
              </ul>
            </div>
            
            <Link to="/usecase" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-blue-700 py-2 border-b">Use-Cases</Link>
            
            {isLoggedIn && (
              <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-blue-700 py-2 border-b">Dashboard</Link>
            )}
            
            <div className="pt-4">
              {isLoggedIn ? (
                <button 
                  onClick={handleLogout} 
                  className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition-colors"
                >
                  <span className="mr-1">Logout</span>
                  <FaSignOutAlt />
                </button>
              ) : (
                <Link 
                  to="/auth" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md transition-colors"
                >
                  <span className="mr-1">Login</span>
                  <FaSignInAlt />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

