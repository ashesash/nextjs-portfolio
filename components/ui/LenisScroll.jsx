"use client"
import React, { useEffect, useState, } from 'react';
import Lenis from 'lenis';

export default function Layout({ children }) {
    const [lenisInstance, setLenisInstance] = useState(null);

    useEffect(() => {
        // Add console logs for debugging
        console.log('Lenis initialization started');

        const lenis = new Lenis({
            // smooth: true,
            // smoothTouch: true,
            // duration: 1.2, // Add duration
            // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
        });

        // Add event listeners for debugging
        // lenis.on('scroll', (e) => {
        //     console.log('Scroll event:', e);
        // });

        // function raf(time) {
        //     lenis.raf(time);
        //     requestAnimationFrame(raf);
        // }

        // requestAnimationFrame(raf);
        // setLenisInstance(lenis);

        // console.log('Lenis initialized');

        // return () => {
        //     console.log('Destroying Lenis');
        //     lenis.destroy();
        // };
    }, []);

    return (
        // <div className="min-h-screen overflow-y-auto">
        <div>
            {children}
        </div>
    );
}