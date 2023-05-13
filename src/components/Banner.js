import React from "react";
import "../styles/Banner.css";
// import Alert from "./Alert.js";

export default function Banner() {
  return (
    <div>
      <div className="card m-0 p-0">
        <img
          src="../Travel-Agent-Site/images/beach.jpg"
          alt=""
          className="card-img-top"
          style={{ height: "500px", opacity: "0.3" }}
        />
        <div className="text-center card-img-overlay">
          <h1 className="tagline">
            <div className="regular-tagline">
              Unleash Your Wanderlust, We'll Handle the Rest.
            </div>
            <span className="unleash1">U</span>
            <span className="unleash2">n</span>
            <span className="unleash3">l</span>
            <span className="unleash4">e</span>
            <span className="unleash5">a</span>
            <span className="unleash6">s</span>
            <span className="unleash7">h</span>
            <span className="space1"> </span>
            <span className="your1">Y</span>
            <span className="your2">o</span>
            <span className="your3">u</span>
            <span className="your4">r</span>
            <span className="space2"> </span>
            <span className="wanderlust1">W</span>
            <span className="wanderlust2">a</span>
            <span className="wanderlust3">n</span>
            <span className="wanderlust4">d</span>
            <span className="wanderlust5">e</span>
            <span className="wanderlust6">r</span>
            <span className="wanderlust7">l</span>
            <span className="wanderlust8">u</span>
            <span className="wanderlust9">s</span>
            <span className="wanderlust10">t</span>
            <span className="comma">,</span>
            <span className="space3"> </span>
            <span className="well1">W</span>
            <span className="well2">e</span>
            <span className="apos">'</span>
            <span className="well3">l</span>
            <span className="well4">l</span>
            <span className="space4"> </span>
            <span className="handle1">H</span>
            <span className="handle2">a</span>
            <span className="handle3">n</span>
            <span className="handle4">d</span>
            <span className="handle5">l</span>
            <span className="handle6">e</span>
            <span className="space5"> </span>
            <span className="the1">t</span>
            <span className="the2">h</span>
            <span className="the3">e</span>
            <span className="space6"> </span>
            <span className="rest1">R</span>
            <span className="rest2">e</span>
            <span className="rest3">s</span>
            <span className="rest4">t</span>
            <span className="period">.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
