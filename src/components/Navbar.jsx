import React from "react";
import { NavLink } from "react-router";
import logo from "/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3] px-4 py-2"
            : "text-gray-700 font-work hover:text-[#632EE3] px-4 py-2 transition"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
          isActive
            ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3] px-4 py-2"
            : "text-gray-700 font-work hover:text-[#632EE3] px-4 py-2 transition"
        }
      >
        Apps
      </NavLink>
      <NavLink
        to="/install"
        className={({ isActive }) =>
          isActive
            ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3] px-4 py-2"
            : "text-gray-700 font-work hover:text-[#632EE3] px-4 py-2 transition"
        }
      >
        Installation
      </NavLink>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-10 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
              <div className="mt-3 flex flex-col gap-2">
                <a className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md text-white">
                  <span>
                    <Github />
                  </span>{" "}
                  Contribute
                </a>
              </div>
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <span className="font-work text-2xl font-bold text-[#632EE3]">
              HERO.<span className="text-[#632EE3]">IO</span>
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-4 hidden sm:flex">
          <a className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md text-white">
            <span>
              <Github />
            </span>{" "}
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
