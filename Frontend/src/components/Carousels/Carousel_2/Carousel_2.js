import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel_2.css';
import { carousel_2 } from '../../carousel_json_file/_c2';
import ProductCard from './ProductCard_2';

const handleDragStart = (e) => e.preventDefault();

const Slider2 = () => {
	const items = carousel_2.carousel.map((carousel) => <ProductCard key={carousel.id} carousel={carousel} />);

	return (
		<div>
			<AliceCarousel
				activeIndex={4}
				animationDuration={600}
				// autoPlay
				touchTracking
				// infinite
				disableButtonsControls
				disableDotsControls
				responsive={{ 0: { items: 4 } }}
				mouseTracking
				items={items}
			/>
		</div>
	);
};

export default Slider2;
