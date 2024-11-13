import React from 'react';
import { FaGraduationCap, FaUsers, FaBriefcase, FaHandshake } from 'react-icons/fa';

const ProgramCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-4xl text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="text-blue-500 hover:underline">Learn More</a>
  </div>
);

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: <FaGraduationCap />,
      title: "Skills Building",
      description: "Enhance your talents with our comprehensive skill-building programs."
    },
    {
      icon: <FaUsers />,
      title: "Mentorship",
      description: "Learn from industry experts and grow your career with personalized guidance."
    },
    {
      icon: <FaBriefcase />,
      title: "Career Development",
      description: "Take your career to the next level with our tailored development programs."
    },
    {
      icon: <FaHandshake />,
      title: "Networking Events",
      description: "Connect with peers and industry professionals at our exclusive events."
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
