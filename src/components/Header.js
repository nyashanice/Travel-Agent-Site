import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="page-header purple lighten-3">
      <nav className="purple lighten-3">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <img src="../images/plane.png" alt=""></img>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <a href="#">Offerings</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
