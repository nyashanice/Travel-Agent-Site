import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import About from "./components/About";
import Offerings from "./components/Offerings";
import Carousel from "./components/Carousel";
import Testimonials from "./components/Testimonials";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <Banner />
          <Carousel />
          <About />
          <Offerings />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
