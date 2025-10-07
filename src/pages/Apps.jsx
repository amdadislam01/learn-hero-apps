import React, { useState, useEffect } from "react";
import AppsCard from "../components/AppsCard";
import Loader from "../components/Loader";
import useApps from "../hooks/useApps";
import notImage from "../assets/App-Error.png";

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
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, apps]);

  if (loading) return <Loader />;

  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 mt-10 md:mt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Our All Applications
          </h1>
          <p className="text-gray-500 mb-8">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between items-center px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-700">
            All Products{" "}
            <span className="text-xs text-gray-400">
              ({filteredApps.length} Product)
            </span>
          </h1>
          <div className="flex justify-end w-full max-w-sm">
            <div className="relative">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Products"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
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
        </div>

        {searching ? (
          <Loader />
        ) : filteredApps.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <img src={notImage} alt="No Result" className="w-40 mb-4" />
            <p className="text-gray-500 text-lg">
              No products found for "{search}"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
