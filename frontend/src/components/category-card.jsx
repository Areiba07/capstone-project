import React from "react";
import { Button, Card } from 'flowbite-react'; 

const CategoryCard = ({ title, description, imageUrl }) => {
  return (
    <Card className="flex max-w-m">
      <img src={imageUrl} alt={title} className="w-24 h-24 mx-auto mb-4" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Button gradientDuoTone="pinkToOrange">
        <p>
          Explore
        </p>
      </Button>
    </Card>
  );
};

export default CategoryCard;
