// Component inspired by Interactive 3D Background by Kevin Levron

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

const BackgroundScene = () => {
    const canvasRef = useRef(null);
    const config = {
        fov: 75,
        cameraZ: 75,
        xyCoef: 20,  // noise
        zCoef: 5,   // height
        lightIntensity: 900,
        ambientColor: 0xf06a8a,
        light1Color: 0xffd569,
        light2Color: 0xf6c7e9,
        light3Color: 0x06c5ff,
        light4Color: 0x37fff5,
    };

    useEffect(() => {
        let renderer, scene, camera, plane;
        let light1, light2, light3, light4;
        let width, height, cx, cy, wWidth, wHeight;

        const noise4D = createNoise4D();
        const mouse = new THREE.Vector2();
        const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const mousePosition = new THREE.Vector3();
        const raycaster = new THREE.Raycaster();

        const getRendererSize = () => {
            const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
            const vFOV = cam.fov * Math.PI / 180;
            const height = 2 * Math.tan(vFOV / 2) * Math.abs(config.cameraZ);
            const width = height * cam.aspect;
            return [width, height];
        };

        const updateColors = () => {
            const randomColor = () => {
                return '#' + Math.floor(Math.random() * 16777215).toString(16);
            };

            const newColors = {
                light1Color: randomColor(),
                light2Color: randomColor(),
                light3Color: randomColor(),
                light4Color: randomColor(),

            };
            console.log(newColors.light1Color, newColors.light2Color, newColors.light3Color, newColors.light4Color );
            
            light1.color = new THREE.Color(newColors.light1Color);
            light2.color = new THREE.Color(newColors.light2Color);
            light3.color = new THREE.Color(newColors.light3Color);
            light4.color = new THREE.Color(newColors.light4Color);
        };

        //initialise all the objects 
        const init = () => {
            renderer = new THREE.WebGLRenderer({
                canvas: canvasRef.current,
                antialias: true,
                alpha: true,
            });

            camera = new THREE.PerspectiveCamera(config.fov);
            camera.position.z = config.cameraZ;

            scene = new THREE.Scene();

            updateSize();
            window.addEventListener('resize', updateSize, false);
            window.addEventListener('mousemove', onMouseMove, false);

            initLights();
            initPlane();
            updateColors();
            animate();
        };

        const updateSize = () => {
            width = window.innerWidth;
            cx = width / 2;
            height = window.innerHeight;
            cy = height / 2;

            if (renderer && camera) {
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                const wsize = getRendererSize();
                wWidth = wsize[0];
                wHeight = wsize[1];

                if (plane) {
                    plane.geometry.dispose();
                    plane.geometry = new THREE.PlaneGeometry(wWidth, wHeight, Math.floor(wWidth / 2), Math.floor(wHeight / 2));
                }
            }
        };

        //setting up the plane
        const initPlane = () => {
            const geo = new THREE.PlaneGeometry(wWidth * 2, wHeight, 80, 80); //width, height, number of meshes width, number of mesh height
            // geo.computeVertexNormals();
            // const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide, wireframe: false });
            const mat = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 50, side: THREE.DoubleSide, wireframe: false });
            plane = new THREE.Mesh(geo, mat);
            plane.rotation.x = -Math.PI / 2 - 0.2;
            plane.position.y = -25;
            camera.position.z = 60;
            scene.add(plane);
        };

        const initLights = () => {
            const r = 20; //radius for lights to circle around
            const y = 5; //light closer to plane
            const lightDistance = 400;

            light1 = new THREE.PointLight(config.light1Color, config.lightIntensity, lightDistance);
            light1.position.set(0, y, r);
            scene.add(light1);

            light2 = new THREE.PointLight(config.light2Color, config.lightIntensity, lightDistance);
            light2.position.set(0, -y, -r);
            scene.add(light2);

            light3 = new THREE.PointLight(config.light3Color, config.lightIntensity, lightDistance);
            light3.position.set(r, y, 0);
            scene.add(light3);

            light4 = new THREE.PointLight(config.light4Color, config.lightIntensity, lightDistance);
            light4.position.set(-r, y, 0);
            scene.add(light4);

            var light = new THREE.AmbientLight(0xffffff, 0.005);
            scene.add(light);

            // const light1Helper = new THREE.PointLightHelper(light1);
            // const light2Helper = new THREE.PointLightHelper(light2);
            // const light3Helper = new THREE.PointLightHelper(light3);
            // const light4Helper = new THREE.PointLightHelper(light4);

            // scene.add(light1Helper, light2Helper, light3Helper, light4Helper);
        };

        const onMouseMove = (e) => {
            const v = new THREE.Vector3();
            camera.getWorldDirection(v);
            v.normalize();
            mousePlane.normal = v;

            mouse.x = (e.clientX / width) * 2 - 1;
            mouse.y = -(e.clientY / height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(mousePlane, mousePosition);
        };

        const animate = () => {
            requestAnimationFrame(animate);
            animatePlane();
            animateLights();
            renderer.render(scene, camera);
        };

        const animatePlane = () => {
            const gArray = plane.geometry.attributes.position.array;
            const time = Date.now() * 0.0002;

            for (let i = 0; i < gArray.length; i += 3) {
                gArray[i + 2] = noise4D(
                    gArray[i] / config.xyCoef,
                    gArray[i + 1] / config.xyCoef,
                    time,
                    mouse.x + mouse.y
                ) * config.zCoef;

                let noiseValue = noise4D(
                    gArray[i] / config.xyCoef,
                    gArray[i + 1] / config.xyCoef,
                    time,
                    mouse.x + mouse.y
                );
                gArray[i + 2] = THREE.MathUtils.clamp(noiseValue, -1, 1) * config.zCoef;
            }

            plane.geometry.attributes.position.needsUpdate = true;
            plane.geometry.computeBoundingSphere();
        };

        const animateLights = () => {
            const time = Date.now() * 0.01;
            const d = 10;

            light1.position.x = Math.sin(time * 0.1) * d;
            light1.position.z = Math.cos(time * 0.2) * d;
            light2.position.x = Math.cos(time * 0.3) * d;
            light2.position.z = Math.sin(time * 0.4) * d;
            light3.position.x = Math.sin(time * 0.5) * d;
            light3.position.z = Math.sin(time * 0.6) * d;
            light4.position.x = Math.sin(time * 0.7) * d;
            light4.position.z = Math.cos(time * 0.8) * d;
        };

        init();

        return () => {
            window.removeEventListener('resize', updateSize);
            window.removeEventListener('mousemove', onMouseMove);
            if (plane) {
                plane.geometry.dispose();
                plane.material.dispose();
            }
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-50"
        />
    );
};

export default BackgroundScene;