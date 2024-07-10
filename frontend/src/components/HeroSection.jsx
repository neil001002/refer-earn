import React from "react";

const HeroSection = ({ onReferNow }) => {
  return (
    <div className="bg-blue-500 text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Refer & Earn</h1>
      <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-100" onClick={onReferNow}>
        Refer Now
      </button>
    </div>
  );
};

export default HeroSection;
