import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TorusController from './torus-controller';

function CanvasController() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 30] }}>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <TorusController position={[-5, 0, 0]} />
        <TorusController position={[5, 0, 0]} />
        <OrbitControls enableDamping={false} />
      </Canvas>
    </>
  );
}

export default CanvasController;
