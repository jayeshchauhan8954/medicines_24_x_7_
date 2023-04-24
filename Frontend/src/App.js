import React from 'react';
import LoginAndSignup from './components/loginAndSignup/LoginAndSignup/LoginAndSignup';
// import Slider from './components/Carousels/Carousel_1/Carousel_1';
import Carousel from './components/Carousels/Carousel_1/Carousel_1';
// import ProductSlider from './components/Carousels/Carousel_1/Carousel_1';

const App = () => {
	return (
		<div className="App">
			{/* <LoginAndSignup /> */}
			{/* <Slider /> */}
			<Carousel />
			{/* <ProductSlider /> */}
		</div>
	);
};

export default App;
