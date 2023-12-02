import React from 'react';

const AboutPage = () => {
    return (
        <div>
            {/* Introduction Section */}
            <div className="text-center p-10">
                <h1 className="text-4xl font-bold mb-4">About the Photographer</h1>
                <p className="mb-6">A brief introduction to your dad's photography journey, his style, and what makes his work unique.</p>
            </div>

            {/* Gallery Section */}
            <div className="flex flex-wrap justify-center">
                {/* Replace with actual images and adjust the number of images as needed */}
                <div className="m-4"><img src="path_to_image1.jpg" alt="Sample Work 1" className="w-64 h-64 object-cover"/></div>
                <div className="m-4"><img src="path_to_image2.jpg" alt="Sample Work 2" className="w-64 h-64 object-cover"/></div>
                {/* More images... */}
            </div>

            {/* Testimonials or Quotes Section */}
            <div className="bg-gray-100 p-10 mt-10">
                <h2 className="text-3xl font-semibold text-center mb-6">What Clients Say</h2>
                <div className="flex flex-col items-center">
                    {/* Replace with actual testimonials */}
                    <p className="italic">"Incredible attention to detail and a unique perspective on the world."</p>
                    <p>- Client Name</p>
                    {/* More testimonials... */}
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
