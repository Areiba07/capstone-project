import React, { useState } from "react";
import CategoryCard from "./category-card";

const categories = [
  {
    title: "Category 1",
    description: "Description for Category 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Category 2",
    description: "Description for Category 2",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Category 3",
    description: "Description for Category 3",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Category 4",
    description: "Description for Category 4",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Category 5",
    description: "Description for Category 5",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Category 6",
    description: "Description for Category 6",
    imageUrl: "https://via.placeholder.com/150",
  },
];

function BrowseCategories() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAll, setViewAll] = useState(false);

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
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <div className="grid grid-cols-5 md:grid-cols-5 gap-4 mt-5">
        {visibleCategories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
      {viewAll ? (
        <button
          className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg"
          onClick={handleClickPagination}
        >
          Return
        </button>
      ) : (
        <>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
            onClick={handleClickNext}
          >
            Next Categories
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 mt-2 rounded-lg"
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
