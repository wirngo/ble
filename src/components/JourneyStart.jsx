import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JourneyOption = ({ title, description, icon, link }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <h3 className="text-h3 font-semibold mb-2 font-montserrat">{title}</h3>
    <p className="text-deep-brown mb-4">{description}</p>
    <Link to={link} className="text-ocean-blue hover:underline">
      Explore
    </Link>
  </motion.div>
);

const JourneyStart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-16"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Welcome to Your Cultural Journey
      </h1>
      <p className="text-xl mb-12 text-center text-deep-brown">
        Embark on a transformative adventure to explore, learn, and celebrate the rich cultural heritage of Northwest Cameroon.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <JourneyOption
          title="Discover Your Talents"
          description="Uncover and nurture your artistic abilities through our skill-building programs."
          icon="🎨"
          link="/talents"
        />
        <JourneyOption
          title="Explore Traditions"
          description="Dive deep into the customs, rituals, and stories that shape our cultural identity."
          icon="🏞️"
          link="/traditions"
        />
        <JourneyOption
          title="Connect with Mentors"
          description="Learn from experienced artists and cultural experts who will guide your journey."
          icon="🤝"
          link="/mentors"
        />
        <JourneyOption
          title="Showcase Your Art"
          description="Share your creations with the world and gain recognition for your unique voice."
          icon="🎭"
          link="/showcase"
        />
        <JourneyOption
          title="Cultural Events"
          description="Participate in festivals, workshops, and performances that celebrate our heritage."
          icon="🎉"
          link="/events"
        />
        <JourneyOption
          title="Global Opportunities"
          description="Explore chances to represent Bamenda's culture on the international stage."
          icon="🌍"
          link="/opportunities"
        />
      </div>
    </motion.div>
  );
};

export default JourneyStart;
