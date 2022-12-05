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
            <option>Select Course</option>
            <option>Java</option>
            <option>Java</option>
            <option>Python</option>
            <option>Python</option>
          </select>

          <br />
          <br />
          <label style={{}}>Select Day</label>
          <input type={"date"} placeholder="select data" />
          <br />
          <br />
          <label style={{}}>Starting Time</label>
          <input type={"time"} />
          <br />
          <br />
          <label style={{}}>Ending  Time</label>
          <input type={"time"} />
          <br />
          <br />
          
        </form>
      </div>
    </>
  );
};

export default AddCourse;
