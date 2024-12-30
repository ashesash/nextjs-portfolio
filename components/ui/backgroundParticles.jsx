
"use client"; // Enable client-side rendering for this component
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const BackgroundParticles = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0); // Transparent background
        mountRef.current.appendChild(renderer.domElement);

        // Create circular texture for particles
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 64;
        canvas.width = size;
        canvas.height = size;

        // Draw circle
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.fillStyle = '#006483';
        ctx.fill();

        // Create soft gradient for better look
        const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        gradient.addColorStop(0, '#6cddff');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gradient;
        ctx.fill();

        const texture = new THREE.CanvasTexture(canvas);

        // Create Particles
        const particleCount = 500;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10; // Random position
        }

        particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        // Particle material
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x006483,
            size: 0.1,
            map: texture,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        // Track Mouse Movement
        const mouse = { x: 0, y: 0 };

        const handleMouseMove = (event) => {
            mouse.x = -(event.clientX / window.innerWidth) * 2 + 1;
            mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
        };

        document.addEventListener("mousemove", handleMouseMove);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate particles and move camera slightly based on mouse
            particleSystem.rotation.y += 0.001;
            camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
            camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        // Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

export default BackgroundParticles;
