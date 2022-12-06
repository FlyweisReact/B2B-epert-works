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
        <div className="hiddenDiv" style={{display : 'none'}}></div>
        <div className="right" style={{display : 'none'}}>
          <div className="formRight">
            <p
              style={{
                fontSize: "2rem",
                textAlign: "center",
                margin: "0",
                fontWeight: "600",
              }}
            >
              Credit Card Detail
            </p>
            <input type="text" placeholder="Card Number" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2%",
                gap: "10px",
              }}
            >
              <input type="text" placeholder="MM / YY" />
              <input type="text" placeholder="CVV" />
            </div>
            <label>Billing address</label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: 0,
                gap: "10px",
              }}
            >
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>{" "}
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
