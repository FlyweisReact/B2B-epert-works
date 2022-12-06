/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";

const Summary = () => {
    return (
        <>
          <Navbar />
          <HeadingTile heading="Enrollment Summary" />

            <table style={{width : '90%' , overflow : 'scroll' , margin : '5%' , border : '1px solid black' , padding : '10px'}}>

                <thead style={{margin : '2%' , border : '1px solid black' , textAlign : 'center'}}>
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
                    <tr  style={{borderBottom : '1px solid black'}}>
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