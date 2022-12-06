/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  faUser,
  faClock,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

const Live = [
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/python/beginner/beginner.jpg",
    heading: "Machine Learning",
    time: "UTC−05:00",
    user: "5",
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/automation/beginner/beginner.jpg",
    heading: "Python Course",
    time: "UTC−05:00",
    user: "15",
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/maclearnbeginner/beginner1.jpg",
    heading: "Java Course",
    time: "UTC−05:00",
    user: "10",
  },
  {
    img: "https://d3s24np0er9fug.cloudfront.net/phase1/courses/azure/beginner/beginner.jpg",
    heading: "Web Development",
    time: "UTC−05:00",
    user: "9",
  },
];

const Trial = () => {
    return (
        <>
          <Navbar />
          <HeadingTile heading="Live Training" />
    
        
        </>
      );
    };

export default Trial