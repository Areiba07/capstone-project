import "../assets/styles/index.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselHome() {
  return (
    <>
      <div className="carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
      >
        <div className="carousel-item">
          <img src="https://www.dynamique-mag.com/wp-content/uploads/c9712ea5c75c8483593ec967a0826907.jpg" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="https://www.dynamique-mag.com/wp-content/uploads/c9712ea5c75c8483593ec967a0826907.jpg" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="https://www.dynamique-mag.com/wp-content/uploads/c9712ea5c75c8483593ec967a0826907.jpg" alt="Slide 3" />
        </div>
      </Carousel>
    </div>
    </>
  );
}
