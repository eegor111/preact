import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();
    const handleOrderClick = () => {
        navigate('/order');
    };
    

    return (
        <div>
            {/* Hero Section */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url('path_to_hero_image.jpg')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Beograd Sad i Ovde</h1>
                        <p className="mb-5">Explore the world through my lens and order your favorite prints today!</p>
                        <button className="btn btn-primary" onClick={handleOrderClick}>Order Prints</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
