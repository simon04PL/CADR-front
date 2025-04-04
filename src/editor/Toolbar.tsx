import { JSX, MouseEventHandler } from "react";
import TorusController from "./TorusController";

interface ToolbarProps {
  addMesh: (mesh: JSX.Element) => void,
};

enum Shape {
  Torus,
  Cube,
};

function Toolbar({ addMesh }: ToolbarProps) {
  const newMesh = (_: React.MouseEvent<HTMLElement>, shape: Shape) => {
    switch(shape) {
      case Shape.Torus:
        addMesh(<TorusController position={[0, 0, 0]} />)
        break;
      case Shape.Cube:
        console.log("cube");
        break;
      default:
        console.log("ouhuh");
        break;
    }
  }

  return (
    <div className="Toolbar">
      <p onClick={ (e) => { newMesh(e, Shape.Torus) } }>Object</p>
    </div>
  );
}

export default Toolbar;
