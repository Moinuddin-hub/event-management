 
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceDetails = () => { 
    const [card ,setCard]=useState({})
    // const [data,setData]=useState({})
    const {id}=useParams();
    console.log(parseInt(id));
    const data=useLoaderData();
  console.log(data);
// useEffect(()=>{
//   fetch('./data.json')
//   .then(res=>res.json())
//   .catch(data=>setData(data))
// },[])

// console.log(data)
  useEffect(()=>{
    const findCard=data?.find((data)=>data.id==id);
    console.log(findCard)
      setCard(findCard);
  },[id,data])

    return (
        <div className='w-96 mt-8 mx-auto flex'>
        
           <ServiceCard card={card}></ServiceCard> 
        
        </div>
    );
};

export default ServiceDetails;