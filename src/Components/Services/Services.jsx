import {ImLocation,ImMusic } from 'react-icons/im';
import {BiSolidMessageDots,BiSolidFoodMenu,BiSolidVideos } from 'react-icons/bi';

import {MdEmojiFoodBeverage} from 'react-icons/md';

const Services = () => {
    return (
        <div>
           <h2 className="text-3xl font-bold text-center">Our services</h2>
           <div className=" grid grid-cols-1 ml-8 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

 <div className="card w-96  shadow-xl bg-slate-900">
  <div className="card-body">
    <div className="mx-auto bg-blue-800 rounded-lg p-2  text-white"><ImLocation></ImLocation></div>
    <h2 className="card-title mx-auto text-2xl font-bold text-white">Venue Selection</h2>
    <p className='text-white'>A good rule of thumb to keep in mind when looking for a venue is the earlier the better. 
        You can begin your search once you have a good understanding of the following 
        </p>
  </div>
  </div>

  <div className="card w-96  shadow-xl bg-slate-900">
  <div className="card-body">
    <div className="mx-auto bg-blue-800 rounded-lg p-2  text-white"><BiSolidMessageDots></BiSolidMessageDots> </div>
    <h2 className="card-title mx-auto text-2xl font-bold text-white">Invitation Card</h2>
    <p className='text-white'>A good rule of thumb to keep in mind when looking for a venue is the earlier the better. 
        You can begin your search once you have a good understanding of the following 
        </p>
  </div>
  </div>

  <div className="card w-96  shadow-xl bg-slate-900">
  <div className="card-body">
    <div className="mx-auto bg-blue-800 rounded-lg p-2  text-white"> <ImMusic></ImMusic> </div>
    <h2 className="card-title mx-auto text-2xl font-bold text-white">Entertainment</h2>
    <p className='text-white'>A good rule of thumb to keep in mind when looking for a venue is the earlier the better. 
        You can begin your search once you have a good understanding of the following 
        </p>
  </div>
  </div>

  <div className="card w-96  shadow-xl bg-slate-900">
  <div className="card-body">
    <div className="mx-auto bg-blue-800 rounded-lg p-2  text-white"><BiSolidFoodMenu></BiSolidFoodMenu> </div>
    <h2 className="card-title mx-auto text-2xl font-bold text-white">Food and Drinks</h2>
    <p className='text-white'>A good rule of thumb to keep in mind when looking for a venue is the earlier the better. 
        You can begin your search once you have a good understanding of the following 
        </p>
  </div>
  </div>

  <div className="card w-96  shadow-xl bg-slate-900">
  <div className="card-body">
    <div className="mx-auto bg-blue-800 rounded-lg p-2  text-white"><BiSolidVideos></BiSolidVideos> </div>
    <h2 className="card-title mx-auto text-2xl font-bold text-white">Photos and Videos</h2>
    <p className='text-white'>A good rule of thumb to keep in mind when looking for a venue is the earlier the better. 
        You can begin your search once you have a good understanding of the following 
        </p>
  </div>
  </div>

  <div className="card w-96  shadow-xl bg-slate-900">
  <div className="card-body">
    <div className="mx-auto bg-blue-800 rounded-lg p-2  text-white"><MdEmojiFoodBeverage></MdEmojiFoodBeverage> </div>
    <h2 className="card-title mx-auto text-2xl font-bold text-white">Custom Foods</h2>
    <p className='text-white'>A good rule of thumb to keep in mind when looking for a venue is the earlier the better. 
        You can begin your search once you have a good understanding of the following 
        </p>
  </div>
  </div>

           </div>
        </div>
    );
};

export default Services;