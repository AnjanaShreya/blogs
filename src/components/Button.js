import React from "react";

const Button = ({ onClick }) => {
  return (
    <button
      className="bg-[#002a32d5] text-white px-6 py-2 rounded-full"
      onClick={onClick}
    >
      Publish
    </button>
  );
};  

export default Button;
