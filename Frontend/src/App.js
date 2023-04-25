import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./components/Header/Header.css";
import "./components/Footer/Footer.css";
import Slider1 from "./components/Carousel/Carousel_7/Carousel_7";
import Slider2 from "./components/Carousel/Carousel_8/Carousel_8";
import Slider3 from "./components/Carousel/Carousel_9/Carousel_9";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes></Routes>
        <Slider1 />
        <Slider2 />
        <Slider3 />

        <Footer />
      </Router>
    </div>
  );
};

export default App;
