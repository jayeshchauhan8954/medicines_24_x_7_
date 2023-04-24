// import React, { useState } from 'react';
// import { carousel_5 } from './../../carousel_json_file/_c5';
// import './Carousel.css';

// function Slider() {
// 	const [ activeIndex, setActiveIndex ] = useState(0);

// 	const handlePrev = () => {
// 		setActiveIndex(activeIndex === 0 ? carousel_5.carousel.length - 1 : activeIndex - 1);
// 	};

// 	const handleNext = () => {
// 		setActiveIndex(activeIndex === carousel_5.carousel.length - 1 ? 0 : activeIndex + 1);
// 	};

// 	return (
// 		<div className="slider">
// 			<div className="slider-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
// 				{carousel_5.carousel.map((slide, index) => (
// 					<div className="slide" key={slide.id}>
// 						<img src={slide.image} alt={slide.title} />
// 						<div className="slide-content">
// 							<h6>{slide.title}</h6>
// 							{slide.offer && <p>{slide.offer}</p>}
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 			<button className="slider-prev" onClick={handlePrev}>
// 				Prev
// 			</button>
// 			<button className="slider-next" onClick={handleNext}>
// 				Next
// 			</button>
// 		</div>
// 	);
// }

// export default Slider;

// import React, { useState } from 'react';
// import { carousel_1 } from './../../carousel_json_file/_c1';
// import './Carousel.css';

// function Slider() {
// 	const [ activeIndex, setActiveIndex ] = useState(0);

// 	const handlePrev = () => {
// 		setActiveIndex(activeIndex === 0 ? carousel_1.carousel.length - 1 : activeIndex - 1);
// 	};

// 	const handleNext = () => {
// 		setActiveIndex(activeIndex === carousel_1.carousel.length - 1 ? 0 : activeIndex + 1);
// 	};

// 	return (
// 		<div className="slider-container">
// 			<div className="slider-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
// 				{carousel_1.carousel.map((slide, index) => (
// 					<div className="slide" key={slide.id}>
// 						<img src={slide.image.default} alt={slide.title} />
// 						<div className="slide-content">
// 							<h3>{slide.title}</h3>
// 							{slide.offer && <p>{slide.offer}</p>}
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 			<button className="slider-prev" onClick={handlePrev}>
// 				Prev
// 			</button>
// 			<button className="slider-next" onClick={handleNext}>
// 				Next
// 			</button>
// 		</div>
// 	);
// }

// export default Slider;

// import React, { useState } from 'react';
// import './Carousel.css';
// import { carousel_5 } from './../../carousel_json_file/_c5';

// function Carousel() {
// 	const [ activeIndex, setActiveIndex ] = useState(0);

// 	const handlePrev = () => {
// 		setActiveIndex((activeIndex + carousel_5.carousel.length - 1) % carousel_5.carousel.length);
// 	};

// 	const handleNext = () => {
// 		setActiveIndex((activeIndex + 1) % carousel_5.carousel.length);
// 	};

// 	return (
// 		<div className="carousel">
// 			<div className="carousel-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
// 				{carousel_5.carousel.map((slide) => (
// 					<div className="carousel-slide" key={slide.id}>
// 						<img src={slide.image} alt={slide.title} />
// 						<div className="carousel-slide-content">
// 							<h6>{slide.title}</h6>
// 							{slide.offer && <p>{slide.offer}</p>}
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 			<button className="carousel-prev" onClick={handlePrev}>
// 				Prev
// 			</button>
// 			<button className="carousel-next" onClick={handleNext}>
// 				Next
// 			</button>
// 		</div>
// 	);
// }

// export default Carousel;

/*
import React, { useState } from 'react';
import './Carousel.css';
import { carousel_5 } from './../../carousel_json_file/_c5';

function Carousel() {
	const [ activeGroupIndex, setActiveGroupIndex ] = useState(0);

	const handlePrev = () => {
		setActiveGroupIndex((activeGroupIndex + carousel_5.carousel.length / 4 - 1) % (carousel_5.carousel.length / 4));
	};

	const handleNext = () => {
		setActiveGroupIndex((activeGroupIndex + 1) % (carousel_5.carousel.length / 4));
	};

	const start = activeGroupIndex * 4;
	const end = start + 4;

	return (
		<div className="carousel">
			<div className="carousel-wrapper" style={{ transform: `translateX(-${activeGroupIndex * 100}%)` }}>
				{carousel_5.carousel.slice(start, end).map((slide) => (
					<div className="carousel-slide" key={slide.id}>
						<img src={slide.image} alt={slide.title} />
						<div className="carousel-slide-content">
							<h6>{slide.title}</h6>
							{slide.offer && <p>{slide.offer}</p>}
						</div>
					</div>
				))}
			</div>
			<button className="carousel-prev" onClick={handlePrev}>
				Prev
			</button>
			<button className="carousel-next" onClick={handleNext}>
				Next
			</button>
		</div>
	);
}

export default Carousel;


*/

// vikas code
/*

import React, { useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import { allProducts } from '../../../data/products.data';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.css';

import product1 from './../../../assets/product1.jpg';
import product2 from './../../../assets/product2.jpg';
import product3 from './../../../assets/product3.JPG';
import product4 from './../../../assets/product4.JPG';
import TextUnderline from '../TextUnderline/TextUnderline';
import { useParams } from 'react-router-dom';

const ProductSlider = () => {
	const [ slides, setSlides ] = useState([
		{
			img: product1
		},
		{
			img: product2
		},
		{
			img: product3
		},
		{
			img: product4
		},
		{
			img: product4
		},
		{
			img: product4
		},
		{
			img: product4
		}
	]);
	const { id } = useParams();
	const item = allProducts.products[id - 1];
	console.log(allProducts);

	const [ product, setProduct ] = useState(item);
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2
				}
			}
		]
	};

	return (
		<div className="slider_main">
			<div className="product_heading">
				<h2>OUR PRODUCTS</h2>
				<TextUnderline />
			</div>

			<Slider {...settings}>
				{allProducts.products.map((slide, index) => (
					<div key={index}>
						<ProductCard title={slide.title} imgSrc={slide.image} id={slide.id} price={slide.price} />
				))}
			</Slider>
			<p className="t_and_c">*T&C APPLY</p>
		</div>
	);
};

export default ProductSlider;


*/

import React, { useState, useEffect } from 'react';
import './Carousel.css'; // import CSS file
import { carousel_1 } from './../../carousel_json_file/_c1';

const Carousel = () => {
	const [ startIndex, setStartIndex ] = useState(0);
	const [ endIndex, setEndIndex ] = useState(3);
	const [ totalItems, setTotalItems ] = useState(0);
	const [ carouselItems, setCarouselItems ] = useState([]);

	useEffect(() => {
		setTotalItems(carousel_1.carousel.length);
		showCarouselItems(startIndex, endIndex);
		const interval = setInterval(() => {
			startIndex++;
			endIndex++;
			if (endIndex > totalItems) {
				startIndex = 0;
				endIndex = 3;
			}
			setStartIndex(startIndex);
			setEndIndex(endIndex);
			showCarouselItems(startIndex, endIndex);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const createCarouselItem = (item) => {
		return (
			<div className="carousel-item" key={item.id}>
				<img src={item.image.default} alt={item.title} />
				<h3>{item.title}</h3>
				{item.offer && <p>{item.offer}</p>}
			</div>
		);
	};

	const showCarouselItems = (startIndex, endIndex) => {
		const items = carousel_1.carousel.slice(startIndex, endIndex);
		const carouselItems = items.map((item) => createCarouselItem(item));
		setCarouselItems(carouselItems);
	};

	return (
		<div className="carousel-container">
			<div className="carousel" style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}>
				{carouselItems}
			</div>
		</div>
	);
};

export default Carousel;
