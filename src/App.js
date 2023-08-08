import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import Home from "./pages/home/Home";
import Cart from "./pages/Cart/Cart";
import Details from "./pages/details/Details";


function App() {


  const Layout =() =>{
    return(
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    );
  };

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },{
        path: "/details",
        element: <Details />,
      },{
        path: "/cart",
        element: <Cart />,
      }
    ]
    }
  ])

  return <RouterProvider router={router} />







}
export default App;
