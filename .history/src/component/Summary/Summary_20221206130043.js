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
                        <td>Java</td>
                        <td>Java</td>
                        <td>Java</td>
                        <td>Java</td>
                    </tr>
                </tbody>
            </table>
       
        </>
      );
    };

export default Summary