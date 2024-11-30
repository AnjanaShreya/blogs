import React from 'react';
// import Navbar from './Navbar/Navbar'; 
import Navbar from './Navbar.js/Navbar';

const Dashboard = () => {
  return (
    <div>
      <section
        className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center"
      >
        <Navbar />
        <div className="flex flex-col justify-center text-center items-center h-3/4">
          <h2 className="text-white text-2xl font-medium">Think. Learn. Share.</h2>
          <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
          "Your trusted source for legal insights, simplified."
          </h1>
          <div className="text-xl">
            {/* <Button /> */}
            <button className="bg-[#002a32d5] text-white  px-6 py-2 rounded-full">
              Publish Your Blog 
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
