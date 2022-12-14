/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import {
  faUser,
  faClock,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

const Billing = () => {
  return (
    <>
      <Navbar />

      <div className="BillingDiv">
        <div className="left">
          <div className="up">
            <h2>Billing Address</h2>
          </div>
        </div>
        <div className="right">Payment</div>


      </div>
    </>
  );
};

export default Billing;
