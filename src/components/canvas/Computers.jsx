import { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = () => {

  const computer = useGLTF('./gaming_desktop/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.12} groundColor="black" />
      <pointLight intensity={0.75} />
      <spotLight position={[-20,50,10]}
        angle={0.12}
        intensity={0.5}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={computer.scene}
        scale={0.75}
        position={[0,-3.25, -1.5]}
        rotation={[-0.00, 0.1, -0.15]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas frameloop="demand"
            shadows
            camera={{position: [20, 3, 5], fov: 25}}
            gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false}
                     maxPolarAngle={Math.PI/2}
                     minPolarAngle={Math.PI/2}
      />
      <Computers />
    </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas