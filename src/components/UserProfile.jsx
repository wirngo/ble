import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPalette, FaLandmark, FaUserFriends, FaTheaterMasks, FaCalendarAlt, FaGlobeAfrica } from 'react-icons/fa';

const ProgressBar = ({ value, max }) => (
  <div className="w-full bg-warm-sand rounded-full h-4">
    <div
      className="bg-primary h-4 rounded-full"
      style={{ width: `${(value / max) * 100}%` }}
    ></div>
  </div>
);

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Ndi Takwi",
    email: "ndi.takwi@example.com",
    progress: {
      talents: 3,
      traditions: 2,
      mentors: 1,
      showcase: 0,
      events: 2,
      opportunities: 1
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-16"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Your Cultural Journey
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-md">
        <div className="flex items-center mb-8">
          <FaUser className="text-6xl text-primary mr-4" />
          <div>
            <h2 className="text-h2 font-semibold font-montserrat">{user.name}</h2>
            <p className="text-deep-brown">{user.email}</p>
          </div>
        </div>
        <h3 className="text-h3 font-semibold mb-4 font-montserrat">Your Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="flex items-center"><FaPalette className="mr-2" /> Talents</span>
              <span>{user.progress.talents}/5</span>
            </div>
            <ProgressBar value={user.progress.talents} max={5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="flex items-center"><FaLandmark className="mr-2" /> Traditions</span>
              <span>{user.progress.traditions}/5</span>
            </div>
            <ProgressBar value={user.progress.traditions} max={5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="flex items-center"><FaUserFriends className="mr-2" /> Mentors</span>
              <span>{user.progress.mentors}/5</span>
            </div>
            <ProgressBar value={user.progress.mentors} max={5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="flex items-center"><FaTheaterMasks className="mr-2" /> Showcase</span>
              <span>{user.progress.showcase}/5</span>
            </div>
            <ProgressBar value={user.progress.showcase} max={5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="flex items-center"><FaCalendarAlt className="mr-2" /> Events</span>
              <span>{user.progress.events}/5</span>
            </div>
            <ProgressBar value={user.progress.events} max={5} />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="flex items-center"><FaGlobeAfrica className="mr-2" /> Opportunities</span>
              <span>{user.progress.opportunities}/5</span>
            </div>
            <ProgressBar value={user.progress.opportunities} max={5} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
