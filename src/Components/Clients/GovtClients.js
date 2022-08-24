import React from "react";
import nizambad from "../../assets/nizambad.jpeg";
import hmda from "../../assets/hmda-1.png";
import osmania from "../../assets/ou-1.png";
import icssr from "../../assets/icssr-src-1.png";
import ncrm from "../../assets/nrcm-1.png";
import satahavana from "../../assets/satavahana-1.jpg";
import musi from "../../assets/musi-1.png";
import GHMC from "../../assets/ghmc2.png";
import Marquee from "react-fast-marquee";
const GovtClients = () => {
  return (
    <Marquee pauseOnHover={true}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <div className="item">
                <a
                  href="https://nizamabadcorporation.telangana.gov.in"
                  target="blank"
                >
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={nizambad} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="http://hmda.gov.in/" target="blank">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={hmda} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="http://www.osmania.ac.in/" target="blank">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={osmania} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="http://icssr-src.org/" target="blank">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={icssr} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="http://demo1.srshta.com/" target="blank">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={ncrm} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="http://www.satavahana.ac.in/" target="blank">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={satahavana} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="https://musi.telangana.gov.in/" target="blank">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={musi} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="https://www.ghmc.gov.in/" target="blank">
                  <div className="clients-item">
                    <div className="thumb">
                      <img src={GHMC} alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default GovtClients;
