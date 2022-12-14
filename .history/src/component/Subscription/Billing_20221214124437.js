/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import {
  faUser,
  faClock,
  faCalendarDay,
  faMailBulk,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailchimp } from "@fortawesome/free-brands-svg-icons";
const Billing = () => {
  return (
    <>
      <Navbar />

      <div className="BillingDiv">
        <div className="left">
          <div className="up">
            <h2>Billing Address</h2>
            <div >
                <label> <FontAwesomeIcon icon={faUser} /> FullName</label>
                <input type={'text'} />
                <label> <FontAwesomeIcon icon={faEnvelope} /> Email</label>
                <input type={'text'} />
                <label> <FontAwesomeIcon icon={faLocationArrow} /> Address</label>
                <input type={'text'} />
                <label> <FontAwesomeIcon icon={faUser} /> City</label>
                <input type={'text'} />
         
            </div>
          </div>
          <div className="dowm">
          <h2>Payment</h2>
          </div>
        </div>

        <div className="right">
            
        </div>
        
      </div>
    </>
  );
};

export default Billing;
