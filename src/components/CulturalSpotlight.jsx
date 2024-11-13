import React from 'react';

const CulturalSpotlight = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Cultural Spotlight</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/cultural-performance.jpg" alt="Traditional Performance" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Preserving Bamenda's Rich Heritage</h3>
            <p className="text-gray-600 mb-6">
              Discover the vibrant traditions of Northwest Cameroon through our cultural spotlight. 
              From intricate beadwork to energetic dances, we showcase the diverse artistic expressions 
              that make Bamenda's culture unique and captivating.
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalSpotlight;
