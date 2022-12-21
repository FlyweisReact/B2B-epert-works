/** @format */

import React , {useState} from "react";
import "./HomePge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import img from "../../img/New/home_page-1_1-removebg-preview (1).png";
import img1 from "../../img/New/Banner.png";

import Carousel from 'react-elastic-carousel';

const HomePage = () => {


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const addItem = () => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = () => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  };
  
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
          <li>Tranding Courses</li>
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
          <ul>
            <li>Hybrid Learning</li>
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

      <div className="normalDiv"></div>
      {/* ----------------------------------------------- */}

      {/* Owl Carousel */}
      {/* <Carousel>
      <div>Hi</div>
      <div>Hi</div>
      </Carousel> */}
      <div className="App">
      <div className="controls-wrapper">
        <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button>
      </div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </Carousel>
      </div>
    </div>
    </>
  );
};

export default HomePage;
