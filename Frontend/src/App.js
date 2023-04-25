import React from 'react';
import LoginAndSignup from './components/loginAndSignup/LoginAndSignup/LoginAndSignup';
// import Slider from './components/Carousels/Carousel_1/Carousel_1';
// import Carousel from './components/Carousels/Carousel_1/Carousel_1';
// import ProductSlider from './components/Carousels/Carousel_1/Carousel_1';
import Slider1 from './components/Carousels/Carousel_1/Carousel_1';
import Slider2 from './components/Carousels/Carousel_2/Carousel_2';
const App = () => {
	return (
		<div className="App">
			{/* <LoginAndSignup /> */}
			{/* <Slider /> */}
			{/* <Carousel /> */}
			{/* <ProductSlider /> */}
			<Slider1 />
			<Slider2 />
		</div>
	);
};

export default App;
