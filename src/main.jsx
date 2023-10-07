import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root/Root';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home/Home';
import NotFound from './Components/Navbar/NotFound';
import Service from './Components/Navbar/Service';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
        loader:()=> fetch('./data.json')
      },
      {
        path:'/service',
        element:<Service></Service>
      },
      {
        path:'/data/:id',
        element:<ServiceDetails></ServiceDetails>,
        loader:()=> fetch('./data.json')
      },
      {
        
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
