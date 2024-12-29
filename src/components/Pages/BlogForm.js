import React, { useState } from "react";
import img from './img.jpg'; // Correctly importing the image file
// import Navbar from "../Navbar.js/Navbar";
// import Footer from "../Navbar.js/Footer";

const BlogForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      {/* <div className="relative z-20">
        <Navbar />
      </div> */}
      <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}>
      <div className="bg-black bg-opacity-70 p-6 rounded-lg w-11/12 sm:w-3/4 lg:w-1/2 m-5">
        <form className="space-y-4">
          <h2 className="text-white text-2xl font-bold mb-4 text-center">
            Submit Your Blog
          </h2>

          <div>
            <label htmlFor="name" className="block text-white font-medium mb-1">
              Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="w-full bg-white bg-opacity-90 text-black p-3 rounded-md border border-gray-300"
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-white font-medium mb-1">
              Year: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="year"
              placeholder="Enter your year"
              required
              className="w-full bg-white bg-opacity-90 text-black p-3 rounded-md border border-gray-300"
            />
          </div>

          <div>
            <label htmlFor="degree" className="block text-white font-medium mb-1">
              Degree: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="degree"
              placeholder="Enter your degree"
              required
              className="w-full bg-white bg-opacity-90 text-black p-3 rounded-md border border-gray-300"
            />
          </div>

          <div>
            <label htmlFor="university" className="block text-white font-medium mb-1">
              University: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="university"
              placeholder="Enter your university"
              required
              className="w-full bg-white bg-opacity-90 text-black p-3 rounded-md border border-gray-300"
            />
          </div>

          <div>
            <label htmlFor="shortBio" className="block text-white font-medium mb-1">
              Short Bio: <span className="text-red-500">*</span>
            </label>
            <textarea
              id="shortBio"
              placeholder="Write a short bio..."
              required
              className="w-full bg-white bg-opacity-90 text-black p-3 rounded-md border border-gray-300 h-20 resize-none"
            ></textarea>
          </div>

          <div>
            <label htmlFor="category" className="block text-white font-medium mb-1">
              Select Category: <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              required
              className="w-full bg-white bg-opacity-90 text-black p-3 rounded-md border border-gray-300"
            >
              <option value="" disabled>
                Select category...
              </option>
              <option value="Constitution law">Constitution law</option>
              <option value="Constitution of India">Constitution of India</option>
              <option value="The Code of Civil Procedure 1908">
                The Code of Civil Procedure 1908
              </option>
              <option value="Administrative Law">Administrative Law</option>
              <option value="The Law of Contracts">The Law of Contracts</option>
              <option value="BNSS 2023">BNSS 2023</option>
              <option value="The Law of Evidence">The Law of Evidence</option>
              <option value="Law of Torts">Law of Torts</option>
              <option value="Election Laws">Election Laws</option>
              <option value="Human Rights">Human Rights</option>
              <option value="Other Category">Other Category</option>
            </select>
          </div>

          {selectedCategory === "Other Category" && (
            <div>
              <label
                htmlFor="otherCategory"
                className="block text-white font-medium mb-1"
              >
                Specify Category Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="otherCategory"
                placeholder="Enter category name"
                required
                className="w-full bg-white bg-opacity-90 text-black p-3 rounded-md border border-gray-300"
              />
            </div>
          )}

          <div>
            <label htmlFor="blog" className="block text-white font-medium mb-1">
              Write Your Blog: <span className="text-red-500">*</span>
            </label>
            <textarea
              id="blog"
              placeholder="Write your blog here..."
              required
              className="w-full bg-white bg-opacity-90 text-black p-3 rounded-md border border-gray-300 h-52 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    {/* <Footer /> */}
    </div>
  );
};

export default BlogForm;
