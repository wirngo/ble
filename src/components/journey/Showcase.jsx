import React from 'react';
import { motion } from 'framer-motion';
import { FaTheaterMasks, FaImage, FaMusic, FaBook } from 'react-icons/fa';

const ShowcaseOption = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-warm-sand">
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <h3 className="text-h3 font-semibold mb-2 font-montserrat">{title}</h3>
    <p className="text-deep-brown mb-4">{description}</p>
  </div>
);

const Showcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-16"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Showcase Your Art
      </h1>
      <p className="text-xl mb-12 text-center text-deep-brown">
        Share your creations with the world and gain recognition for your unique artistic voice inspired by Bamenda's rich cultural heritage.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ShowcaseOption
          title="Performance Showcase"
          description="Present your music, dance, or theatrical performances at our cultural events and festivals."
          icon={<FaTheaterMasks />}
        />
        <ShowcaseOption
          title="Art Exhibitions"
          description="Display your visual artworks in our galleries and online platforms to reach a wider audience."
          icon={<FaImage />}
        />
        <ShowcaseOption
          title="Music Releases"
          description="Release your original music inspired by Bamenda's traditions through our digital platforms."
          icon={<FaMusic />}
        />
        <ShowcaseOption
          title="Literary Publications"
          description="Publish your written works in our anthologies and online literary magazines."
          icon={<FaBook />}
        />
      </div>
    </motion.div>
  );
};

export default Showcase;
