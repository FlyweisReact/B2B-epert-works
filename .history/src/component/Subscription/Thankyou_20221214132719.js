/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import img from "../../img/New/download.jpg";

const Thankyou = () => {
  return (
    <>
      <Navbar />
      <img src={img} alt="" style={{marginTop : '5%'}} />
    </>
  );
};

export default Thankyou;