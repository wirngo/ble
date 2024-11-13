import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/journey-start');
  };

  return (
    <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/hero-bg.jpg')"}}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-deep-brown/60"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-h1 font-bold mb-4 font-montserrat">Empowering Cultural Talent</h1>
        <p className="text-h3 mb-8 font-playfair">From Northwest Cameroon to the World</p>
        <button 
          className="btn-primary text-lg"
          onClick={handleStartJourney}
        >
          Start Your Journey
        </button>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <span className="text-h2 font-bold">500+</span>
            <p className="text-gold">Artists Supported</p>
          </div>
          <div className="text-center">
            <span className="text-h2 font-bold">50+</span>
            <p className="text-gold">Cultural Events</p>
          </div>
          <div className="text-center">
            <span className="text-h2 font-bold">10+</span>
            <p className="text-gold">Countries Reached</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
