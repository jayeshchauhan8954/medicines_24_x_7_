import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Slider1.css";
import { allProducts } from "../../dataa";
import ProductCard from "./ProductCard";

const handleDragStart = (e) => e.preventDefault();

const Slider1 = () => {
	const items = allProducts.products.map((products) => (
		<ProductCard key={products.id} product={products} />
	));

	return (
		<>
			<AliceCarousel
				activeIndex={5}
				animationDuration={2000}
				// autoPlay
				touchTracking
				// infinite
				disableButtonsControls
				disableDotsControls
				responsive={{ 0: { items: 6 } }}
				mouseTracking
				items={items}
			/>
		</>
	);
};

export default Slider1;
