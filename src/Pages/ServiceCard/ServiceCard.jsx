import React from 'react';


const ServiceCard = ({card}) => {
    
  
    const{id,name,image,price,description}=card;
    return (
        <div >
        <div className="card w-full  h-96 shadow-xl ">

        <figure><img src={image} alt="Shoes" className='w-full h-72' /></figure>
        <div className=" h-72 p-4">
         <div className=" flex item-center justify-between mt-2">
         <h2 className='text-2xl font-bold'>{name}</h2>
          <p className='text-xl font-semibold mr-4'>Price:{price}</p>
         </div>
          <p className='font-semibold'>{description}</p>
          <div className="card-actions justify-end mt-4">
          {/* <Link to={`/data/${id}`}>  <button className="btn btn-primary w-full">View Details</button></Link> */}
          </div>
        </div>

      </div>

        </div>
    );
};

export default ServiceCard;