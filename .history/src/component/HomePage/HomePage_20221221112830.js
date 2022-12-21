/** @format */

import React from "react";
import "./HomePge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import img from "../../img/New/home_page-1_1-removebg-preview (1).png";
import img1 from "../../img/New/Banner.png";
import img2 from "../../img/New/azure 1.png";
import img3 from "../../img/New/deep learning 1.png";
import img4 from "../../img/New/java 1.png";

import img5 from "../../img/New/Alameda 1.png";
import img6 from "../../img/New/logo 1.png";

import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const HomePage = () => {
  return (
    <>
      <div className="myNav">
        <div className="up">
          <img
            src="https://experts-work.netlify.app/static/media/logo.243071f1.png"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="mid">
          <input type="search" />

          <FontAwesomeIcon
            icon={faSearch}
            style={{
              border: "1px solid #fc9b10",
              width: "75px",
              height: "41px",
              position: "absolute",
              padding: "8px",
              borderLeft: "none",
              backgroundColor: "#fc9b10",
              color: "black",
            }}
          />
        </div>
        <div className="down">
          <ul>
            <li>Home</li>
            <li>Course</li>
            <li>Resources</li>
            <li>
              Login |{" "}
              <span
                style={{
                  border: "1px solid #fc9b10",
                  marginLeft: "5px",
                  paddingBottom: "none",
                  backgroundColor: "#fc9b10",
                  color: "#fff",
                  padding: "1px",
                  width: "80px",
                  borderRadius: "5px",
                }}
              >
                {" "}
                Signup
              </span>
            </li>
            <li
              style={{
                border: "1px solid black",
                borderRadius: "20px",
                padding: "2px",
                paddingLeft: "8px",
                width: "120px",
                textAlign: "center",
              }}
            >
              FOLLOW US
            </li>
          </ul>
        </div>
      </div>

      {/* ------------------------------------------------------ */}

      <div className="CourseNav">
        <ul>
          <li style={{ color: "white" }}>Tranding Courses</li>
          <li>Deep Learning</li>
          <li>Artificial Intelligence</li>
          <li>DevOps</li>
          <li>Bigdata</li>
          <li>Datasceince</li>
          <li>
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "white", width: "65px", height: "25px" }}
            />
          </li>
        </ul>
      </div>

      {/* ------------------------------------------- */}

      <div className="HomeTwoSec">
        <div className="left">
          <video width="800" controls>
            <source
              src="https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="right">
          <p>
            Learning with{" "}
            <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              EXPERT-WORKS
            </span>{" "}
            gives you <br />
            the liberty to learn <strong>whenever , </strong>
            <strong>whereever & </strong> <strong>however</strong>
            <br />
            you prefer
          </p>

          <p style={{ fontSize: "1.6rem" }}>
            Upskill Your Career with Self-paced , Hassie-free Learning Module
          </p>
          <button>START YOUR FREE TRIAL</button>
        </div>
      </div>
      {/* --------------------------------------------------- */}

      <div className="HomeSignUp">
        <div className="up">
          <div className="down">
            <p style={{ fontWeight: "bold", fontSize: "2.3rem" }}>
              Sign up for new course now!!
            </p>
            <p style={{ fontWeight: "100" }}>Start learning now</p>
          </div>
          <button>SIGNUP NOW</button>
        </div>
      </div>

      {/* ------------------------------------------------ */}

      <div className="HomeNewTwoSec">
        <div className="left">
          <p style={{ textAlign: "center" }}>Why</p>
          <p style={{ fontWeight: "bold", textAlign: "center" }}>
            EXPERT-WORKS?
          </p>
          <ul style={{ list  , listStyleType : 'disc'}}>
            <li style={{ listStyleType: "disc" }}>Hybrid Learning</li>
            <li>Up-to Date Course Content</li>
            <li>Real-Time Assignments & Projects</li>
            <li>Get Certifications</li>
            <li>Dedicated Team for Support</li>
          </ul>
        </div>
        <div className="right">
          <img src={img} alt="" style={{ width: "100%" }} />
        </div>
      </div>
      {/* --------------------------------------- */}
      <div className="normalDiv"></div>

      {/* ------------------------------------------------------- */}

      <div className="HomeTwoSecSecond">
        <div className="left">
          <img src={img1} alt="" style={{ width: "100%" }} />
        </div>
        <div className="right">
          <p>Kick Start your career with</p>
          <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>EXPRET-WORKS</h1>
          <p style={{ marginTop: "8%" }}>Increase your chances</p>
          <p>of getting hired by</p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              FORTUNE 500
            </span> companies{" "}
          </p>
          <button>Know more</button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}

      <div className="normalDiv" style={{ marginBottom: "0" }}></div>
      {/* ----------------------------------------------- */}

      <Carousel breakPoints={breakPoints} className="myCarousel">
        <div className="CarouselDiv">
          <img src={img2} alt="" style={{ width: "400px" }} />
          <p>
            Learn this In-Demand <br /> course from the Beginner <br /> Level
          </p>
          <span
            style={{
              textAlign: "left",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Watch Video (2:02)
          </span>
        </div>
        <div className="CarouselDiv">
          <img src={img3} alt="" style={{ width: "400px" }} />
          <p>
            Deep Learning course <br /> with Expert-Level <br /> information
          </p>
          <span
            style={{
              textAlign: "left",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Watch Video (2:02)
          </span>
        </div>
        <div className="CarouselDiv">
          <img src={img4} alt="" style={{ width: "400px" }} />
          <p>
            Learn this Top Programming <br /> language from the intermediate{" "}
            <br /> Level
          </p>
          <span
            style={{
              textAlign: "left",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Watch Video (2:02)
          </span>
        </div>
        <div className="CarouselDiv">
          <img src={img2} alt="" style={{ width: "400px" }} />
          <p>
            Learn this In-Demand <br /> course from the Beginner <br /> Level
          </p>
          <span
            style={{
              textAlign: "left",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Watch Video (2:02)
          </span>
        </div>
        <div className="CarouselDiv">
          <img src={img3} alt="" style={{ width: "400px" }} />
          <p>
            Learn this In-Demand <br /> course from the Beginner <br /> Level
          </p>
          <span
            style={{
              textAlign: "left",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Watch Video (2:02)
          </span>
        </div>
      </Carousel>

      {/* ------------------------------------------------------------- */}

      <div
        className="normalDiv"
        style={{ marginBottom: "0", marginTop: "0" }}
      ></div>
      {/* ----------------------------------------------- */}

      <div className="HomeBIg">
        <h1>Encouraging feedback from satisfied subscribers</h1>
        <div className="Dis">
          <div className="left">
            <div>
              <p>
                "I had an amazing experience with Expert-Works. I Purchased
                their Salesforce admin course and complete the entire course in
                a couple of months. The video quality is good and they respond
                quickly to emails, so I found it vey helpful and convenient."
              </p>
              <button>Rhea</button>
            </div>
            <div>
              <p>
                "I purchased the machine learning course and enjoyed doint
                mini-projects assigned. Other platforms were charging extra for
                the mini-projects but with Expert-Works. I recieved a lot of
                bonuses and a course completetion certification as well. "
              </p>
              <button>Patrick</button>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------- */}

      <div className="NewNormalDiv">
        <p>Our Long-Term Patrons</p>
      </div>

      {/* ---------------------------------------------- */}

      <div className="NewHome">
        <div>
          <img src={img5} alt="" style={{ width: "100%" }} />
        </div>
        <div>
          <img src={img6} alt="" style={{ width: "100%" }} />
        </div>
      </div>

      {/* ---------------------------------------------------- */}

      <div className="myFoo">
        <div>
          <p>Our Contact</p>
          <ul>
            <li>Expert Technologies LLC</li>
            <li>1205 BMC Drive</li>
            <li>Suite 1803-E, Cedar Park TX 78613 </li>
            <li>+1 (646) 727 9186</li>
            <li>sales@expert-works.com</li>
          </ul>
        </div>
        <div>
          <p>Quick Links</p>
          <ul>
            <li>Frequently Asked Questions</li>
            <li>Term & condition</li>
            <li>Privacy Policy </li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <p>Learning</p>
          <ul>
            <li>Learning</li>
          </ul>
        </div>
        <div>
          <p>More</p>
          <ul>
            <li>About Us</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
