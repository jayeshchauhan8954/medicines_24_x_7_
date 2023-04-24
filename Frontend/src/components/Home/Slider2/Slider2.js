import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import item1 from "../../../assets/premium_photo.avif";
import "./Slider2.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
	<div className="h-56 items">
		<img
			width={527}
			src={item1}
			onDragStart={handleDragStart}
			role="presentation"
		/>
	</div>,
	<div className="h-56 items">
		<img
			width={527}
			src={item1}
			onDragStart={handleDragStart}
			role="presentation"
		/>
	</div>,
	<div className="h-56 items">
		<img
			width={527}
			src={item1}
			onDragStart={handleDragStart}
			role="presentation"
		/>
	</div>,
	<div className="h-56 items">
		<img
			width={527}
			src={item1}
			onDragStart={handleDragStart}
			role="presentation"
		/>
	</div>,
	<div className="h-56 items">
		<img
			width={527}
			src={item1}
			onDragStart={handleDragStart}
			role="presentation"
		/>
	</div>,
	<div className="h-56 items">
		<img
			width={527}
			src={item1}
			onDragStart={handleDragStart}
			role="presentation"
		/>
	</div>,
	<div className="h-56 items">
		<img
			width={527}
			src={item1}
			onDragStart={handleDragStart}
			role="presentation"
		/>
	</div>,
	<div className="h-56 items">
		<img
			width={527}
			src={item1}
			onDragStart={handleDragStart}
			role="presentation"
		/>
	</div>,
	<div className="h-56 items">
		<img
			width={527}
			src={item1}
			onDragStart={handleDragStart}
			role="presentation"
		/>
	</div>,
	<div className="h-56 items">
		<img
			width={527}
			src={item1}
			onDragStart={handleDragStart}
			role="presentation"
		/>
	</div>,
];

const Slider2 = () => {
	return (
		<AliceCarousel
			activeIndex={5}
			animationDuration={2000}
			autoPlay
			touchTracking
			infinite
			// disableButtonsControls
			disableDotsControls
			responsive={{ 0: { items: 2 } }}
			mouseTracking
			items={items}
		/>
	);
};

export default Slider2;
