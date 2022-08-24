import React from "react";
import "./RecentBlog.css";
import slider7 from "../../assets/slider-7.jpg";
import blog3 from "../../assets/blog3.jpeg";
import blog4 from "../../assets/blog4.png";
const RecentBlog = () => {
  return (
    <div id="events" className="blog reveal fade-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 ">
            <div className="section-heading">
              <h6>Recent News</h6>
              <h4>
                Check Our Recent <em>Events</em>
              </h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-6 show-up ">
            <div className="blog-post fade-bottom reveal">
              <div className="thumb">
                <a href="#">
                  <img src={slider7} alt="" />
                </a>
              </div>
              <div className="down-content">
                <a href="#">
                  <h4>Launching of RMS at HMDA - BPP</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="blog-posts ">
              <div className="row">
                <div className="col-lg-12">
                  <div className="post-item fade-bottom reveal">
                    <div className="thumb">
                      <a href="#">
                        <img src={blog4} alt="" />
                      </a>
                    </div>
                    <div className="right-content">
                      <a href="#">
                        <h4>
                          Training to GHMC town planning on Enforcement
                          Application
                        </h4>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="post-item fade-bottom reveal">
                    <div className="thumb">
                      <a href="#">
                        <img src={blog3} alt="" />
                      </a>
                    </div>
                    <div className="right-content">
                      {/* <span className="category">SEO Analysis</span>
                      <span className="date">24 September 2021</span> */}
                      <a href="#">
                        <h4>Launching of Legal Tracker at HMDA</h4>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="post-item last-post-item fade-bottom reveal">
                    <div className="thumb">
                      <a href="#">
                        <img src={blog4} alt="" />
                      </a>
                    </div>
                    <div className="right-content">
                      {/* <span className="category">SEO Analysis</span> */}
                      {/* <span className="date">24 September 2021</span> */}
                      <a href="#">
                        <h4>Launching of Digital Tracker at HMDA</h4>
                      </a>
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
};

export default RecentBlog;
