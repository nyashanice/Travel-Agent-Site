import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-bg p-4">
      <div className="text-center footer-txt">
        <div>Business Hours: M-F 8-5 PM EST</div>
        <div>Phone: 888-888-8888 | Email: support@voyagevistas.com </div>
        <img
          src="../Travel-Agent-Site/images/insta.png"
          alt="Instagram logo"
          className="footer-img"
        />
      </div>
    </footer>
  );
}
