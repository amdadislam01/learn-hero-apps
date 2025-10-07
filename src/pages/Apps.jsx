import React, { useState, useEffect } from "react";
import AppsCard from "../components/AppsCard";
import Loader from "../components/Loader";
import useApps from "../hooks/useApps";
import notImage from "../assets/App-Error.png";
import { Link } from "react-router";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const term = search.trim().toLowerCase();

    if (!term) {
      setFilteredApps(apps);
      setSearching(false);
      return;
    }

    setSearching(true);

    const timeout = setTimeout(() => {
      const result = apps.filter((app) =>
        app.title.toLowerCase().includes(term)
      );
      setFilteredApps(result);
      setSearching(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [search, apps]);

  if (loading) return <Loader />;

  if (error)
    return <p className="text-center text-red-500 mt-10">Error: {error.message}</p>;

  return (
    <div className="bg-[#f5f5f5] min-h-screen mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 md:py-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
            Our All Applications
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search  */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
          <h1 className="text-lg md:text-xl font-semibold text-gray-700">
            All Products{" "}
            <span className="text-xs text-gray-400">
              ({filteredApps.length} Product{filteredApps.length !== 1 && "s"})
            </span>
          </h1>

          <div className="w-full md:w-1/3 relative">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Products"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm text-sm md:text-base"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {searching ? (
          <Loader />
        ) : filteredApps.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <img src={notImage} alt="No Result" className="w-60 md:w-80 mb-5" />
            <h1 className="text-gray-700 font-bold text-2xl md:text-4xl mb-3">
              OPPS!! APP NOT FOUND
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-md">
              The App you are requesting is not found on our system. Please try
              searching for another app.
            </p>
            <div className="mt-8">
              <Link
                to={"/"}
                className="px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg shadow-lg hover:shadow-xl transition"
              >
                Go Back!
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredApps.map((item) => (
              <AppsCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
