/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import img from "../../img/New/download.jpg";

const Thankyou = () => {
  return (
    <>
      <Navbar />
      <img src={img} alt="" style={{ marginTop: "2%", width: "200px" }} />
      <h1 style={{ marginTop: "2%", fontWeight: "bold" }}>
        Subscription successful
      </h1>
      <p style={{ fontSize: "2rem" }}>
        Thankyou for purchasing our product! You will receive an email shortly.
        <br />
        Happy Learning!
      </p>
      <div className=""
    </>
  );
};

export default Thankyou;
