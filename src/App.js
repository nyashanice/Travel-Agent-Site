import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import About from "./components/About";
import Offerings from "./components/Offerings";
import Carousel from "./components/Carousel";
import Buffer from "./components/Buffer";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/Travel-Agent-Site">
      <div>
        <Header />
        <div>
          <Banner />
          <Buffer />
          <Carousel />
          <About />
          <Offerings />
          <Testimonials />
          <InquiryForm />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
