import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import item1 from "../../assets/christina-victoria-craft-ZHys6xN7sUE-unsplash.jpg";
import "./Slider3.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
	<img
		width={180}
		height={186}
		src={item1}
		onDragStart={handleDragStart}
		role="presentation"
	/>,
];

const Slider3 = () => {
	return (
		<AliceCarousel
			activeIndex={5}
			animationDuration={2000}
			autoPlay
			touchTracking
			infinite
			// disableButtonsControls
			disableDotsControls
			responsive={{ 0: { items: 5 } }}
			mouseTracking
			items={items}
		/>
	);
};

export default Slider3;
