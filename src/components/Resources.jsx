import React from 'react';
import { FaBook, FaVideo, FaFileAlt } from 'react-icons/fa';

const ResourceItem = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-4xl text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="text-blue-500 hover:underline">Download</a>
  </div>
);

const Resources = () => {
  const resources = [
    {
      icon: <FaBook />,
      title: "Cultural Handbook",
      description: "A comprehensive guide to Bamenda's cultural heritage and traditions."
    },
    {
      icon: <FaVideo />,
      title: "Artist Tutorials",
      description: "Video lessons from experienced artists on various cultural art forms."
    },
    {
      icon: <FaFileAlt />,
      title: "Career Guide",
      description: "Tips and strategies for building a successful career in the cultural sector."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceItem key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
