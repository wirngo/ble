import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAfrica, FaPlane, FaUniversity, FaHandshake } from 'react-icons/fa';

const OpportunityCard = ({ title, description, icon, link }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-warm-sand">
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <h3 className="text-h3 font-semibold mb-2 font-montserrat">{title}</h3>
    <p className="text-deep-brown mb-4">{description}</p>
    <a href={link} className="btn-primary inline-block">Learn More</a>
  </div>
);

const Opportunities = () => {
  const opportunities = [
    {
      title: "International Cultural Exchange",
      description: "Participate in cultural exchange programs to share Bamenda's heritage with the world.",
      icon: <FaGlobeAfrica />,
      link: "#"
    },
    {
      title: "Artist Residencies Abroad",
      description: "Apply for artist residencies in partner institutions around the globe.",
      icon: <FaPlane />,
      link: "#"
    },
    {
      title: "Scholarships for Cultural Studies",
      description: "Pursue higher education in cultural studies with our scholarship programs.",
      icon: <FaUniversity />,
      link: "#"
    },
    {
      title: "Global Collaboration Projects",
      description: "Join international collaborative projects celebrating cultural diversity.",
      icon: <FaHandshake />,
      link: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-16"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Global Opportunities
      </h1>
      <p className="text-xl mb-12 text-center text-deep-brown">
        Explore chances to represent Bamenda's culture on the international stage and broaden your horizons.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {opportunities.map((opportunity, index) => (
          <OpportunityCard key={index} {...opportunity} />
        ))}
      </div>
    </motion.div>
  );
};

export default Opportunities;
