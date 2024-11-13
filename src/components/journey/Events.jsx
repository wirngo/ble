import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const EventCard = ({ title, date, location, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-warm-sand">
    <h3 className="text-h3 font-semibold mb-2 font-montserrat">{title}</h3>
    <p className="text-primary font-semibold mb-2">{date} | {location}</p>
    <p className="text-deep-brown mb-4">{description}</p>
    <button className="btn-primary">Register</button>
  </div>
);

const Events = () => {
  const events = [
    {
      title: "Bamenda Cultural Festival",
      date: "July 15-17, 2023",
      location: "Bamenda City Park",
      description: "A three-day celebration of Bamenda's diverse cultural heritage featuring music, dance, art, and food."
    },
    {
      title: "Traditional Crafts Workshop",
      date: "August 5, 2023",
      location: "BLE Cultural Center",
      description: "Learn traditional weaving, beadwork, and pottery techniques from master artisans."
    },
    {
      title: "Bamenda Storytelling Night",
      date: "September 10, 2023",
      location: "Community Theater",
      description: "An evening of captivating tales and legends from Northwest Cameroon's oral traditions."
    },
    {
      title: "Youth Music Competition",
      date: "October 1, 2023",
      location: "Bamenda Stadium",
      description: "Showcase your musical talents inspired by Bamenda's rich musical heritage."
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
        Cultural Events
      </h1>
      <p className="text-xl mb-12 text-center text-deep-brown">
        Participate in festivals, workshops, and performances that celebrate and promote our rich heritage.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </motion.div>
  );
};

export default Events;
