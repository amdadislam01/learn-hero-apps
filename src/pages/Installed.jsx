import React, { useState, useEffect } from "react";
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png'

const Installed = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOption, setSortOption] = useState(""); 

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(saved);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((item) => item.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOption === "low") {
      return a.size - b.size; 
    } else if (sortOption === "high") {
      return b.size - a.size; 
    }
    return 0; 
  });

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10 px-4 md:px-8 mt-10 md:mt-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-900 mt-5">Your Installed Apps</h1>
        <p className="text-gray-500 text-xl mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10">
        {/* Top Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800 border-b-2">
            {installedApps.length} Apps Found
          </h2>

          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 text-sm focus:outline-none cursor-pointer"
            >
              <option value="">Sort By Size</option>
              <option value="low">Low To High</option>
              <option value="high">High To Low</option>
            </select>
          </div>
        </div>

        {/* App List */}
        <div className="space-y-4">
          {sortedApps.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition"
            >
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div>
                  <h3 className="text-gray-800 font-semibold">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm mt-1">
                    {/* Downloads */}
                    <div className="flex items-center gap-1 text-green-600">
                      <img
                        src={download}
                        alt="Downloads"
                        className="w-4 h-4"
                      />
                      <span>{item.downloads}M</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-yellow-500">
                      <img
                        src={rating}
                        alt="Star"
                        className="w-4 h-4"
                      />
                      <span>{item.ratingAvg}</span>
                    </div>

                    {/* Size */}
                    <p className="text-gray-500">{item.size} MB</p>
                  </div>
                </div>
              </div>

              {/* Uninstall Button */}
              <button
                onClick={() => handleUninstall(item.id)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg transition"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installed;
