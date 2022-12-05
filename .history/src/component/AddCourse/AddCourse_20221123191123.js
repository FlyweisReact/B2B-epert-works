/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";

const AddCourse = () => {
  return (
    <>
      <Navbar />
      <HeadingTile heading=" Add Courses" />
      <div>
        <form>
            <select>
                <option></option>
            </select>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
