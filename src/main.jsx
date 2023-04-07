import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/main';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/Orders/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('tShirts.json')
      },
      {
        path: '/orders',
        element: <OrderReview />
      },
      {
        path: 'grandpa',
        element: <Grandpa />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
