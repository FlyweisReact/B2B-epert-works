/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";

const Summary = () => {
    return (
        <>
          <Navbar />
          <HeadingTile heading="Enrollment Summary" />

            <table style={{width : '100%' , overflow : 'scroll' , marginTop : '5%' }}>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Number of users enrolled Weekly  </th>
                        <th>Number of users enrolled Monthly  </th>
                        <th>Company Name  </th>
                        <th>Company Email  </th>
                        <th>Scheduled Time  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>Java</td>
                        <td>6</td>
                        <td>12</td>
                        <td>Flyweis </td>
                        <td> Flyweis.tech  </td>
                        <td> UTC  5:00  </td>
                    </tr>
                </tbody>
            </table>
       
        </>
      );
    };

export default Summary