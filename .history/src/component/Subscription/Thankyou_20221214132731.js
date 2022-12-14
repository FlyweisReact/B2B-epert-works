/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import img from "../../img/New/download.jpg";

const Thankyou = () => {
  return (
    <>
      <Navbar />
      <img src={img} alt="" style={{ marginTop: "2%", width: "200px" }} />
    </>
  );
};

export default Thankyou;
