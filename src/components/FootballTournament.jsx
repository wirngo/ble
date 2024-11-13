import React from 'react';
import { motion } from 'framer-motion';

const FootballTournament = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-8"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Football Tournament
      </h1>
      <p className="text-xl mb-8 text-center text-deep-brown">
        Stay updated on the exciting football matches during the festival!
      </p>
      {/* Add tournament bracket, schedule, or results here */}
    </motion.div>
  );
};

export default FootballTournament;
