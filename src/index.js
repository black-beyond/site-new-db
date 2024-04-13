import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // routing
import { PageDataProvider } from './app-data'; // global state
import './styles/index.scss'; // styles
import About from './pages/About';
import Landing from './pages/Landing';

/* site router */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/intro",
    element: <Landing />
  },
  {
    path: "/about",
    element: <About />
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <PageDataProvider>
      <RouterProvider router={router} />
    </PageDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);