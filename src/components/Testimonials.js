import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../styles/Testimonials.css";

export default function Testimonials() {
  return (
    <div className="m-5" id="testimonials">
      <h1 className="testimonials-header text-center p-2">Testimonials</h1>
      <CardGroup>
        <Card className="border-0">
          <Card.Img
            variant="top"
            src="../images/johnson-fam.png"
            className="testimonial-name mx-auto"
          />
          <Card.Body>
            <Card.Text className="testimony-text">
              "Our family had an incredible vacation thanks to the exceptional
              service provided by Voyage Vistas. They tailored our itinerary to
              perfection, ensuring we experienced the best of every destination.
              We highly recommend them for their attention to detail and
              dedication to creating unforgettable memories!"
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            variant="top"
            src="../images/sarah-mark.png"
            className="testimonial-name mx-auto"
          />
          <Card.Body>
            <Card.Text className="testimony-text">
              "Voyage Vistas made our dream honeymoon a reality. From the moment
              we contacted them, their team demonstrated a deep understanding of
              our preferences and crafted a romantic getaway that exceeded our
              expectations. We couldn't have asked for a more seamless and
              magical experience!"
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            variant="top"
            src="../images/emily-david.png"
            className="testimonial-name mx-auto"
          />
          <Card.Body>
            <Card.Text className="testimony-text">
              "Working with Voyage Vistas was an absolute pleasure. Their
              professionalism and commitment to customer satisfaction were
              evident from the beginning. They tailored our trip to suit our
              interests and budget, and the result was an amazing vacation
              filled with incredible experiences. Thank you, Voyage Vistas!"
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="border-0 ">
          <Card.Img
            variant="top"
            src="../images/jason.png"
            className="testimonial-name mx-auto"
          />
          <Card.Body>
            <Card.Text className="testimony-text">
              "As a frequent traveler, I can confidently say that Voyage Vistas
              stands out among travel agencies. Their expertise and knowledge of
              unique destinations provided me with unforgettable adventures.
              Their attention to detail and personalized service ensured that
              every trip was flawless. I highly recommend Voyage Vistas to all
              fellow wanderers!"
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            variant="top"
            src="../images/lisa-michael.png"
            className="testimonial-name mx-auto"
          />
          <Card.Body>
            <Card.Text className="testimony-text">
              "Voyage Vistas turned our anniversary getaway into a truly magical
              experience. Their thoughtful recommendations and seamless
              coordination made our trip stress-free and unforgettable. We are
              forever grateful for their exceptional service and would trust
              them with all our future travel plans!"
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            variant="top"
            src="../images/alex.png"
            className="testimonial-name mx-auto"
          />
          <Card.Body>
            <Card.Text className="testimony-text">
              "I can't thank Voyage Vistas enough for creating the most
              incredible adventure of my life. Their knowledge and passion for
              travel shone through in every aspect of my trip. They went above
              and beyond to ensure that I had a once-in-a-lifetime experience. I
              highly recommend their services to anyone seeking unforgettable
              journeys!"
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
