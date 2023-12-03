import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from "@app/layout";
import Home from '@app/pages/Home';
import Gallery from '@app/pages/Gallery';
import Order from '@app/pages/Order';
import About from '@app/pages/About';


function Layout({ children }) {
    return (
        <div className="
        flex flex-col 
        min-h-screen 
        bg-[url('./public/2.jpg')] 
        bg-fixed 
        bg-cover 
        bg-center
        ">
            <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            <Footer />
        </div>
    );
}

export default Layout;
