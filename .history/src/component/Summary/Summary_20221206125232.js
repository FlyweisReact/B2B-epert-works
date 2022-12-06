/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClock,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";




const Summary = () => {
    return (
        <>
          <Navbar />
          <HeadingTile heading="Enrollment Summary" />
    
       
        </>
      );
    };

export default Summary