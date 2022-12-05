import React ,{useEffect} from "react";
import "./MobileFooter.css"
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
import {Link} from 'react-router-dom'
const Footer = () => {

 return (
     <footer>
         <div className="footer-flex">
         <div className="footer-block">
             <h4>Our Contact</h4>

                    {[
                      "Expert Technologies LLC",
                      "1205 BMC Drive",
                      " Suite 1803-E, Cedar Park, TX 78613.",
                     ` +1 (646) 727 9169`,
                     "",
                      'sales@expert-works.com'

                    ].map((item: any) => (
                      <li>
                        <Link to="/" className="element-color">
                          {item}
                        </Link>
                      </li>
                    ))}

         </div>
         <div className="footer-block">
             <h4>Quick Links</h4>

                    {[
                      // {name:"Latest Events",url:'/'},
                      {name:"Frequently Asked Questions",url:'/faq'},
                      {name:"Terms & conditions",url:'/terms'},
                      {name:"Privacy policy",url:'/policy'},
                      // {name:"Career",url:'/'},
                      {name:"Contact us",url:'/Contact'},
                    ].map((item: any) => (
                      <li>
                        <Link to={item.url} className="element-color">
                          {item.name}
                        </Link>
                      </li>
                    ))}

         </div>
         <div className="footer-block">
             <h4>Learning</h4>

                    {[{name:'Courses',url:'/courses'}].map((item: any) => (
                      <li>
                        <Link to={item.url} className="element-color">
                          {item.name}
                        </Link>
                      </li>
                    ))}

         </div>
         <div className="footer-block">
             <h4>More</h4>

                    {[{name:"About Us",url:'/about-us'}, {name:"Login",url:'/login'}].map(
                      (item: any) => (
                        <li>
                          <Link to={item.url} className="element-color">
                            {item.name}
                          </Link>
                        </li>
                      )
                    )}

    </div>
         </div>
         <div id="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="copyright">
                  <p>
                    <span>Expert Works 2021 All right reserved. </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
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
 )
};
export default Footer;
