import React, { useState, useEffect } from "react";
import CategoryCard from "./category-card";
import axios from "axios";

/*const categories = [
  {
    title: "Plumbing Services",
    description: "Description for Category 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Electrical Services",
    description: "Description for Category 2",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Gardening Services",
    description: "Description for Category 3",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Masonry Services",
    description: "Description for Category 4",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Computer Hardware Services",
    description: "Description for Category 5",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Tutoring Services",
    description: "Description for Category 6",
    imageUrl: "https://via.placeholder.com/150",
  },
];*/

function BrowseCategories() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/service");
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickNext = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(
      nextPage > Math.ceil(categories.length / itemsPerPage) ? 1 : nextPage
    );
  };

  const handleClickViewAll = () => {
    setViewAll(true);
  };

  const handleClickPagination = () => {
    setViewAll(false);
    setCurrentPage(1);
  };

  let visibleCategories;

  if (viewAll) {
    visibleCategories = categories;
  } else {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    visibleCategories = categories.slice(startIndex, endIndex);
  }

  return (
    <div className=" flex flex-col justify-center items-center bg-gray-100">
      <div className="grid lg:grid-cols-5 gap-4 mt-5">
        {visibleCategories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.service_name}
            description={category.service_description}
            imageUrl={category.service_image}
          />
        ))}
      </div>
      {viewAll ? (
        <button
          className="bg-violet-500 text-white px-4 py-2 mt-2 rounded-lg"
          onClick={handleClickPagination}
        >
          Return
        </button>
      ) : (
        <>
          <button
            className="bg-violet-500 text-white px-4 py-2 mt-2 rounded-lg"
            onClick={handleClickNext}
          >
            Next Categories
          </button>
          <button
            className="bg-violet-500 text-white px-4 py-2 mt-2 rounded-lg"
            onClick={handleClickViewAll}
          >
            View All Categories
          </button>
        </>
      )}
    </div>
  );
}

export default BrowseCategories;
