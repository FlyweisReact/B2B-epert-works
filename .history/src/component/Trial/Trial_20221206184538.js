/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";

const Trial = () => {
  return (
    <>
      <Navbar />
      <HeadingTile heading="Free Trial" />

      <div className="FormTrial">
        <div className="left">
          <label>Admin Name</label>
          <input type="text" />
          <label>Admin Email</label>
          <input type="email" /> <br />
          <button>Submit</button>
        </div>
        <div className="hiddenDiv"></div>
        <div className="right">
          <div className="formRight">
            <input type="text" placeholder="Card Number" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2%",
                gap: "10px",
              }}
            >
              <input type="MM / YY" />
              <input type="CVV" />
            </div>
            <label>Billing address</label> <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2%",
                gap: "10px",
              }}
            >
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>{" "}
            <br />
            <input type="text" placeholder="Address line 1" /> <br />
            <input type="text" placeholder="Address line 2 (optional) " />{" "}
            <br />
            <input type="text" placeholder="Town/City" /> <br />
            <select>
              <option>State</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Chennai</option>
            </select>{" "}
            <br />
            <input type="text" placeholder="PIN code" /> <br />
            <input type="text" placeholder="mobile Number" /> <br />
            <input type="text" placeholder="Email" />
            <br />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trial;
