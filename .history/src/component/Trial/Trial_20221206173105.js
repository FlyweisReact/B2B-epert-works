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
          <label>Admin Name</label>
          <input type="text" />
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default Trial;
