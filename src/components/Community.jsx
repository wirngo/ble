import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Community = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Latest Discussions</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">How to preserve traditional Bamenda crafts?</a>
                  <p className="text-sm text-gray-600">Started by John Doe, 2 days ago</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">Upcoming cultural events in Northwest Cameroon</a>
                  <p className="text-sm text-gray-600">Started by Jane Smith, 5 days ago</p>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">Seeking collaborators for a music project</a>
                  <p className="text-sm text-gray-600">Started by Mike Johnson, 1 week ago</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-600 mb-6">
              Join our vibrant community on social media to stay updated on the latest news, events, and opportunities.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-3xl text-blue-600 hover:text-blue-700"><FaFacebook /></a>
              <a href="#" className="text-3xl text-blue-400 hover:text-blue-500"><FaTwitter /></a>
              <a href="#" className="text-3xl text-pink-600 hover:text-pink-700"><FaInstagram /></a>
              <a href="#" className="text-3xl text-red-600 hover:text-red-700"><FaYoutube /></a>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
