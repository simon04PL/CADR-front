import { JSX, useState } from 'react';
import CanvasController from '../editor/CanvasController';
import Toolbar from '../editor/Toolbar';
import TorusController from '../editor/TorusController';

function Editor() {
  const [objects, setObjects] = useState<JSX.Element[]>([]);

  const pushMesh = (mesh: JSX.Element) => {
    setObjects(prev => [...prev, mesh]);
  }

  return(
    <>
      <Toolbar addMesh={pushMesh} />
      <CanvasController objects={objects} />
    </>
  )
}

export default Editor
