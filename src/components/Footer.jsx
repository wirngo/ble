import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About BLE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Our Mission</a></li>
              <li><a href="#" className="hover:text-blue-400">Team</a></li>
              <li><a href="#" className="hover:text-blue-400">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Skills Building</a></li>
              <li><a href="#" className="hover:text-blue-400">Mentorship</a></li>
              <li><a href="#" className="hover:text-blue-400">Career Development</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>Nkwen, Bamenda, Cameroon</p>
            <p>Email: info@realble.org</p>
            <p>Phone: +237 677 855 197</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 BLE. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="text-2xl hover:text-blue-400"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-blue-400"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
