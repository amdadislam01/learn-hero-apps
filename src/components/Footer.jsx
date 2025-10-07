import React from "react";
import { Github } from "lucide-react";
import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-10 h-10" />
              <span className="font-work text-2xl font-bold text-[#632EE3]">
                HERO.<span className="text-[#632EE3]">IO</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm max-w-xs">
              Building productive apps to make life smarter, simpler & more exciting.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="/" className="text-gray-600 hover:text-[#632EE3] transition">Home</a>
              </li>
              <li>
                <a href="/apps" className="text-gray-600 hover:text-[#632EE3] transition">Apps</a>
              </li>
              <li>
                <a href="/install" className="text-gray-600 hover:text-[#632EE3] transition">Installation</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <h4 className="font-semibold text-gray-900">Follow Us</h4>
            <a
              href="https://github.com/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md text-white shadow hover:opacity-90 transition"
            >
              <Github size={20} /> Contribute
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} HERO.IO — All Rights Reserved.
          <p className="text-gray-500 text-sm">Developed By <a href="https://amdadislam-01.netlify.app/">Amdad Islam</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
