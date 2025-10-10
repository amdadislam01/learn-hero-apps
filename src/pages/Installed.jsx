import React, { useState, useEffect } from "react";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import emptyImage from "../assets/App-Error.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router";
import Loader from "../components/Loader";

const MySwal = withReactContent(Swal);

const Installed = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
      setInstalledApps(saved);
      setLoading(false);
    }, 500);
  }, []);

  const handleUninstall = (id) => {
    const appToRemove = installedApps.find((item) => item.id === id);

    Swal.fire({
      title: `Uninstall ${appToRemove?.title}?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, uninstall it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = installedApps.filter((item) => item.id !== id);
        setInstalledApps(updated);
        localStorage.setItem("installedApps", JSON.stringify(updated));

        Swal.fire({
          title: "Uninstalled!",
          text: `${appToRemove?.title} has been successfully removed.`,
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
        });
      }
    });
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOption === "low") {
      return a.downloads - b.downloads;
    } else if (sortOption === "high") {
      return b.downloads - a.downloads;
    }
    return 0;
  });

  if (loading) {
    return (
        <Loader />
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10 px-4 md:px-8 mt-10 md:mt-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-5">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-sm md:text-xl mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10">
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
              <option value="">Sort By Download</option>
              <option value="low">Low To High</option>
              <option value="high">High To Low</option>
            </select>
          </div>
        </div>

        {sortedApps.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <img
              src={emptyImage}
              alt="No Apps"
              className="w-80 h-80 object-contain mb-6"
            />
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              No Apps Installed
            </h2>
            <p className="text-gray-500 mt-2">
              You haven't installed any apps yet. Browse and install to get started!
            </p>
            <div className="mt-10 flex justify-center items-center">
              <Link
                to={"/apps"}
                className="px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg transition cursor-pointer mb-6"
              >
                Apps
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedApps.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="text-gray-800 font-semibold">{item.title}</h3>
                    <div className="flex items-center gap-3 text-sm mt-1">
                      {/* Downloads */}
                      <div className="flex items-center gap-1 text-green-600">
                        <img src={download} alt="Downloads" className="w-4 h-4" />
                        <span>{item.downloads}M</span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 text-yellow-500">
                        <img src={rating} alt="Star" className="w-4 h-4" />
                        <span>{item.ratingAvg}</span>
                      </div>
                      <p className="text-gray-500">{item.size} MB</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(item.id)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg transition cursor-pointer"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installed;
