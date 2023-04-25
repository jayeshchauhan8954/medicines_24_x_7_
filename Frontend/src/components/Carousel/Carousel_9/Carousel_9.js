import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel_9.css";
import { carousel_9 } from "../../carousel_json_file/_c9";
import ProductCard from "./ProductCard_9";

const handleDragStart = (e) => e.preventDefault();

const Slider3 = () => {
  const items = carousel_9.carousel.map((carousel) => (
    <ProductCard
      key={carousel.id}
      carousel={carousel}
      handleDragStart={handleDragStart}
    />
  ));

  return (
    <div>
      <AliceCarousel
        activeIndex={5}
        animationDuration={600}
        // autoPlay
        touchTracking
        // infinite
        // disableButtonsControls
        disableDotsControls
        responsive={{ 0: { items: 6 } }}
        mouseTracking
        items={items}
      />
    </div>
  );
};

export default Slider3;
