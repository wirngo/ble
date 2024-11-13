import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import { format } from 'date-fns';
import { FaSearch, FaFilter } from 'react-icons/fa';

const EventCard = ({ event }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-warm-sand"
  >
    <h3 className="text-h3 font-semibold mb-2 font-montserrat">{event.name}</h3>
    <p className="text-primary font-semibold mb-2">
      {format(event.date.toDate(), 'MMMM d, yyyy h:mm a')}
    </p>
    <p className="text-deep-brown mb-4">{event.description}</p>
    <p className="text-ocean-blue">{event.location}</p>
  </motion.div>
);

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchEvents = async () => {
      const q = query(collection(db, 'events'));
      const querySnapshot = await getDocs(q);
      const eventList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventList);
      setFilteredEvents(eventList);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const filtered = events.filter(event => 
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'all' || event.category === filter)
    );
    setFilteredEvents(filtered);
  }, [searchTerm, filter, events]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow container mx-auto px-4 py-8"
    >
      <h1 className="text-h1 font-bold mb-8 font-montserrat text-deep-brown text-center">
        Festival Events
      </h1>
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border rounded"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-auto p-2 pl-10 border rounded appearance-none"
          >
            <option value="all">All Categories</option>
            <option value="music">Music</option>
            <option value="dance">Dance</option>
            <option value="food">Food</option>
            <option value="workshop">Workshop</option>
          </select>
          <FaFilter className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </motion.div>
  );
};

export default Events;
