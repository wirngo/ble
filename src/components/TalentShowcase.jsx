import React from 'react';

const TalentCard = ({ image, name, category, bio }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-gray-600 mb-2">{category}</p>
    <p className="text-sm text-gray-500">{bio}</p>
  </div>
);

const TalentShowcase = () => {
  const talents = [
    {
      image: "/talent1.jpg",
      name: "John Doe",
      category: "Traditional Dance",
      bio: "Award-winning dancer specializing in Bamenda traditional dances."
    },
    {
      image: "/talent2.jpg",
      name: "Jane Smith",
      category: "Contemporary Art",
      bio: "Innovative artist blending traditional and modern techniques."
    },
    {
      image: "/talent3.jpg",
      name: "Mike Johnson",
      category: "Music",
      bio: "Rising star in the Afrobeat scene with a unique Cameroonian twist."
    },
    {
      image: "/talent4.jpg",
      name: "Sarah Brown",
      category: "Fashion Design",
      bio: "Creating stunning designs inspired by Northwest Cameroon's rich culture."
    },
    {
      image: "/talent5.jpg",
      name: "David Lee",
      category: "Storytelling",
      bio: "Preserving and sharing Bamenda's oral traditions through captivating narratives."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Talent Showcase</h2>
        <div className="flex overflow-x-auto pb-8 space-x-6">
          {talents.map((talent, index) => (
            <div key={index} className="flex-none w-64">
              <TalentCard {...talent} />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            View All Talents
          </button>
        </div>
      </div>
    </section>
  );
};

export default TalentShowcase;
