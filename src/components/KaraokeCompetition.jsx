import React from 'react';
import { motion } from 'framer-motion';

const KaraokeCompetition = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-8"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Karaoke Competition
      </h1>
      <p className="text-xl mb-8 text-center text-deep-brown">
        Show off your singing skills at our Karaoke Competition!
      </p>
      {/* Add registration form or competition details here */}
    </motion.div>
  );
};

export default KaraokeCompetition;
