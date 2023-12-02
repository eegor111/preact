import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
            <div className="flex gap-4">
                <Link to="/">
                    <button className="hover:bg-gray-700 p-2 rounded">Home</button>
                </Link>
                <Link to="/gallery">
                    <button className="hover:bg-gray-700 p-2 rounded">Gallery</button>
                </Link>
                <Link to="/order">
                    <button className="hover:bg-gray-700 p-2 rounded">Order</button>
                </Link>
                <Link to="/about">
                    <button className="hover:bg-gray-700 p-2 rounded">About</button>
                </Link>
            </div>

            {/* Language Picker */}
            <div>
                <select className="bg-gray-700 p-2 rounded text-sm">
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                    <option value="fr">FR</option>
                </select>
            </div>
        </nav>
    );
};

export default Header;
