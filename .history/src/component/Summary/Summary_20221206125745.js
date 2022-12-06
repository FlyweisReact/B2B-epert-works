/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";

const Summary = () => {
    return (
        <>
          <Navbar />
          <HeadingTile heading="Enrollment Summary" />

            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
       
        </>
      );
    };

export default Summary