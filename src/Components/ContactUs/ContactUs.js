import React from "react";
import "./ContactUs.css";
import phoneimage from "../../assets/phone-icon.png";
import emailicon from "../../assets/email-icon.png";
import locationicon from "../../assets/location-icon.png";
import contactDecV3 from "../../assets/contact-dec-v3.png";
const ContactUs = () => {
  return (
    <div id="contact" className="contact-us section fade-bottom reveal">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading fade-bottom reveal">
              <h6>Contact Us</h6>
              <h4>
                Get In Touch With Us <em>Now</em>
              </h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-12 ">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-dec">
                    <img src={contactDecV3} alt="" />
                  </div>
                </div>
                {/* <div className="col-lg-5">
                  <div id="map">
                    {/* <iframe
                      src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="636px"
                      frameborder="0"
                      style={{ border: "0" }}
                      allowfullscreen
                    /> */}
                {/* </div>
                </div>  */}
                <div className="col-lg-7">
                  <div className="fill-form">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src={phoneimage} alt="" />
                            <a href="callto:+91 9848055562">+91 9848055562</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src={emailicon} alt="" />
                            <a href="#">amar@srshta.com</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src={locationicon} alt="" />
                            <a href="#">
                              Srshta Tech Solutions Pvt Ltd, Nacharam,
                              Hyderabad-17
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Name"
                            autoComplete="on"
                            required
                          />
                        </fieldset>
                        <fieldset>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="Your Email"
                            required=""
                          />
                        </fieldset>
                        <fieldset>
                          <input
                            type="subject"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            autoComplete="on"
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <textarea
                            name="message"
                            type="text"
                            className="form-control"
                            id="message"
                            placeholder="Message"
                            required=""
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button "
                          >
                            Send Message Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
