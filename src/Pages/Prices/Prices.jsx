
import { BsCheck} from 'react-icons/bs';
const Prices = () => {
    return (
        <>
        <h2 className="text-3xl text-center font-bold">Our Prices</h2>
        <div className='grid grid-cols-4 mt-4 '>
            
    <div className=" w-64 shadow-xl bg-slate-600">
  <div className="text-center">
    <h2 className=" text-xl  font-bold bg-primary text-yellow-100 text-center mt-4 py-2">For Weddings</h2>
    <p className='text-3xl font-bold text-yellow-100 '>2500TK</p>
    
  <ul className="p-8 text-teal-50 ml-8">
        <li className='flex items-center '> <BsCheck></BsCheck>Full service</li>
        <li className='flex items-center'><BsCheck></BsCheck>Decorations</li>
        <li className='flex items-center'><BsCheck></BsCheck> Music and Photos</li>
        <li className='flex items-center'> <BsCheck></BsCheck>Food and drinks</li>
        <li className='flex items-center'> <BsCheck></BsCheck>Invitation Card</li>
      </ul>
   <a href='#' className='btn w-full btn-primary'>Check out</a>
  </div>
</div>

<div className=" w-64 shadow-xl bg-slate-600">
  <div className="text-center">
    <h2 className=" text-xl  font-bold bg-primary text-yellow-100 text-center mt-4 py-2">For Birthday</h2>
    <p className='text-3xl font-bold text-yellow-100 '>28000Tk</p>
    
  <ul className="p-8 text-teal-50 ml-8">
        <li className='flex items-center '> <BsCheck></BsCheck>Full service</li>
        <li className='flex items-center'><BsCheck></BsCheck>Decorations</li>
        <li className='flex items-center'><BsCheck></BsCheck> Music and Photos</li>
        <li className='flex items-center'> <BsCheck></BsCheck>Food and drinks</li>
        <li className='flex items-center'> <BsCheck></BsCheck>Invitation Card</li>
      </ul>
   <a href='#' className='btn w-full btn-primary'>Check out</a>
  </div>
</div>

<div className=" w-64 shadow-xl bg-slate-600">
  <div className="text-center">
    <h2 className=" text-xl  font-bold bg-primary text-yellow-100 text-center mt-4 py-2">For Anniversaries</h2>
    <p className='text-3xl font-bold text-yellow-100 '>1500TK</p>
    
  <ul className="p-8 text-teal-50 ml-8">
        <li className='flex items-center '> <BsCheck></BsCheck>Full service</li>
        <li className='flex items-center'><BsCheck></BsCheck>Decorations</li>
        <li className='flex items-center'><BsCheck></BsCheck> Music and Photos</li>
        <li className='flex items-center'> <BsCheck></BsCheck>Food and drinks</li>
        <li className='flex items-center'> <BsCheck></BsCheck>Invitation Card</li>
      </ul>
   <a href='#' className='btn w-full btn-primary'>Check out</a>
  </div>
</div>

<div className=" w-64 shadow-xl bg-slate-600">
  <div className="text-center">
    <h2 className=" text-xl  font-bold bg-primary text-yellow-100 text-center mt-4 py-2">For Engagementy</h2>
    <p className='text-3xl font-bold text-yellow-100 '>22000Tk</p>
    
  <ul className="p-8 text-teal-50 ml-8">
        <li className='flex items-center '> <BsCheck></BsCheck>Full service</li>
        <li className='flex items-center'><BsCheck></BsCheck>Decorations</li>
        <li className='flex items-center'><BsCheck></BsCheck> Music and Photos</li>
        <li className='flex items-center'> <BsCheck></BsCheck>Food and drinks</li>
        <li className='flex items-center'> <BsCheck></BsCheck>Invitation Card</li>
      </ul>
   <a href='#' className='btn w-full btn-primary'>Check out</a>
  </div>
</div>

        </div>
        </>
    );
};

export default Prices;