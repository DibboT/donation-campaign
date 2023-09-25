import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Donation from './Donation';
import Root from './Root';
import Statistics from './Statistics';
import DonationDetails from './DonationDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/donation/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/Donation.json')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
