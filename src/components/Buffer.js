import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/Buffer.css";

export default function Buffer() {
  return (
    <div>
      <div className="d-flex flex-row flex-wrap align-items-center">
        <div>
          <img
            src="../Travel-Agent-Site/images/desk.png"
            alt=""
            className="buffer-img p-3"
          />
        </div>
        <div className="p-2">
          <ul className="buffer-txt">
            <li className="p-1">Wanting to explore but not sure what to do?</li>
            <li className="p-1">Need a getaway?</li>
            <li className="p-1">Just not sure where to start?</li>
          </ul>
        </div>
      </div>
      <h4 className="p-3 pt-0 buffer-txt">
        Voyage Vistas has you covered! Our experienced travel agents are ready
        to take on any questions you may have and ensure that your vacation
        planning is seamless.
      </h4>
      <div className="p-3">
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
  );
}
