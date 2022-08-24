import React from "react";

import ntv from "../../assets/ntv-1.png";
import ssi from "../../assets/ssi-1.png";
import stt from "../../assets/stt.png";
import adarsha from "../../assets/adarsha-1.png";
const CorpoClients = () => {
  return (
    <div className="corpoClients">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <div className="item">
                <a href="https://ntvtelugu.com/" target="blank">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={ntv} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={adarsha} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="http://satyasaiinfra.in/" target="blank">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={ssi} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="https://www.sttelemediagdc.com/in-en/" target="blank">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={stt} alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorpoClients;
