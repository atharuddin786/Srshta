import React from "react";

import Slide3 from "../../assets/slide-3.png";

import "./Home.css";

function Home() {
  return (
    <div className="main-banner" id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="left-content show-up header-text ">
                  <div className="row ">
                    <div className="col-lg-12 tracking-in-expand">
                      <h6>Srshta</h6>
                      <h2>Sanskrit Means</h2>
                      <h1>"Creative"</h1>
                      <p>
                        We provide solutions with creative inputs to help our
                        clients soar new heights in competitive world.
                      </p>
                    </div>

                    <div className="col-lg-12">
                      <div className="border-first-button wobble-ver-left">
                        <a href="#contact">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-image slide-in-bck-right">
                  <img src={Slide3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
