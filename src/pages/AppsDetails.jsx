import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import Loader from "../components/Loader";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(saved);
  }, []);

  if (loading) return <Loader />;

  const app = apps.find((p) => String(p.id) === id);

  if (!app) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-xl font-semibold text-gray-600">
        Product Not Found ❌
      </div>
    );
  }

  const isInstalled = installedApps.some((a) => a.id === app.id);

  const handleInstall = () => {
    if (!isInstalled) {
      const updated = [...installedApps, app];
      setInstalledApps(updated);
      localStorage.setItem("installedApps", JSON.stringify(updated));

      Swal.fire({
        title: "Installed!",
        text: `${app.title} has been successfully installed.`,
        icon: "success",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' }
      });
    }
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen px-4 sm:px-6 lg:px-0 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-20 max-w-6xl mx-auto">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-80">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-72 sm:h-80 md:h-80 object-contain rounded-md"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {app.title}
          </h2>
          <p className="text-sm sm:text-md text-gray-500 mt-2">
            Developed by{" "}
            <a
              href={app.developerLink}
              className="text-violet-600 font-bold hover:underline"
            >
              {app.developer || "productive.io"}
            </a>
          </p>

          <div className="border-t border-gray-200 my-4"></div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            {/* Downloads */}
            <div className="flex flex-col gap-1 sm:gap-2 items-center">
              <img src={download} alt="Download Icon" className="w-10 h-10" />
              <div className="text-center">
                <p className="text-sm text-gray-500">Downloads</p>
                <p className="text-xl sm:text-2xl md:text-4xl font-extrabold">
                  {app.downloads}M
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex flex-col gap-1 sm:gap-2 items-center">
              <img src={rating} alt="Star Icon" className="w-10 h-10" />
              <div className="text-center">
                <p className="text-sm text-gray-500">Average Ratings</p>
                <p className="text-xl sm:text-2xl md:text-4xl font-extrabold">
                  {app.ratingAvg}
                </p>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex flex-col gap-1 sm:gap-2 items-center">
              <img src={review} alt="Review Icon" className="w-10 h-10" />
              <div className="text-center">
                <p className="text-sm text-gray-500">Total Reviews</p>
                <p className="text-xl sm:text-2xl md:text-4xl font-extrabold">
                  {app.reviews}
                </p>
              </div>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`mt-6 px-6 py-3 rounded-lg transition-all duration-300 font-medium w-full sm:w-auto cursor-pointer ${
              isInstalled
                ? "bg-emerald-400 cursor-not-allowed text-white"
                : "bg-emerald-500 hover:bg-emerald-600 text-white"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Rating Chart */}
      {app.ratings && (
        <div className="max-w-6xl mx-auto mb-10 border-t border-b pt-6 pb-6 border-gray-300 px-2 sm:px-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Rating
          </h3>
          <div className="w-full h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={[...app.ratings].reverse()}
                margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis type="number" domain={[0, 12000]} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="count" fill="#22c55e" barSize={18} radius={[4, 4, 4, 4]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* App Description */}
      {app.description && (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-2 sm:px-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Description
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">{app.description}</p>
        </div>
      )}
    </div>
  );
};

export default AppsDetails;
