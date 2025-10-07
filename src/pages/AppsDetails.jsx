import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import Loader from "../components/Loader";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  if (loading) {
    return <Loader />;
  }
  const app = apps.find((p) => String(p.id) === id);

  if (!app) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-xl font-semibold text-gray-600">
        Product Not Found ❌
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-12 py-20 w-full max-w-6xl mx-auto mt-10 md:mt-20">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="w-80 h-80 object-contain rounded-md"
          />
        </div>

        {/* Right: Info Section */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            {app.title}
          </h2>
          <p className="text-sm md:text-md text-gray-500 mt-2">
            Developed by{" "}
            <a
              href={app.developerLink || "#"}
              className="text-violet-600 font-bold hover:underline"
            >
              {app.developer || "productive.io"}
            </a>
          </p>

          <div className="border-t border-gray-200 my-4"></div>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-18">
            {/* Downloads */}
            <div className="flex flex-col gap-2">
              <img src={download} alt="Download Icon" className="w-10 h-10" />
              <div>
                <p className="text-sm text-gray-500">Downloads</p>
                <p className="text-2xl md:text-4xl font-extrabold">{app.downloads}M</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex flex-col gap-2">
              <img src={rating} alt="Star Icon" className="w-10 h-10" />
              <div>
                <p className="text-sm text-gray-500">Average Ratings</p>
                <p className="text-2xl md:text-4xl font-extrabold">{app.ratingAvg}</p>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex flex-col gap-2">
              <img src={review} alt="Review Icon" className="w-10 h-10" />
              <div>
                <p className="text-sm text-gray-500">Total Reviews</p>
                <p className="text-2xl md:text-4xl font-extrabold">{app.reviews}</p>
              </div>
            </div>
          </div>

          {/* Install Button */}
          <button className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300">
            Install Now ({app.size} MB) 
          </button>
        </div>
      </div>

      {/* App Description */}
      {app.description && (
        <div className="max-w-6xl mx-auto mt-10 ">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Description
          </h3>
          <p className="text-gray-600">{app.description}</p>
        </div>
      )}
    </div>
  );
};

export default AppsDetails;
