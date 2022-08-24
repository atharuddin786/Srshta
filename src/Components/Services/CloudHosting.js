import React from "react";
import cloudHosting from "../../assets/cloud-hosting.jpg";
import "./servicess2.css";
const CloudHosting = () => {
  return (
    <div className="col-lg-12 ">
      <ul className="nacc ">
        <li className="active ">
          <div className="thumb">
            <div className="row scale-up-center">
              <div className="col-lg-6 align-self-center">
                <div className="left-text slide-in-left">
                  <h4>Cloud Hosting</h4>
                  <p>
                    Hosting services includes dedicated server and cloud hosting
                    at CtrlS data center and Server basket. We manage your
                    application hosting, data backup and disaster recovery.
                    Cloud computing is the on-demand availability of computer
                    system resources, especially data storage and computing
                    power, without direct active management by the user.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="right-image slide-in-right">
                  <img src={cloudHosting} alt="" />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CloudHosting;
