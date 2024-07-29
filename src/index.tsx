import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, RouterProvider
} from 'react-router-dom'

import './index.css';
import reportWebVitals from './reportWebVitals';

import Blog from './pages/Blog'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import About from './pages/About';
import Professional from './pages/Professional';
import Photos from './pages/Photos';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/professional',
    element: <Professional />
  },
  {
    path: '/photos',
    element: <Photos />
  },
  {
    path: '/settings',
    element: <Settings />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading page...</p>} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


