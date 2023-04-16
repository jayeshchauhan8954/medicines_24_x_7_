import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import banner1 from "../../assets/christina-victoria-craft-ZHys6xN7sUE-unsplash.jpg";
import banner2 from "../../assets/madison-agardi-QNrjcp90tVc-unsplash.jpg";
import banner3 from "../../assets/premium_photo.avif";
import banner4 from "../../assets/volodymyr-hryshchenko-e8YFkjN2CzY-unsplash.jpg";

const Banner = () => {
	return (
		<>
			<Carousel indicators={false} className="main_carousel">
				<Carousel.Item interval={3000}>
					<img className="d-block w-100 h-80" src={banner1} alt="banner1" />
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img
						className="d-block w-100 h-80"
						src={banner2}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img className="d-block w-100 h-80" src={banner3} alt="Third slide" />
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img className="d-block w-100 h-80" src={banner4} alt="Third slide" />
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Banner;
