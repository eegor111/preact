import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from "@app/layout";
import Home from '@app/pages/Home';
import Gallery from '@app/pages/Gallery';
import Order from '@app/pages/Order';
import About from '@app/pages/About';

/*
import {Route, Routes, useLocation} from 'react-router-dom';
import {Header, Footer, Sidebar, routesConfig} from "@app/layout";
import {useEffect, useState} from "react";
*/

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
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
