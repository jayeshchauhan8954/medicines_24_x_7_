import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel_7.css";
import { carousel_7 } from "../../carousel_json_file/_c7";
import ProductCard from "./ProductCard_7";

const handleDragStart = (e) => e.preventDefault();

const Slider1 = () => {
  const items = carousel_7.carousel.map((carousel) => (
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

export default Slider1;
