import React from 'react';

const EventItem = ({ date, title, location }) => (
  <div className="flex items-center justify-between py-4 border-b">
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-600">{location}</p>
    </div>
    <div className="text-right">
      <p className="text-sm text-gray-600">{date}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600 transition duration-300">
        Register
      </button>
    </div>
  </div>
);

const UpcomingEvents = () => {
  const events = [
    { date: "May 15, 2023", title: "Bamenda Cultural Festival", location: "Bamenda City Park" },
    { date: "June 2, 2023", title: "Art Exhibition: 'Colors of Cameroon'", location: "BLE Gallery" },
    { date: "July 10, 2023", title: "Music Workshop with Local Artists", location: "BLE Auditorium" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          {events.map((event, index) => (
            <EventItem key={index} {...event} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
