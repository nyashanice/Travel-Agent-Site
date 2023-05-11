import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/Buffer.css";

export default function Buffer() {
  return (
    <div className="d-flex flex-row">
      <div>
        <img
          src="../Travel-Agent-Site/images/desk.png"
          alt=""
          className="buffer-img m-5"
        />
      </div>
      <div className="p-5">
        <ul className="buffer-txt">
          <li className="p-3">Wanting to explore but not sure what to do?</li>
          <li className="p-3">Need a getaway?</li>
          <li className="p-3">Just not sure where to start?</li>
        </ul>
        <h4 className="p-2 buffer-txt">
          Voyage Vistas has you covered! Our experienced travel agents are ready
          to take on any questions you may have and ensure that your vacation
          planning is seamless.
        </h4>
        <div className="ml-0 mt-5">
          <Button
            variant="secondary"
            size="lg"
            className="cta-btn"
            href="#services"
          >
            See What We Offer
          </Button>
        </div>
      </div>
    </div>
  );
}
