import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import AboutDecV3 from "../../assets/slides-01.png";
import "./AboutUs.css";
const AboutUS = () => {
  const [data, setData] = useState(false);

  return (
    <div id="about" className="about section reveal fade-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-left-image ">
                  <img src={AboutDecV3} alt="" />
                </div>
              </div>
              <div className="col-lg-6 align-self-center slide-in-right">
                <div className="about-right-content">
                  <div className="section-heading">
                    <h6>About Us</h6>
                    <h4>Journey so far</h4>
                    <div className="line-dec"></div>
                  </div>
                  {data === false ? (
                    <p>
                      The last 8 years has been a journey of successful
                      endeavours for our company. that we have seamlessly
                      implemented Enforcement application of
                      <span style={{ fontWeight: "bold" }}> TSbpass</span>.
                      <p className="pAbout">
                        Proud to be part of development of
                        <span style={{ fontWeight: "bold" }}>
                          <span> </span>
                          TSbpass( Telangana state building permission and self
                          certification system)<span> </span>
                        </span>
                        in partnership with
                        <span style={{ fontWeight: "bold" }}>
                          <span> </span>NIUM(National Institute of Urban
                          management)
                        </span>
                        <button
                          className="buttonClick"
                          onClick={() => {
                            setData(true);
                          }}
                        >
                          Read More
                        </button>
                      </p>
                    </p>
                  ) : (
                    <p>
                      The last 8 years has been a journey of successful
                      endeavours for our company. that we have seamlessly
                      implemented Enforcement application of
                      <span style={{ fontWeight: "bold" }}> TSbpass</span>.
                      <p className="pAbout">
                        Proud to be part of development of
                        <span style={{ fontWeight: "bold" }}>
                          <span> </span>
                          TSbpass( Telangana state building permission and self
                          certification system)<span> </span>
                        </span>
                        in partnership with
                        <span style={{ fontWeight: "bold" }}>
                          <span> </span>NIUM(National Institute of Urban
                          management).
                        </span>
                      </p>
                      <p className="pAbout">
                        Automated complete business process of
                        <span style={{ fontWeight: "bold" }}>
                          {" "}
                          BPP-HMDA(Buddapurnima project - Hyderabad Metropolitan
                          Development Authority).
                        </span>
                      </p>
                      <p className="pAbout">
                        Implemented park entry ticketing system at all the
                        <span style={{ fontWeight: "bold" }}>
                          <span> </span> BPP-HMDA{" "}
                        </span>
                        parks.
                      </p>
                      <p className="pAbout">
                        Associated with Sports Authority of Telangana in their
                        <span style={{ fontWeight: "bold" }}>
                          {" "}
                          EODB process{" "}
                        </span>
                        .
                      </p>
                      <p className="pAbout">
                        Our online portfolio now includes{" "}
                        <a href="https://surveyjan.com/"> surveyjan.com </a>
                        surveyjan.com for market research and Emsoft for
                        election management.
                      </p>
                      <p className="pAbout">
                        product portfolio includes Legal Tracker, to monitor and
                        manage Legal cases and SLA. Obtained ISO certificates as
                        part of Quality.
                        <button
                          className="buttonClick"
                          onClick={() => {
                            setData(false);
                          }}
                        >
                          <FontAwesomeIcon icon={faArrowTurnUp} />
                        </button>
                      </p>
                    </p>
                  )}

                  {/* <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      <div className="skill-item first-skill-item reveal">
                        <div className="progress" data-percentage="90">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              90%
                              <br />
                              <span>Asp.Net</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="skill-item second-skill-item reveal">
                        <div className="progress" data-percentage="80">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              80%
                              <br />
                              <span>SQL</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <div className="skill-item third-skill-item  reveal">
                        <div className="progress" data-percentage="80">
                          <span className="progress-left">
                            <span className="progress-bar"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar"></span>
                          </span>
                          <div className="progress-value">
                            <div>
                              80%
                              <br />
                              <span>React Js</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
