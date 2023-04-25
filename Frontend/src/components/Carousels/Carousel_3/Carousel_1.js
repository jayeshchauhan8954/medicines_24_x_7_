import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel_1.css';
import { carousel_1 } from '../../carousel_json_file/_c1';
import ProductCard from './ProductCard_1';

const handleDragStart = (e) => e.preventDefault();

const Slider1 = () => {
	const items = carousel_1.carousel.map((carousel) => <ProductCard key={carousel.id} carousel={carousel} />);

	return (
		<div>
			<AliceCarousel
				activeIndex={5}
				animationDuration={600}
				autoPlay
				touchTracking
				infinite
				disableButtonsControls
				disableDotsControls
				responsive={{ 0: { items: 6 } }}
				mouseTracking
				items={items}
			/>
		</div>
	);
};

export default Slider1;
