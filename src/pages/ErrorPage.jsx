import React from 'react'
import { Link } from 'react-router'
import error from '../assets/error-404.png'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] mt-20 px-6 py-12 text-center">
      {/* Error Image */}
      <img
        src={error}
        alt="404 Illustration"
        className="w-64 md:w-80 mb-6 drop-shadow-lg"
      />

      {/* Title */}
      <h1 className="text-6xl md:text-8xl font-extrabold 
                     bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                     bg-clip-text text-transparent drop-shadow-md">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold 
                     bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                     bg-clip-text text-transparent mt-2">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed mt-4">
        Oops! The page you are looking for doesn’t exist or has been moved.
        Please check the URL or go back to the homepage.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="group flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white 
                   px-8 py-3 rounded-full mt-8 font-medium text-lg shadow-md 
                   active:scale-95 transition-all duration-300"
      >
        Back to Home
        <svg
          className="group-hover:translate-x-1 transition-transform"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  )
}

export default ErrorPage
