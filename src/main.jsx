import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root/Root';
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home/Home';
import NotFound from './Components/Navbar/NotFound';
import Service from './Components/Navbar/Service';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Pages/Provider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Gallery from './Components/Gallary/Gallary';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('./data.json')
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'/data/:id',
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader:()=> fetch('./data.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
          path:'/register',
          element:<Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
