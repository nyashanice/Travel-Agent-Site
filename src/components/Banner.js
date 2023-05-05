import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/Banner.css";
// import Alert from "./Alert.js";

export default function Banner() {
  return (
    <div>
      <div className="card m-0 p-0">
        <img src="../images/globe.jpg" alt="" className="card-img-top" />
        <div className="text-center card-img-overlay">
          <h1 className="tagline">
            <span className="unleash1 d-inline-block">U</span>
            <span className="unleash2 d-inline-block">n</span>
            <span className="unleash3 d-inline-block">l</span>
            <span className="unleash4 d-inline-block">e</span>
            <span className="unleash5 d-inline-block">a</span>
            <span className="unleash6 d-inline-block">s</span>
            <span className="unleash7 d-inline-block">h</span>
            <span className="space1 d-inline-block"> </span>
            <span className="your1 d-inline-block">Y</span>
            <span className="your2 d-inline-block">o</span>
            <span className="your3 d-inline-block">u</span>
            <span className="your4 d-inline-block">r</span>
            <span className="space2 d-inline-block"> </span>
            <span className="wanderlust1 d-inline-block">W</span>
            <span className="wanderlust2 d-inline-block">a</span>
            <span className="wanderlust3 d-inline-block">n</span>
            <span className="wanderlust4 d-inline-block">d</span>
            <span className="wanderlust5 d-inline-block">e</span>
            <span className="wanderlust6 d-inline-block">r</span>
            <span className="wanderlust7 d-inline-block">l</span>
            <span className="wanderlust8 d-inline-block">u</span>
            <span className="wanderlust9 d-inline-block">s</span>
            <span className="wanderlust10 d-inline-block">t</span>
            <span className="comma d-inline-block">,</span>
            <span className="space3 d-inline-block"> </span>
            <span className="well1 d-inline-block">W</span>
            <span className="well2 d-inline-block">e</span>
            <span className="apos d-inline-block">'</span>
            <span className="well3 d-inline-block">l</span>
            <span className="well4 d-inline-block">l</span>
            <span className="space4 d-inline-block"> </span>
            <span className="handle1 d-inline-block">H</span>
            <span className="handle2 d-inline-block">a</span>
            <span className="handle3 d-inline-block">n</span>
            <span className="handle4 d-inline-block">d</span>
            <span className="handle5 d-inline-block">l</span>
            <span className="handle6 d-inline-block">e</span>
            <span className="space5 d-inline-block"> </span>
            <span className="the1 d-inline-block">t</span>
            <span className="the2 d-inline-block">h</span>
            <span className="the3 d-inline-block">e</span>
            <span className="space6 d-inline-block"> </span>
            <span className="rest1 d-inline-block">R</span>
            <span className="rest2 d-inline-block">e</span>
            <span className="rest3 d-inline-block">s</span>
            <span className="rest4 d-inline-block">t</span>
            <span className="period d-inline-block">.</span>
          </h1>
        </div>
        <div className="card-img-overlay d-flex align-items-end justify-content-center">
          <Button variant="secondary" size="lg">
            See What We Offer
          </Button>
        </div>
      </div>
    </div>
  );
}
