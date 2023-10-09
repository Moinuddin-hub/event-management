import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-8 py-8">About Us</h2>
     <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/BzC5b0m/social-events.webp" className="w-96 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">We will give a very special celebration for you</h1>
      <p className="py-6">Friends from Smith remember Luma as outgoing and involved, active in intramural soccer and in social events sponsored by the college’s house system.</p>
      <button className="btn btn-primary">Contact Us</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;