import React from 'react';

const Gallery = () => {
    return (
        <>
         <h2 className="text-4xl text-center py-8" > Our Gallery</h2>
        <div className='grid grid-cols-3 gap-4'>
           
           <div className="">
            <img src="https://i.ibb.co/5M4WNys/picture1.jpg" alt="" className="w-96 h-82" />
           </div>

           <div className="">
            <img src="https://i.ibb.co/LxWj39V/picture2.jpg" alt="" className="w-96 h-82" />
           </div>

           <div className="">
            <img src="https://i.ibb.co/sy42Nf6/picture3.jpg" alt="" className="w-96 h-82" />
           </div>

           <div className="">
            <img src="https://i.ibb.co/N9v27mn/picture4.jpg" alt="" className="w-96 h-82" />
           </div>

           <div className="">
            <img src="https://i.ibb.co/mtzN7LJ/picture5.jpg" alt="" className="w-96 h-82" />
           </div>

           <div className="">
            <img src="https://i.ibb.co/CBLFr9Z/picture6.jpg" alt="" className="w-96 h-82" />
           </div>
        </div>
        </>
    );
};

export default Gallery;