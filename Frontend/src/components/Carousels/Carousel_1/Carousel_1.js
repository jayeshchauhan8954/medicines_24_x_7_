import React, { useState } from 'react';
import { carousel_5 } from './../../carousel_json_file/_c5';
import './Carousel.css';

function Slider() {
	const [ activeIndex, setActiveIndex ] = useState(0);

	const handlePrev = () => {
		setActiveIndex(activeIndex === 0 ? carousel_5.carousel.length - 1 : activeIndex - 1);
	};

	const handleNext = () => {
		setActiveIndex(activeIndex === carousel_5.carousel.length - 1 ? 0 : activeIndex + 1);
	};

	return (
		<div className="slider">
			<div className="slider-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
				{carousel_5.carousel.map((slide, index) => (
					<div className="slide" key={slide.id}>
						<img src={slide.image} alt={slide.title} />
						<div className="slide-content">
							<h6>{slide.title}</h6>
							{slide.offer && <p>{slide.offer}</p>}
						</div>
					</div>
				))}
			</div>
			<button className="slider-prev" onClick={handlePrev}>
				Prev
			</button>
			<button className="slider-next" onClick={handleNext}>
				Next
			</button>
		</div>
	);
}

export default Slider;

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
