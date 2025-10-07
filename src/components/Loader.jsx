import React from "react";
import loadingImage from "/logo.png";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5]">
      <div className="flex items-center text-6xl font-extrabold text-gray-800 space-x-3">
        {/* L bouncing */}
        <span className="text-gray-700 animate-bounce" style={{ animationDuration: "1.5s" }}>
          L
        </span>

        {/* Image rotating */}
        <img
          src={loadingImage}
          alt="logo"
          className="w-20 h-20 rounded-full shadow-2xl animate-spin-slow"
        />

        {/* Rest of letters bouncing together */}
        <span className="inline-block text-gray-700 font-bold animate-bounce" style={{ animationDuration: "1.5s" }}>
          OADING
        </span>
      </div>

      {/* Inline keyframes for slow rotation */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 2s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
