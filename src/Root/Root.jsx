import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="w-[1200px] mx-auto">
        <Navbar></Navbar>
            <Outlet></Outlet>
           <Toaster></Toaster>
        </div>
    );
};

export default Root;