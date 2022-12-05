/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";
import "./AddCourse.css";

const AddCourse = () => {
  return (
    <>
      <Navbar />
      <HeadingTile heading=" Add Courses" />
      <div className="selectForm">
        <form>
          <p>Add Course</p>
          <select>
            <option>Java</option>
            <option>Python</option>
            <option>Python</option>
          </select>

          <br />
          <br />
          <input type={"date"} placeholder="select data" />
          <br />
          <br />
          <input type={"time"} placeholder="select data" />
        </form>
      </div>
    </>
  );
};

export default AddCourse;
