import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Dashboard from './pages/Dashboard'
import Marketplace from './pages/Marketplace'
import GameZone from './pages/GameZone'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "/gamezone",
    element: <GameZone />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
