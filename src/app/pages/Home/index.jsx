import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our App</h1>
      <h2 className="text-xl mb-8">Discover amazing products and more</h2>
      <a href="#store" className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold transition duration-200 hover:bg-blue-400">
        Visit Store
      </a>
    </div>
  );
};

export default Home;
