import React from "react";
import mobileApp from "../../assets/Mobile-App.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import "./servicess2.css";
const MobileApp = () => {
  return (
    <div className="col-lg-12 ">
      <ul className="nacc">
        <li className="active">
          <div className="thumb">
            <div className="row scale-up-center">
              <div className="col-lg-6 align-self-center">
                <div className="left-text slide-in-left">
                  <h4 id="">Mobile Apps</h4>
                  <p>
                    A mobile application (also called a mobile app) is a type of
                    application designed to run on a mobile device, which can be
                    a smart phone or tablet computer. Even if apps are usually
                    small software units with limited function, they still
                    manage to provide users with quality services and
                    experiences. Mobile application’s as extensions for client’s
                    software and for specific purposes.
                  </p>
                  <p style={{ color: "#4da6e7" }}>Recent apps developed.</p>

                  <p>
                    Order processing for Ayush department, to receive orders and
                    update issues on daily basis from its 700 clinics in
                    Telangana.
                  </p>

                  <p>QR code process to allow entry at parks.....</p>
                  <div className="ticks-list">
                    <span>
                      <FontAwesomeIcon icon={faAndroid} /> Android Apps
                    </span>{" "}
                    <span>
                      <FontAwesomeIcon icon={faApple} /> IOS Apps
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="right-image slide-in-right">
                  <img src={mobileApp} alt="" />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileApp;
