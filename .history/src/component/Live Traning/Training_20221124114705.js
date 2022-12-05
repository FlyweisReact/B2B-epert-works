/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faFilter,
    faTimes,
    faClock,
    faCalendar,
    faCalendarDay
  } from "@fortawesome/free-solid-svg-icons";

const Live = [
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    heading: "Machine Learning",
    time: "18 Hours",
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/automation/beginner/beginner.jpg",
    heading: "Python Course",
    time: "18 Hours",
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/maclearnbeginner/beginner1.jpg",
    heading: "Java Course",
    time: "18 Hours",
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/azure/beginner/beginner.jpg",
    heading: "Web Development",
    time: "18 Hours",
  },
];

const Training = () => {
  return (
    <>
      <Navbar />
      <HeadingTile heading="Live Training" />

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {Live.map((i) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <img src={i.img} alt="" />
                    <div className="card-title">
                      <h2> Machine Learning</h2>

                      <FontAwesomeIcon icon={faClock} /> 17Hours
                      <br />
                      <FontAwesomeIcon icon={faCalendarDay} />12/10/20
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Training;
