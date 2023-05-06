import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../styles/Carousel.css';

export default function Offerings() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="../images/airplane.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="img-title">Flight + Hotel Bundle</h3>
            <button className="btn btn-dark btn-lg">Learn more</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="../images/cruise.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="img-title">Cruise Planning</h3>
            <button className="btn btn-dark btn-lg">Learn more</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="../images/wedding.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="img-title">Destination Wedding Travel</h3>
            <button className="btn btn-dark btn-lg">Learn more</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="../images/jet-ski.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="img-title">Itinerary Creation</h3>
            <button className="btn btn-dark btn-lg">Learn more</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
