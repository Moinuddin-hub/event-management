import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({data}) => {
    // console.log(data);
    const{id,name,image,price,description}=data;
    return (
         <div className="mt-8 py-4">
           
       <div className="card w-80 lg:w-full  h-96 shadow-xl ">
        <figure><img src={image} alt="Shoes" className='w-full h-72' /></figure>
        <div className="p-4 h-72">
         <div className=" flex item-center justify-between mt-2">
         <h2 className='text-2xl font-bold'>{name}</h2>
          <p className='text-xl font-semibold mr-4'>Price:{price}</p>
         </div>
          <p className='font-semibold lg:mt-4'>{description}</p>
          <div className="card-actions justify-end mt-4">
          <Link to={`/data/${id}`}>  <button className="btn btn-primary w-full ">View Details</button></Link>
          </div>
        </div>
      </div>
         </div>
    );
};

export default Service;