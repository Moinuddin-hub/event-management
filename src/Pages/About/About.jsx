import React from 'react';

const About = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-center mt-8 py-8">About Us</h2>
     <div className=" border  w-1/2 mr-8 lg:w-full">
  <div className="flex flex-col lg:flex-row lg:gap-8 md:flex-row md:h-96">
    <img src="https://i.ibb.co/BzC5b0m/social-events.webp" className=" w-72 ml-24 lg:w-96 rounded-lg shadow-2xl" />
    <div className='text-center w-72 lg:full md:w-72 lg:ml-4 ml-28'>
      <h1 className="text-md lg:text-3xl text-center mr-8  lg:w-96 md:w-96  mt-8 font-bold">We will give a very special celebration for you</h1>
      <p className="py-6 lg:w-96">Friends from Smith remember Luma as outgoing and involved, active in intramural soccer and in social events sponsored by the college’s house system.</p>
      <button className="btn btn-primary lg:flex">Contact Us</button>
    </div>
  </div>
</div>
      </>
    );
};

export default About;