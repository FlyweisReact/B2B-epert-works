/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


const Summary = () => {
  return (
    <>
      <Navbar />
      <HeadingTile heading="Enrollment Summary" />
      {/* <table
        style={{
          width: "98%",
          overflow: "scroll",
          margin: "1%",
          border: "1px solid black",
          marginTop: "10%",
        }}
      >
        <thead style={{ margin: "2%", border: "1px solid black" }}>
          <tr style={{ overflow: "scroll" }}>
            <th
              style={{
                textAlign: "center",
              }}
            >
              Course Name
            </th>
            <th
              style={{
                textAlign: "center",
              }}
            >
              Number of users enrolled Weekly{" "}
            </th>
            <th
              style={{
                textAlign: "center",
              }}
            >
              Number of users enrolled Monthly{" "}
            </th>
            <th
              style={{
                textAlign: "center",
              }}
            >
              Company Name{" "}
            </th>
            <th
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              Company Email{" "}
            </th>
            <th
              style={{
                textAlign: "center",
              }}
            >
              Scheduled Time{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid black" }}>
            <td style={{ borderRight: "1px solid black" }}>Java</td>
            <td style={{ borderRight: "1px solid black" }}>6</td>
            <td style={{ borderRight: "1px solid black" }}>12</td>
            <td style={{ borderRight: "1px solid black" }}>Flyweis </td>
            <td style={{ borderRight: "1px solid black" }}> Flyweis.tech </td>
            <td style={{ borderRight: "1px solid black" }}> UTC 5:00 </td>
          </tr>
          <tr>
            <td style={{ borderRight: "1px solid black" }}>Java</td>
            <td style={{ borderRight: "1px solid black" }}>6</td>
            <td style={{ borderRight: "1px solid black" }}>12</td>
            <td style={{ borderRight: "1px solid black" }}>Flyweis </td>
            <td style={{ borderRight: "1px solid black" }}> Flyweis.tech </td>
            <td style={{ borderRight: "1px solid black" }}> UTC 5:00 </td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
};

export default Summary;
