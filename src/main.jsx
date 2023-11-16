import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Capsule from './components/Capsule.jsx';
import Cores from './components/Cores.jsx';
import Dragons from './components/Dragons.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "capsule",
        element: <Capsule />,
      },
      {
        path: "cores",
        element: <Cores />,
      },
      {
        path: "dragons",
        element: <Dragons />,
      },

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
