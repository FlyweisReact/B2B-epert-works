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
  faCity,
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
            <div>
              <label>
                {" "}
                <FontAwesomeIcon icon={faUser} /> FullName
              </label>
              <input type={"text"} />
              <label>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </label>
              <input type={"text"} />
              <label> Address</label>
              <input type={"text"} />
              <label>
                {" "}
                <FontAwesomeIcon icon={faCity} /> City
              </label>
              <input type={"text"} />
              <div style={{ display: "flex" }}>
                <div>
                  <label> State</label>
                  <input type={"text"} style={{ width: "100px" }} />
                </div>
                <div>
                  <label> Zip</label>
                  <input type={"text"} style={{ width: "100px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="dowm">
            <h2>Payment</h2>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </>
  );
};

export default Billing;
