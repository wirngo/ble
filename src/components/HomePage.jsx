import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import FeaturedPrograms from './FeaturedPrograms';
import TalentShowcase from './TalentShowcase';
import CulturalSpotlight from './CulturalSpotlight';
import SuccessStories from './SuccessStories';
import UpcomingEvents from './UpcomingEvents';
import Community from './Community';
import Resources from './Resources';
import Newsletter from './Newsletter';

const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow"
    >
      <Hero />
      <FeaturedPrograms />
      <TalentShowcase />
      <CulturalSpotlight />
      <SuccessStories />
      <UpcomingEvents />
      <Community />
      <Resources />
      <Newsletter />
    </motion.main>
  );
};

export default HomePage;
