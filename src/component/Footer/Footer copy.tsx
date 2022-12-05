import React from "react";
import MobileFooter from "./mobilefooter/MobileFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
  faPinterest,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <MobileFooter/>
      <footer>
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <div className="widget">
                <h5 className="widgetheading">Our Contact</h5>
                <div className="widgetdetails">
                  {" "}
                  <ul className="link-list">
                    {[
                      "Expert Works",
                      "1464 E Whitestone Blvd",
                      " Suite 1803-E, Cedar Park, TX 78613.",
                     ` +1 (646) 727 9169`,
                     "",
                      'sales@expert-works.com'

                    ].map((item: any) => (
                      <li>
                        <Link to="/" style={{ marginLeft: "15%" }}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget">
                <h5 className="widgetheading">Quick Links</h5>
                <div className="widgetdetails">
                  {" "}
                  <ul className="link-list">
                    {[
                      "Latest Events",
                      "Terms & conditions",
                      "Privacy policy",
                      // "Career",
                      // "Contact us",
                    ].map((item: any) => (
                      <li>
                        <Link to="/" style={{ marginLeft: "15%" }}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="widget">
                <h5 className="widgetheading" style={{marginLeft:'-5px'}}>Learning</h5>
                <div className="widgetdetails">
                  {" "}
                  <ul className="link-list">
                    {[{name:'Courses',url:'/courses'}].map((item: any) => (
                      <li>
                        <Link to={item.url} style={{ marginLeft: "17%" }}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="widget">
                <h5 className="widgetheading" style={{marginLeft:'-8px'}}>More</h5>
                <div className="widgetdetails">
                  {" "}
                  <ul className="link-list">
                    {[{name:"About Us",url:'/about-us'},{name: "Pricing",url:'/pricing'}, {name:"Login",url:'/login'}].map(
                      (item: any) => (
                        <li>
                          <Link to={item.url} style={{ marginLeft: "20%" }}>
                            {item.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright">
                  <p>
                    <span>Expert Works 2020 All right reserved. </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="social-network">
                  <li>
                    <a href="https://www.facebook.com/Expertworks2021" target="_blank"  data-placement="top" title="Facebook">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ color: "white" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/expertworks2020/" target="_blank" data-placement="top" title="Instagram">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "white" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/75511667/" target="_blank" data-placement="top" title="Linkedin">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ color: "white" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCWtuFD33Wt1tCNSsue9t51A" target="_blank" data-placement="top" title="Youtube">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        style={{ color: "white" }}
                      />
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" data-placement="top" title="Google plus">
                      <FontAwesomeIcon
                        icon={faGooglePlus}
                        style={{ color: "white" }}
                      />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a onClick={() => window.scroll(0, 0)} className="scrollup">
        <FontAwesomeIcon icon={faAngleUp} style={{ color: "white" }} />
      </a>
    </div>
  );
}
