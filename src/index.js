import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import App from './App';
import Root from './routes/root';
import About from './pages/About';
import Standard from './pages/Standard';
import Percentage from './pages/Percentage';

const root = createRoot(document.getElementById('app'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Standard />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/standard',
    element: <Standard />,
  },
  {
    path: '/percentage',
    element: <Percentage />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>
);
