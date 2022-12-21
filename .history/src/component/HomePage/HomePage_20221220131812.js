/** @format */

import React from "react";
import "./HomePge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

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

      <div className="HomeTwoSec">
        <div className="left">
          <video width="600" controls>
            <source
              src="https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="right">
          <p>
            Learning with <span>EXPERT-WORKS</span> gives you <br />
            the liberty to learn <strong>whenever,</strong> 
            <strong>whereever & </strong> <strong></strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
