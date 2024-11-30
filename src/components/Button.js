import React, { useState } from "react";

const Button = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn); // Toggle between Sign In and Sign Up forms
  };

  return (
    <>
      {/* Button */}
      <button
        className="bg-[#002a32d5] text-white px-6 py-2 rounded-full"
        onClick={handleButtonClick}
      >
        Publish
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96  p-5 rounded-lg shadow-lg relative">
            {/* Header */}
            <h2 className="text-xl font-semibold mb-4 flex justify-center">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>

            {/* Form */}
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#002a32d5] focus:border-[#002a32d5]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#002a32d5] focus:border-[#002a32d5]"
                  placeholder="Enter your password"
                />
              </div>

              {/* Additional Input for Sign Up */}
              {!isSignIn && (
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#002a32d5] focus:border-[#002a32d5]"
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              <button
                type="submit"
                className="bg-[#002a32d5] text-white px-4 py-2 rounded-lg w-full"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </form>

            {/* Toggle Between Sign In and Sign Up */}
            <p className="mt-4 text-sm text-center text-gray-500">
              {isSignIn ? (
                <>
                  Don't have an account?{" "}
                  <span
                    onClick={toggleForm}
                    className="text-[#002a32d5] cursor-pointer font-medium"
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={toggleForm}
                    className="text-[#002a32d5] cursor-pointer font-medium"
                  >
                    Sign In
                  </span>
                </>
              )}
            </p>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
