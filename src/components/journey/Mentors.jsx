import React from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends } from 'react-icons/fa';

const MentorCard = ({ name, expertise, description, image }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-warm-sand flex flex-col items-center">
    <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4 object-cover" />
    <h3 className="text-h3 font-semibold mb-2 font-montserrat text-center">{name}</h3>
    <p className="text-primary font-semibold mb-2">{expertise}</p>
    <p className="text-deep-brown text-center">{description}</p>
  </div>
);

const Mentors = () => {
  const mentors = [
    {
      name: "Acha Nji",
      expertise: "Traditional Music",
      description: "Master of traditional Bamenda instruments with 30 years of experience.",
      image: "/mentors/acha-nji.jpg"
    },
    {
      name: "Bih Che",
      expertise: "Visual Arts",
      description: "Renowned artist specializing in contemporary interpretations of traditional motifs.",
      image: "/mentors/bih-che.jpg"
    },
    {
      name: "Fon Ndi",
      expertise: "Cultural History",
      description: "Expert in Bamenda's rich cultural history and oral traditions.",
      image: "/mentors/fon-ndi.jpg"
    },
    {
      name: "Akwi Tah",
      expertise: "Dance and Performance",
      description: "Celebrated choreographer and performer of traditional Bamenda dances.",
      image: "/mentors/akwi-tah.jpg"
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
        Connect with Mentors
      </h1>
      <p className="text-xl mb-12 text-center text-deep-brown">
        Learn from experienced artists and cultural experts who will guide and inspire your journey through Bamenda's rich heritage.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} {...mentor} />
        ))}
      </div>
    </motion.div>
  );
};

export default Mentors;
