import React from "react";

import "./Clients.css";

import { Link } from "react-router-dom";
const Clients = () => {
  return (
    <div id="clients" className="our-clients section reveal fade-left">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div
              className="section-heading "
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <h6>Our Portofolio</h6>
              <h4>
                See Our Recent <em>Projects</em>
              </h4>
              <div className="line-dec"></div>
              <span className="scroll-Links">
                <Link to="/">Government Clients</Link>
              </span>
              <span className="scroll-Links">
                <Link to="corpoClients">Corporate Clients</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
