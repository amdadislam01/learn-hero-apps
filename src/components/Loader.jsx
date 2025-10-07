import React from "react";
import loadingImage from "/logo.png";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] px-4">
      <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4">
        <span className="text-4xl md:text-6xl font-extrabold text-gray-700 animate-bounce-scale">
          L
        </span>

        <img
          src={loadingImage}
          alt="logo"
          className="w-16 h-16 md:w-24 md:h-24 rounded-full animate-spin-slow"
        />

        <span className="text-4xl md:text-6xl font-extrabold text-gray-700 flex flex-wrap justify-center space-x-1">
          {"OADING".split("").map((letter, idx) => (
            <span
              key={idx}
              className="animate-bounce-scale"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>

      {/*  keyframes */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 2s linear infinite;
          }

          @keyframes bounce-scale {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-15px) scale(1.2); }
          }
          .animate-bounce-scale {
            display: inline-block;
            animation: bounce-scale 1s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
