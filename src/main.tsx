import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/main.scss';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/editor',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
