/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const Model = () => {
    const gltf = useLoader(GLTFLoader, "../../assets/models/terrain.glb");
    gltf.scene.position.set(...[0, -1, 0]);
    gltf.scene.scale.set(0.5);
    // if (rotation) {
    //     gltf.scene.rotation.set(...rotation);
    // }

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <Suspense fallback={null}>
                <primitive object={gltf.scene} />
            </Suspense>
        </Canvas>
    );
};

export default Model;
