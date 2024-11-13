import React from 'react';

const SuccessStory = ({ image, name, achievement }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{achievement}</p>
  </div>
);

const SuccessStories = () => {
  const stories = [
    {
      image: "/success1.jpg",
      name: "Emma Ndi",
      achievement: "Launched a successful fashion line inspired by Bamenda textiles"
    },
    {
      image: "/success2.jpg",
      name: "Peter Fon",
      achievement: "Performed at international music festivals, showcasing Cameroonian rhythms"
    },
    {
      image: "/success3.jpg",
      name: "Grace Tata",
      achievement: "Published a best-selling novel featuring Bamenda's rich cultural heritage"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <SuccessStory key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
