import { JSX } from "react";
import TorusController from "./TorusController";
import ToolBarItem from "./ToolBarItem.tsx";
import { MenuItem } from "@mui/material";

interface ToolbarProps {
  addMesh: (mesh: JSX.Element) => void
};

enum Shape {
  Torus,
};

function Toolbar({ addMesh }: ToolbarProps) {
  const newMesh = (_: React.MouseEvent<HTMLElement>, shape: Shape) => {
    switch(shape) {
      case Shape.Torus:
        addMesh(<TorusController position={[0, 0, 0]} />)
        break;
      default:
        break;
    }
  }

  return (
    <div className="tool-bar">
      <ToolBarItem label="Shapes">
        <MenuItem onClick={(e) => {newMesh(e, Shape.Torus)}}>Torus</MenuItem>
      </ToolBarItem>
    </div>
  );
}

export default Toolbar;
