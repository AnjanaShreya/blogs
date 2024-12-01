import React from "react";
import img2 from "../../assets/img2.jpg";
// import img0 from '../../assets/img0.jpg'
import Navbar from "../Navbar.js/Navbar";
import Footer from "../Navbar.js/Footer";

const Internships = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        {/* Image */}
        <img src={img2} alt="Internship" className="w-full h-72 object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-28">
          <h1 className="text-white text-3xl font-bold">Contact Us</h1>
        </div>
      </div>
      <div>
        {/* Content here */}
        content here<br/>
        content here<br/>
        content here<br/>
        content here<br/>
        content here<br/>
        content here<br/>
        content here<br/>
        content here<br/>
      </div>
      <Footer />
    </div>
  );
};

export default Internships;
