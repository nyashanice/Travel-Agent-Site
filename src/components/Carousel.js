import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Offerings() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/airplane.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Flight + Hotel Bundle</h3>
            <button className="btn btn-dark btn-lg">Learn more</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/cruise.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Cruise Planning</h3>
            <button className="btn btn-dark btn-lg">Learn more</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/wedding.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Destination Wedding Travel</h3>
            <button className="btn btn-dark btn-lg">Learn more</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/jet-ski.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Itinerary Creation</h3>
            <button className="btn btn-dark btn-lg">Learn more</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
