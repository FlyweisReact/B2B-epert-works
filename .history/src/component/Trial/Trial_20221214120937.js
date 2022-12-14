/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";
import img1 from "../../img/New/unnamed.jpg";

const Trial = () => {
  // const show = () => {
  //   const target = document.getElementById("hideS");
  //   const target1 = document.getElementById("hideSS");

  //   target.style.display = "block";
  //   target1.style.display = "block";
  // };


  const navigate = useNa

  return (
    <>
      <Navbar />
      {/* <HeadingTile heading="Free Trial" /> */}
      <div className="trialImg">
        <img src={img1} alt="" />
      </div>

      <div>
      <h2 style={{marginTop : '2%'}}>Sign up for 30-day trial</h2>
      <div className="trialNewForm">
        <div className="left">
          <label>First Name</label>
          <input type={'text'} />
          <label>Last Name</label>
          <input type={'text'} />
          <label>Email Address</label>
          <input type={'text'} />
          <label>Phone Number</label>
          <input type={'text'} />
        </div>
        <div className="mid">
        <label>Job Title </label>
          <input type={'text'} />
          <label>Company  </label>
          <input type={'text'} />
          <label>Website URL  </label>
          <input type={'text'} />
          <label>License  </label>
          <input type={'text'} />
        </div>
        <div className="right">
        <label>Country  </label>
          <input type={'text'} />
<br />
          <button>START FREE TRIAL</button>
        </div>
      </div>

      </div>


      {/* <div className="FormTrial">
        <div className="left">
          <label>Admin Name</label>
          <input type="text" />
          <label>Admin Email</label>
          <input type="email" /> <br />
          <button onClick={() => show()}>Submit</button>
        </div>
        <div className="hiddenDiv" id="hideS" style={{ display: "none" }}></div>
        <div className="right" id="hideSS" style={{ display: "none" }}>
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
      </div> */}
    </>
  );
};

export default Trial;
