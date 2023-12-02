import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Contact Info */}
                <div>
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <p>Email: contact@example.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold">Quick Links</h2>
                    <ul className="list-none">
                        <li><a href="#gallery" className="hover:text-gray-300">Gallery</a></li>
                        <li><a href="#order" className="hover:text-gray-300">Order</a></li>
                        <li><a href="#about" className="hover:text-gray-300">About</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="text-lg font-semibold">Follow Us</h2>
                    {/* Insert social media icons and links here */}
                </div>
            </div>

            {/* Copyright Notice */}
            <div className="text-center mt-4">
                <p>&copy; {new Date().getFullYear()} Your Dad's Photography. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
