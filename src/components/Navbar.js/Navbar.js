import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import Signup from "../Signup"; // Adjust the import name to match your popup component

const Navbar = () => {
  const [open, setOpen] = useState(false); // Toggle for mobile menu
  const [showPopup, setShowPopup] = useState(false); // Toggle for popup

  const handleButtonClick = () => {
    setShowPopup(true); // Show popup when button is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close popup
  };

  return (
    <nav className="bg-[#f3f4f6d7] shadow-md">
      <div className="flex items-center font-medium justify-between px-5 md:px-10">
        {/* Logo Section */}
        <div className="z-50 p-5 flex justify-between w-full md:w-auto">
          <img src={Logo} alt="Logo" className="md:cursor-pointer h-12" />
          {/* Mobile Menu Toggle */}
          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 hover:text-[#002a32d5] hover:font-bold">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 hover:text-[#002a32d5] hover:font-bold">
              Internships
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 hover:text-[#002a32d5] hover:font-bold">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Publish Button for Desktop */}
        <div className="hidden md:block">
          <Button onClick={handleButtonClick} />
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden fixed bg-[#f3f4f6d7] w-full top-0 overflow-y-auto h-full py-24 pl-4 duration-500 transition-all ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link to="/" className="py-7 px-3 block hover:text-[#002a32d5] hover:font-bold">
              Home
            </Link>
          </li>
          <NavLinks />
          <Link to="/" className="py-7 px-3 block hover:text-[#002a32d5] hover:font-bold">
            Internships
          </Link>
          <Link to="/" className="py-7 px-3 block hover:text-[#002a32d5] hover:font-bold">
            Contact Us
          </Link>
          <div className="py-5">
            {/* Publish Button */}
            <Button onClick={handleButtonClick} />
          </div>
        </ul>
      </div>

      {/* Sign In/Sign Up Popup */}
      {showPopup && <Signup onClose={handleClosePopup} />}
    </nav>
  );
};

export default Navbar;
