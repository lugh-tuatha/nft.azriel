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
    path: "/nft.azriel/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/nft.azriel/marketplace",
    element: <Marketplace />,
  },
  {
    path: "/nft.azriel/gamezone",
    element: <GameZone />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
