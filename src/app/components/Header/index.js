// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <nav className="flex justify-between">
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-white">Home</a>
            </li>
            <li>
              <a href="#store" className="text-white">Store</a>
            </li>
            <li>
              <a href="#about" className="text-white">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
