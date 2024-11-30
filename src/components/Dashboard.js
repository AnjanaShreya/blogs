import React, { useState } from "react";
import Navbar from "./Navbar.js/Navbar";
import Signup from "./Signup"; // Import the Signup component

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleButtonClick = () => {
    setShowPopup(true); // Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

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
            {/* Publish Button */}
            <button
              className="bg-[#002a32d5] text-white px-6 py-2 rounded-full"
              onClick={handleButtonClick}
            >
              Publish Your Blog
            </button>
          </div>
        </div>
      </section>

      {/* Sign In/Sign Up Popup */}
      {showPopup && <Signup onClose={handleClosePopup} />}
    </div>
  );
};

export default Dashboard;
