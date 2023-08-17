import React, { useState } from "react";

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
    <>
      <h1>Find and Discover Local Services</h1>
      <div className="flex flex-row">
        <div>
          <input
            type="text"
            placeholder="Enter keywords"
            value={keyword}
            onChange={handleKeywordChange}
          />
          <button onClick={handleSearch}>(Icon Search)</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={handleLocationChange}
          />
          <button onClick={handleSearch}>(Icon Location)</button>
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="flex flex-row">
        <p>can't find the service you're looking for?</p>
        <a href="serviceBoard" style={{ color: "blue" }}>
          Request a Service
        </a>
      </div>
    </>
  );
};

export default SearchComponent;
