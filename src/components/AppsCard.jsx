import React from "react";
import download from '../assets/icon-downloads.png';
import star from '../assets/icon-ratings.png';
import { Link } from "react-router";

const AppsCard = ({ item }) => {
  return (
    <Link to={`/app/${item.id}`} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* App Image */}
      <div className="w-full h-60 rounded-xl p-2">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-xl"
          />
        )}
      </div>

      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>

        {/* Stats */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
            <img src={download} alt="download" className="w-4 h-4" />
            <span className="text-sm font-medium text-green-600">{item.downloads}M</span>
          </div>

          <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-md">
            <img src={star} alt="star" className="w-4 h-4" />
            <span className="text-sm font-medium text-orange-500">{item.ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
