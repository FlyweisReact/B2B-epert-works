/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";
import './AddCourse.css'

const AddCourse = () => {
  return (
    <>
      <Navbar />
      <HeadingTile heading=" Add Courses" />
      <div className="selectForm">
        <form>
        <h2>Add Course</h2>
            <select>
                <option>Java</option>
                <option>Python</option>
                <option>Python</option>
            </select>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
