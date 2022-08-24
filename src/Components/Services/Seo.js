import React from "react";
import seo from "../../assets/seo.jpg";
import "./servicess2.css";
const Seo = () => {
  return (
    <div className="col-lg-12 ">
      <ul className="nacc">
        <li className="active">
          <div className="thumb">
            <div className="row scale-up-center">
              <div className="col-lg-6 ">
                <div className="left-text slide-in-left">
                  <h4>Search Engine Optamization</h4>
                  <p>
                    We design professional looking yet simple websites. Our
                    designs are search engine and user friendly.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="right-image slide-in-right">
                  <img src={seo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Seo;
