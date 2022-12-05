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
    time: "12-5 PM",
    user : '5'
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/automation/beginner/beginner.jpg",
    heading: "Python Course",
    time: "10-11 AM",
    user : '15'
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/maclearnbeginner/beginner1.jpg",
    heading: "Java Course",
    time: "3-5 PM",
    user : '10'
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/azure/beginner/beginner.jpg",
    heading: "Web Development",
    time: "1-4 PM",
    user : ''
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
                    {/* <img src={i.img} alt="" /> */}
                    <div className="card-title">
                      <h2> {i.heading} </h2>

                      <FontAwesomeIcon icon={faClock} /> {i.time}
                      <br />
                      <FontAwesomeIcon icon={faCalendarDay} /> 12/10/2022
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
