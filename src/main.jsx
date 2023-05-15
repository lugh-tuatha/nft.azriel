import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Dashboard from './pages/Dashboard'
import Marketplace from './pages/Marketplace'
import GameZone from './pages/GameZone'
import Faqs from './pages/Faqs'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "/FAQ's",
    element: <Faqs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
