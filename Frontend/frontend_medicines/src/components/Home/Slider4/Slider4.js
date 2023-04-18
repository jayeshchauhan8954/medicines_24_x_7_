import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import item1 from "../../assets/premium_photo.avif";
import "./Slider4.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={360}
		height={80}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
];

const Slider4 = () => {
	return (
		<AliceCarousel
			activeIndex={5}
			animationDuration={2000}
			autoPlay
			touchTracking
			infinite
			// disableButtonsControls
			disableDotsControls
			responsive={{ 0: { items: 3 } }}
			mouseTracking
			items={items}
		/>
	);
};

export default Slider4;
