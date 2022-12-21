/** @format */

import React from "react";
import "./HomePge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
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
                // padding: "2px",
                marginLeft: "5px",
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
            }}
          >
            FOLLOW US
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
