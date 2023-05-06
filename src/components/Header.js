import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="page-header header-bg">
      <Navbar collapseOnSelect expand="lg">
        <Container className="m-0 p-0">
          <Navbar.Brand href="#home">
            <img src="../images/vv_logo.png" alt="" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about" className="link-txt">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="link-txt">
                Services
              </Nav.Link>
              <Nav.Link href="#testimonials" className="link-txt">
                Testimonials
              </Nav.Link>
              <Nav.Link href="#inquiry-form" className="link-txt">
                Inquiry Form
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
