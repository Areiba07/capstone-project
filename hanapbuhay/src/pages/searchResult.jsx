// src/App.js
import React, { useState } from 'react';
import '../assets/styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDollarSign, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const data = [
  { id: 1, name: 'Item 1', category: 'Category A', price: 10, location: 'Location 1', stars: 4 },
  { id: 2, name: 'Item 2', category: 'Category B', price: 20, location: 'Location 2', stars: 3 },
  // Add more data here
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [starRating, setStarRating] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryFilter = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleMinPriceFilter = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceFilter = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleLocationFilter = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleStarRatingFilter = (event) => {
    setStarRating(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === '' || item.category === categoryFilter) &&
      (minPrice === '' || item.price >= parseInt(minPrice)) &&
      (maxPrice === '' || item.price <= parseInt(maxPrice)) &&
      (locationFilter === '' || item.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
      (starRating === '' || item.stars >= parseInt(starRating))
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-8 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-1/3"
          />
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <FontAwesomeIcon icon={faDollarSign} className="text-gray-500 mr-2" />
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={handleMinPriceFilter}
              className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-1/4"
            />
            <span className="mx-2">-</span>
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={handleMaxPriceFilter}
              className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-1/4"
            />
          </div>
          <div className="mr-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Location"
              value={locationFilter}
              onChange={handleLocationFilter}
              className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-1/3"
            />
          </div>
          <div>
            Star Rating:
            <input
              type="number"
              placeholder="Min Star Rating"
              value={starRating}
              onChange={handleStarRatingFilter}
              className="px-10 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 w-1/4"
            />
          </div>
        </div>
      </div>
      <ul className="mt-8">
        {filteredData.map((item) => (
          <li key={item.id} className="p-4 border rounded-md shadow-md mb-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-500">{item.category}</p>
            <p className="text-gray-500">${item.price}</p>
            <p className="text-gray-500">{item.location}</p>
            <p className="text-gray-500">Star Rating: {item.stars}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
