import React, { useState } from "react";
import { Button } from "flowbite-react";
import HanapBuhayLogo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

const SearchComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    // search logic here
    console.log("Searching with keyword:", keyword, "and location:", location);
  };

  return (
    <div className="bg-gray-100 mx-auto">
      {/* Header */}
      <img
        alt="Hanap Buhay Logo"
        className="  mx-auto justify-normal w-60 h-60"
        src={HanapBuhayLogo}
      />
      <header>
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Find and Discover Local Services
        </h1>
      </header>

      {/* Content */}
      <div className="container  max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col space-y-4">
            <div className=" justify-items-center flex space-x-2">
              <h2 className="py-4 font-bold text-black text-center">
                Search Service:
              </h2>
              <input
                type="text"
                placeholder="Enter keywords"
                value={keyword}
                onChange={handleKeywordChange}
                className="border border-gray-300 rounded-md py-2 px-3 flex-1"
              />
              <Button
                gradientDuoTone="purpleToPink"
                onClick={handleSearch}
                className="bg-blue-500 text-white rounded-full py-2 px-4"
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
            <div className="flex space-x-2">
              <h2 className="py-4 font-bold text-black text-center">
                Location:
              </h2>
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={handleLocationChange}
                className="border border-gray-300 rounded-md py-2 px-3 flex-1"
              />
              <Button
                gradientDuoTone="purpleToPink"
                onClick={handleSearch}
                className="bg-blue-500 text-white rounded-full py-2 px-4"
              >
                <FontAwesomeIcon icon={faMapMarker} />
              </Button>
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              onClick={handleSearch}
              className="bg-blue-500 text-white rounded-md py-2 px-4"
            >
              Search
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p>Can't find the service you're looking for?</p>
          <a href="serviceBoard" className="text-blue-500">
            Request a Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
