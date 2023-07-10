import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import {
  Decal, OrbitControls, Float, Preload, useTexture
} from "@react-three/drei";
import CanvasLoader from '../Loader'

const Ball = ({technology, index}) => {

  const [decal] = useTexture([technology.icon])


  return (
    <Float
      speed={5}
      rotationIntensity={0.5}
      floatIntensity={1}

    >
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
            map={decal}
            rotation={[2 * Math.PI,0,6.25]}
            flatShading
            position={[0,0,1]}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({technologies}) => {
  return (
      // <><Ball technology={technologies[0]} index="0" /></>

      <Canvas
          // frameloop="demand"
          gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader/>} >
          <OrbitControls enableZoom={false} />
          { technologies.map( (technology, index) => (
            <Ball key={index} technology={technology} index={index} />
          ))
          }
        </Suspense>
        <Preload all/>
      </Canvas>
  );
}

export default BallCanvas;