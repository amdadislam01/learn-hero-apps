
import React from "react";

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div>
            <p className="text-lg text-gray-200">Total Downloads</p>
            <h3 className="text-4xl md:text-5xl font-extrabold mt-2">29.6M</h3>
            <p className="text-sm mt-2 text-gray-300">21% More Than Last Month</p>
          </div>

          {/* Card 2 */}
          <div>
            <p className="text-lg text-gray-200">Total Reviews</p>
            <h3 className="text-4xl md:text-5xl font-extrabold mt-2">906K</h3>
            <p className="text-sm mt-2 text-gray-300">46% More Than Last Month</p>
          </div>

          {/* Card 3 */}
          <div>
            <p className="text-lg text-gray-200">Active Apps</p>
            <h3 className="text-4xl md:text-5xl font-extrabold mt-2">132+</h3>
            <p className="text-sm mt-2 text-gray-300">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
