import { ReactNode, RefObject, useRef, useState } from 'react';
import * as THREE from 'three';

interface TorusControllerProps extends React.ComponentProps<'mesh'> {
  parentCallback: (ref: RefObject<THREE.Mesh>) => void;
  children?: ReactNode;
}

function TorusController({
  parentCallback,
  children,
  ...props
}: TorusControllerProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const handleClick = () => {
    click(!clicked);
    parentCallback(ref);
  };

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={handleClick}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <torusGeometry args={[3, 1, 16, 100]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      {children}
    </mesh>
  );
}

export default TorusController;
