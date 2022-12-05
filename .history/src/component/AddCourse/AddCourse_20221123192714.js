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
          <p style={{ marginLeft: "10%" }}>Add Course</p>

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
          <label style={{}}>Ending Time</label>
          <input type={"time"} />
          <br />
          <br />
          <button>Add Course</button>
        </form>
        <div s>
        <img
          src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_960_720.jpg"
          alt=""
        />
        </div>
        
      </div>
    </>
  );
};

export default AddCourse;
