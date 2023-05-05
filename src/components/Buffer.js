import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/Buffer.css";

export default function Buffer() {
  return (
    <div className="d-flex flex-row">
      <div>
        <img src="../images/woman.jpg" alt="" className="buffer-img m-5" />
      </div>
      <div className="p-5">
        <ul>
          <li className="p-3">Wanting to explore but not sure what to do?</li>
          <li className="p-3">Need a getaway?</li>
          <li className="p-3">Just not sure where to start?</li>
        </ul>
        <div className="p-2">
          Voyage Vistas has you covered! Our experienced travel agents are ready
          to take on any questions you may have and ensure that your vacation
          planning is seamless.
        </div>
        <div className="ml-0 mt-5">
          <Button variant="secondary" size="lg">
            See What We Offer
          </Button>
        </div>
      </div>
    </div>
  );
}
