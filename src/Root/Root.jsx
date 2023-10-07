import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";

const Root = () => {
    return (
        <div className="w-[1200px] mx-auto">
        <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;