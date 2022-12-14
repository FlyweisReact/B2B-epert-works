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
import img3 from "../../img/New/classic 1.png";
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: "1rem",
                }}
              >
                <div>
                  <label> State</label>
                  <input type={"text"} style={{ width: "150px" }} />
                </div>
                <div>
                  <label> Zip</label>
                  <input type={"text"} style={{ width: "150px" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="down">
            <h2>Payment</h2>
            <div>
              <label>Accepted Cards</label>

              <div style={{ display: "flex", gap: "5px" , marginTop : '3%' }}>
                <div style={{ width: "30px" }}>
                  <img src={img3} alt="" style={{ width: "100%" }} />
                </div>
                <div style={{ width: "20px" }}>
                  <img src={img3} alt="" style={{ width: "100%" }} />
                </div>
                <div style={{ width: "20px" }}>
                  <img src={img3} alt="" style={{ width: "100%" }} />
                </div>
                <div style={{ width: "20px" }}>
                  <img src={img3} alt="" style={{ width: "100%" }} />
                </div>
              </div>

              <label>
               Name on Card
              </label>
              <input type={"text"} />
              <label> Address</label>
              <input type={"text"} />
              <label>
                Credit Card Number
              </label>
              <input type={"text"} />
              <label>
                Exp Month
              </label>
              <input type={"text"} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: "1rem",
                }}
              >
                <div>
                  <label> Exp Year</label>
                  <input type={"text"} style={{ width: "150px" }} />
                </div>
                <div>
                  <label> CVV</label>
                  <input type={"text"} style={{ width: "150px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </>
  );
};

export default Billing;
