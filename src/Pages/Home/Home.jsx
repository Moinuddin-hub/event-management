
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Service from "../../Components/Navbar/Service";
import Footer from "../../Components/Footer/Footer";
import Prices from "../Prices/Prices";
import About from "../About/About";
const Home = () => {

    const data=useLoaderData();
    // console.log(data);

    return (
    <div className="">
       <div className="mt-8">
       
       </div>
        <h2 className="text-3xl text-center font-bold">Our service</h2>
            <div className="grid grid-cols-3 gap-4">
           {
            data.map(data=><Service key={data.id} data={data}></Service>)
           }
        </div>
        <Prices></Prices>
       <About></About>
        <Footer></Footer>
    </div>
    );
};

export default Home;