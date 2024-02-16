import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import terrainModel from '../../assets/models/terrain.glb'

const ModelViewer = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer;

        const init = () => {
            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            containerRef.current.appendChild(renderer.domElement);

            const loader = new GLTFLoader();
            loader.load(
                terrainModel,
                gltf => {
                    const model = gltf.scene;
                    scene.add(model);
                },
                undefined,
                error => {
                    console.error('Error loading GLB model', error);
                }
            );

            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            };

            animate();
        };

        init();

        return () => {
            renderer.dispose();
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            style={{ 
                width: '100%', 
                height: '100vh',
                top: 0,
                margin: 0,
                boxSizing: "border-box"
            }} 
        />
    );
};

export default ModelViewer;
