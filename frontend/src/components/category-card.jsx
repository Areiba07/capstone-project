import React from "react";

const CategoryCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={imageUrl} alt={title} className="w-24 h-24 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CategoryCard;
