import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaDrum, FaMicrophone, FaPencilAlt } from 'react-icons/fa';

const TalentOption = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-warm-sand">
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <h3 className="text-h3 font-semibold mb-2 font-montserrat">{title}</h3>
    <p className="text-deep-brown mb-4">{description}</p>
  </div>
);

const Talents = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-16"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Discover Your Talents
      </h1>
      <p className="text-xl mb-12 text-center text-deep-brown">
        Explore and nurture your artistic abilities through our diverse range of skill-building programs and workshops.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TalentOption
          title="Visual Arts"
          description="Learn traditional and contemporary painting, sculpture, and crafts techniques unique to Northwest Cameroon."
          icon={<FaPalette />}
        />
        <TalentOption
          title="Music"
          description="Master traditional instruments, rhythms, and vocal styles that define Bamenda's rich musical heritage."
          icon={<FaDrum />}
        />
        <TalentOption
          title="Performing Arts"
          description="Develop your skills in traditional dance, theater, and storytelling to bring our cultural narratives to life."
          icon={<FaMicrophone />}
        />
        <TalentOption
          title="Literary Arts"
          description="Hone your writing skills to preserve and share our oral traditions, folklore, and contemporary stories."
          icon={<FaPencilAlt />}
        />
      </div>
    </motion.div>
  );
};

export default Talents;
