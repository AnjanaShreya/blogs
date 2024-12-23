import React from "react";
import img2 from "../../assets/img2.jpg";
import Navbar from "../Navbar.js/Navbar";
import Footer from "../Navbar.js/Footer";

const ContactUs = () => {
  return (
    <div className="relative">
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative">
        {/* Image */}
        <img src={img2} alt="Contactus" className="w-full h-72 object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-28 z-10">
          <h1 className="text-white text-3xl font-bold">Contact Us</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;