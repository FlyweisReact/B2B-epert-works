/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";

const Summary = () => {
  return (
    <>
      <Navbar />
      <HeadingTile heading="Enrollment Summary" />
        <table
        style={{
          width: "98%",
          overflow: "scroll",
          margin: "1%",
          border: "1px solid black",
          marginTop : '10%'
        }}
      >
        <thead style={{ margin: "2%", border: "1px solid black" }}>
          <tr style={{ overflow : 'scroll'}}>
            <th style={{textAlign : 'center'  , overflowX : 'scroll' , width : '200px'}}>Course Name</th>
            <th style={{textAlign : 'center' , overflowX : 'scroll' , minWidth : '200px' , maxWidth : '205px'}}>Number of users enrolled Weekly </th>
            <th style={{textAlign : 'center' , overflowX : 'scroll' , width : '200px'}}>Number of users enrolled Monthly </th>
            <th style={{textAlign : 'center' , overflowX : 'scroll' , width : '200px'}}>Company Name </th>
            <th style={{textAlign : 'center' , overflowX : 'scroll' , width : '200px'}}> Company Email </th>
            <th style={{textAlign : 'center' , overflowX : 'scroll' , width : '200px'}}>Scheduled Time </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid black"   }}>
            <td style={{borderRight : '1px solid black'}}>Java</td>
            <td  style={{borderRight : '1px solid black'}}>6</td>
            <td  style={{borderRight : '1px solid black'}}>12</td>
            <td  style={{borderRight : '1px solid black'}}>Flyweis </td>
            <td  style={{borderRight : '1px solid black'}}> Flyweis.tech </td>
            <td  style={{borderRight : '1px solid black'}}> UTC 5:00 </td>
          </tr>
          <tr>
            <td  style={{borderRight : '1px solid black'}}>Java</td>
            <td  style={{borderRight : '1px solid black'}}>6</td>
            <td  style={{borderRight : '1px solid black'}}>12</td>
            <td  style={{borderRight : '1px solid black'}}>Flyweis </td>
            <td  style={{borderRight : '1px solid black'}}> Flyweis.tech </td>
            <td  style={{borderRight : '1px solid black'}}> UTC 5:00 </td>
          </tr>
        </tbody>
      </table>
   
    </>
  );
};

export default Summary;
