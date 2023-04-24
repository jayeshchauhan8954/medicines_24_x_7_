import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import banner1 from "../../../assets/Banners/banner1.jpg";
import banner2 from "../../../assets/Banners/banner2.jpg";
import banner3 from "../../../assets/Banners/banner3.jpg";
import banner4 from "../../../assets/Banners/banner4.jpg";
import banner5 from "../../../assets/Banners/banner5.jpg";
import banner6 from "../../../assets/Banners/banner6.jpg";
import banner7 from "../../../assets/Banners/banner7.jpg";

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
				<Carousel.Item interval={3000}>
					<img className="d-block w-100 h-80" src={banner5} alt="Third slide" />
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img className="d-block w-100 h-80" src={banner6} alt="Third slide" />
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img className="d-block w-100 h-80" src={banner7} alt="Third slide" />
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Banner;
