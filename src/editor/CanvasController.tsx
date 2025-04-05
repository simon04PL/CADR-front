import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TorusController from './TorusController';
import * as THREE from 'three';
import { JSX } from 'react';

interface CanvasControllerParams {
  objects: JSX.Element[]
};

function CanvasController({ objects }: CanvasControllerParams) {
  console.log(objects);
  return (
    <Canvas className='canvas' camera={{ position: [0, 0, 30] }}>
      <ambientLight />
      <directionalLight position={[10, 10, 10]} />
      <TorusController position={[-5, 0, 0]} />
      <TorusController position={[5, 0, 0]} />
      <OrbitControls enableDamping={false} />
      {objects}
    </Canvas>
  );
}

export default CanvasController;
