import React from 'react';
import { FaUser, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <img src="/logo.png" alt="BLE Logo" className="h-10" />
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Programs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Talent Showcase</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Cultural Hub</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Register</button>
          <button className="text-gray-600 hover:text-gray-900"><FaGlobe /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
