import React from "react";
import serviceIcon01 from "../../assets/ux.png";
import serviceIcon02 from "../../assets/application.png";
import serviceIcon03 from "../../assets/hosting-services.png";
import serviceIcon04 from "../../assets/seo.png";
import "./Services.css";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
  return (
    <div id="services" className="services section fade-bottom reveal ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6>Our Services</h6>
              <h4>
                What Our Company <em>Provides</em>
              </h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-12 ">
            <div className="naccs">
              <div className="grid">
                <div className="row puff-in-bl">
                  <div className="col-lg-12">
                    <div className="menu">
                      <div className="first-thumb active">
                        <div className="thumb">
                          <Link to="/webdesign">
                            <span className="icon">
                              <img src={serviceIcon01} alt="" />
                            </span>
                            Web Design
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="thumb">
                          <Link to="mobileapp">
                            <span className="icon">
                              <img src={serviceIcon02} alt="" />
                            </span>
                            Mobile App
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="thumb">
                          <Link to="cloudhosting">
                            <span className="icon">
                              <img src={serviceIcon03} alt="" />
                            </span>
                            Cloud Hosting
                          </Link>
                        </div>
                      </div>
                      <div className="last-thumb">
                        <div className="thumb">
                          <Link to="seo">
                            <span className="icon">
                              <img src={serviceIcon04} alt="" />
                            </span>
                            SEO
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
