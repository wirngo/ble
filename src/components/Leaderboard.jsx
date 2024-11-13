import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal } from 'react-icons/fa';

const LeaderboardItem = ({ rank, name, score, isTop3 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`flex items-center justify-between p-4 ${isTop3 ? 'bg-gold text-primary' : 'bg-white'} rounded-lg shadow-md mb-4`}
  >
    <div className="flex items-center">
      <span className="text-2xl font-bold mr-4">{rank}</span>
      {isTop3 && (
        <span className="text-2xl mr-2">
          {rank === 1 && <FaTrophy />}
          {rank === 2 && <FaMedal />}
          {rank === 3 && <FaMedal />}
        </span>
      )}
      <span className="text-lg font-semibold">{name}</span>
    </div>
    <span className="text-xl font-bold">{score}</span>
  </motion.div>
);

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch leaderboard data
    const fetchLeaderboardData = async () => {
      // Replace this with actual API call
      const data = [
        { name: "John Doe", score: 1250 },
        { name: "Jane Smith", score: 1100 },
        { name: "Mike Johnson", score: 950 },
        { name: "Emily Brown", score: 900 },
        { name: "Chris Lee", score: 850 },
        { name: "Sarah Davis", score: 800 },
        { name: "Tom Wilson", score: 750 },
        { name: "Lisa Taylor", score: 700 },
        { name: "David Clark", score: 650 },
        { name: "Anna White", score: 600 },
      ];
      setLeaderboardData(data);
    };

    fetchLeaderboardData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-8"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Leaderboard
      </h1>
      <div className="max-w-2xl mx-auto">
        {leaderboardData.map((item, index) => (
          <LeaderboardItem
            key={index}
            rank={index + 1}
            name={item.name}
            score={item.score}
            isTop3={index < 3}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Leaderboard;
