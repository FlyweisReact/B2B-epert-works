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


const Trial = () => {
    return (
        <>
          <Navbar />
          <HeadingTile heading="Free Trial" />
    
        
        </>
      );
    };

export default Trial