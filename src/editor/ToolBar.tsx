import { JSX, RefObject } from 'react';
import TorusController from './TorusController';
import ToolBarItem from './ToolBarItem';
import { MenuItem } from '@mui/material';
import * as THREE from 'three';

interface ToolbarProps {
  addMesh: (mesh: JSX.Element) => void;
  setRef: (ref: RefObject<THREE.Mesh>) => void;
}

enum Shape {
  Torus,
}

function Toolbar({ addMesh, setRef }: ToolbarProps) {
  const newMesh = (_: React.MouseEvent<HTMLElement>, shape: Shape) => {
    switch (shape) {
      case Shape.Torus:
        addMesh(
          <TorusController
            key={crypto.randomUUID()}
            position={[0, 0, 0]}
            parentCallback={setRef}
          />,
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="tool-bar">
      <ToolBarItem label="Shapes">
        <MenuItem
          onClick={(e) => {
            newMesh(e, Shape.Torus);
          }}
        >
          Torus
        </MenuItem>
      </ToolBarItem>
    </div>
  );
}

export default Toolbar;
