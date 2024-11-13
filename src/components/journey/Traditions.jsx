import React from 'react';
import { motion } from 'framer-motion';
import { FaLandmark, FaMask, FaUtensils, FaTshirt } from 'react-icons/fa';

const TraditionOption = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-warm-sand">
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <h3 className="text-h3 font-semibold mb-2 font-montserrat">{title}</h3>
    <p className="text-deep-brown mb-4">{description}</p>
  </div>
);

const Traditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-16"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Explore Traditions
      </h1>
      <p className="text-xl mb-12 text-center text-deep-brown">
        Immerse yourself in the rich cultural heritage of Northwest Cameroon and discover the traditions that shape our identity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TraditionOption
          title="Rituals and Ceremonies"
          description="Learn about important rites of passage, seasonal celebrations, and spiritual practices that mark significant life events."
          icon={<FaLandmark />}
        />
        <TraditionOption
          title="Folklore and Mythology"
          description="Explore the captivating stories, legends, and myths that have been passed down through generations."
          icon={<FaMask />}
        />
        <TraditionOption
          title="Culinary Traditions"
          description="Discover the flavors, ingredients, and cooking techniques that define Bamenda's unique culinary heritage."
          icon={<FaUtensils />}
        />
        <TraditionOption
          title="Traditional Attire"
          description="Learn about the significance of traditional clothing, textiles, and adornments in Bamenda culture."
          icon={<FaTshirt />}
        />
      </div>
    </motion.div>
  );
};

export default Traditions;
