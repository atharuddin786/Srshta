import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import webDesign from "../../assets/web-design.jpg";
import "./servicess2.css";
const WebDesign = () => {
  return (
    <div className="col-lg-12 ">
      <ul className="nacc">
        <li className="active">
          <div className="thumb">
            <div className="row scale-up-center">
              <div className="col-lg-6 align-self-center">
                <div className="left-text slide-in-left">
                  <h4>Web Design</h4>
                  <p>
                    Srshta believes in our customer’s presence online as its
                    first step towards business growth in ever growing digital
                    world. Our expert teams understand your business, Clients
                    and growth plans to build informative and colorful website.
                    Content writer can support with quality and appealing
                    writeup’s. Responsive ensures ease of browsing in any
                    instruments of size. We support in managing website on
                    continuously with regular design changes to enhance.
                  </p>
                  <div className="ticks-list">
                    <span>
                      <FontAwesomeIcon icon={faCheck} /> Requirements and Scope
                      analysis
                    </span>{" "}
                    <span>
                      <FontAwesomeIcon icon={faCheck} /> Prototype Designs &
                      finalize layout.
                    </span>{" "}
                    <span>
                      <FontAwesomeIcon icon={faCheck} /> Develop & Review of the
                      Project
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCheck} /> Deploy & Search Engine
                      Optimization
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCheck} /> Manage the Project
                    </span>{" "}
                  </div>
                  <p>
                    SEO helps to be noticed in search engines like Google. Bot’s
                    to help online support instantly to visitors to website.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 align-self-center ">
                <div className="right-image slide-in-right">
                  <img src={webDesign} alt="" />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WebDesign;
