import React from "react";
import "../../assets/gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLink } from "@fortawesome/free-solid-svg-icons";
import i1 from "../../img/works/1.jpg";
import "./HRanalytics.css";
export default function HRImages() {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const link = <FontAwesomeIcon icon={faLink} />;
  return (
    <div>
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="textleft">
                <h2>HR Analytics at Glance</h2>
                Welcome to Expert-works, a leading cloud-based, e-learning
                platform! HR analytics is the process of collecting and
                analyzing Human Resource (HR) data to improve an organization’s
                workforce performance. This is also referred to as talent
                analytics, workforce analytics, or people analytics.
                Expert-Works has come up with an expert tool to manage internal
                Human Resource data.
              </div>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <section
                id="gallery-1"
                className="content-block section-wrapper gallery-1"
              >
                <div className="container">
                  <div className="editContent">
                    <ul className="filter">
                      <li className="active">
                        <a href="#" data-filter="*">
                          All
                        </a>
                      </li>
                      <li>
                        <a href="#" data-filter=".artwork">
                          Projected revenues
                        </a>
                      </li>

                      <li>
                        <a href="#" data-filter=".creative">
                          Bench Ratio
                        </a>
                      </li>

                      <li>
                        <a href="#" data-filter=".nature">
                          % of Emp. by Technology
                        </a>
                      </li>

                      <li>
                        <a href="#" data-filter=".outside">
                          %Technology by number
                        </a>
                      </li>

                      <li>
                        <a href="#" data-filter=".photography">
                          Immigration Status
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <div id="isotope-gallery-container">
                      <div className="col-md-4 col-sm-6 col-xs-12 gallery-item-wrapper artwork creative">
                        <div className="gallery-item">
                          <div className="gallery-thumb">
                            <img
                              src={i1}
                              className="img-responsive"
                              alt="1st gallery Thumb"
                            />
                            <div className="image-overlay"></div>
                            <a href="img/works/1.jpg" className="gallery-zoom">
                              {eye}
                            </a>
                            <a href="#" className="gallery-link">
                              {link}
                            </a>
                          </div>
                          <div className="gallery-details">
                            <div className="editContent">
                              <h5>Projected Revenues for Current Year</h5>
                            </div>
                            <div className="editContent">
                              <p>Nullam id dolor id nibh ultricies vehicula.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12 gallery-item-wrapper nature outside">
                        <div className="gallery-item">
                          <div className="gallery-thumb">
                            <img
                              src={require("../../img/works/2.jpg")}
                              className="img-responsive"
                              alt="2nd gallery Thumb"
                            />
                            <div className="image-overlay"></div>
                            <a href="img/works/2.jpg" className="gallery-zoom">
                              {eye}
                            </a>
                            <a href="/" className="gallery-link">
                              {link}
                            </a>
                          </div>
                          <div className="gallery-details">
                            <div className="editContent">
                              <h5>Project to Bench Ratio</h5>
                            </div>
                            <div className="editContent">
                              <p>Nullam id dolor id nibh ultricies vehicula.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12 gallery-item-wrapper photography artwork">
                        <div className="gallery-item">
                          <div className="gallery-thumb">
                            <img
                              src={require("../../img/works/3.jpg")}
                              className="img-responsive"
                              alt="3rd gallery Thumb"
                            />
                            <div className="image-overlay"></div>
                            <a href="img/works/3.jpg" className="gallery-zoom">
                              {eye}
                            </a>
                            <a href="#" className="gallery-link">
                              {link}
                            </a>
                          </div>
                          <div className="gallery-details">
                            <div className="editContent">
                              <h5>% of Employees by Technology</h5>
                            </div>
                            <div className="editContent">
                              <p>Nullam id dolor id nibh ultricies vehicula.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12 gallery-item-wrapper creative nature">
                        <div className="gallery-item">
                          <div className="gallery-thumb">
                            <img
                              src={require("../../img/works/4.jpg")}
                              className="img-responsive"
                              alt="4th gallery Thumb"
                            />
                            <div className="image-overlay"></div>
                            <a href="img/works/4.jpg" className="gallery-zoom">
                              {eye}
                            </a>
                            <a href="#" className="gallery-link">
                              {link}
                            </a>
                          </div>
                          <div className="gallery-details">
                            <div className="editContent">
                              <h5>%Technology by number resource</h5>
                            </div>
                            <div className="editContent">
                              <p>Nullam id dolor id nibh ultricies vehicula.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12 gallery-item-wrapper nature">
                        <div className="gallery-item">
                          <div className="gallery-thumb">
                            <img
                              src={require("../../img/works/5.jpg")}
                              className="img-responsive"
                              alt="5th gallery Thumb"
                            />
                            <div className="image-overlay"></div>
                            <a href="img/works/5.jpg" className="gallery-zoom">
                              {eye}
                            </a>
                            <a href="#" className="gallery-link">
                              {link}
                            </a>
                          </div>
                          <div className="gallery-details">
                            <div className="editContent">
                              <h5>
                                Immigration Status - H1B/OPT/CPT Expired in next
                                6 months
                              </h5>
                            </div>
                            <div className="editContent">
                              <p>Nullam id dolor id nibh ultricies vehicula.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
