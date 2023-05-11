import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "../styles/Carousel.css";

export default function Offerings() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="../Travel-Agent-Site/images/airplane.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="img-title">Flight + Hotel Bundle</h3>
            <Button variant="dark" size="lg" href="#flight-hotel-bundle">
              Learn more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="../Travel-Agent-Site/images/cruise.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="img-title">Cruise Planning</h3>
            <Button variant="dark" size="lg" href="#cruise-planning">
              Learn more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="../Travel-Agent-Site/images/wedding.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="img-title">Destination Wedding Travel</h3>
            <Button variant="dark" size="lg" href="#destination-wedding">
              Learn more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="../Travel-Agent-Site/images/jet-ski.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="img-title">Itinerary Creation</h3>
            <Button variant="dark" size="lg" href="#itinerary-creation">
              Learn more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
