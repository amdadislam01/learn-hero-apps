import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import useApps from "../hooks/useApps";
import AppsCard from "../components/AppsCard";
import { Link } from "react-router";
import Loader from "../components/Loader";

const Home = () => {
  const { apps, loading, error } = useApps();
  const featureApp = Array.isArray(apps) ? apps.slice(0, 8) : [];

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }
  return (
    <div className="bg-[#f5f5f5]">
      <Hero />
      <Stats />
      <div className="max-w-7xl mx-auto px-4 md:px-10  mt-10 md:mt-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-center mb-3">Trending Apps</h1>
          <p className="mb-8 text-gray-600">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featureApp.map((item) => (
            <AppsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 flex justify-center items-center">
          <Link
            to={"/apps"}
            className="px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg transition cursor-pointer mb-6"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
