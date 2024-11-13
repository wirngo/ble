import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Stay Updated with BLE</h2>
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-full text-gray-900"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm mt-4 text-center">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from BLE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
