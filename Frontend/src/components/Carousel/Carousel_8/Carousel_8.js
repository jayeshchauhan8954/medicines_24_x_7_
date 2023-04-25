import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel_8.css";
import { carousel_8 } from "../../carousel_json_file/_c8";
import ProductCard from "./ProductCard_8";

const handleDragStart = (e) => e.preventDefault();

const Slider2 = () => {
  const items = carousel_8.carousel.map((carousel) => (
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

export default Slider2;
