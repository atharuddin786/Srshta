import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar1 = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <a href="#top" className="logo">
          <img src={Logo} alt="" />
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <ul className="nav ">
              <li>
                <a href="#top" className="active slide-in-right">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="slide-in-left">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="slide-in-right">
                  Services
                </a>
              </li>
              <li>
                <a href="#clients" className="slide-in-left">
                  Projects
                </a>
              </li>
              <li>
                <a href="#events" className="slide-in-right">
                  Events
                </a>
              </li>

              <li>
                <div className="border-first-button">
                  <a href="#contact">Contact Us</a>
                </div>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
