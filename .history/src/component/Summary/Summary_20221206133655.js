/** @format */

import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import HeadingTile from "../HeadingTile/HeadingTile";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const data = [
  {
    CourseN: "Java",
    UW: 4,
    UM: 45,
    TU: 49,
    CN: "React ",
    CE: "React@gmail.com",
    Time: "UTC 5:00",
  },
  {
    CourseN: "Python",
    UW: 4,
    UM: 45,
    TU: 49,
    CN: "React ",
    CE: "React@gmail.com",
    Time: "UTC 5:00",
  },
];

const Summary = () => {
  return (
    <>
      <Navbar />
      <HeadingTile heading="Enrollment Summary" />

      <TableContainer
        component={Paper}
        style={{ marginTop: "5%", width: "90%", marginLeft: "5%" }}
      >
        <input type="search" className="searchNar" />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "18px" }}>Course Name</TableCell>
              <TableCell align="left" style={{ fontSize: "18px" }}>
                No. of users enrolled weekly
              </TableCell>
              <TableCell align="left " style={{ fontSize: "18px" }}>
                No. of users enrolled weekly
              </TableCell>
              <TableCell align="left" style={{ fontSize: "18px" }}>
                Total User Enrolled
              </TableCell>
              <TableCell align="left" style={{ fontSize: "18px" }}>
                Company Name
              </TableCell>
              <TableCell align="left" style={{ fontSize: "18px" }}>
                Company Email
              </TableCell>
              <TableCell align="left" style={{ fontSize: "18px" }}>
                Scheduled Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((i, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={index}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{ fontSize: "18px" }}
                >
                  {CourseN}
                </TableCell>
                <TableCell align="left" style={{ fontSize: "18px" }}>
                  {" "}
                  15
                </TableCell>
                <TableCell align="left" style={{ fontSize: "18px" }}>
                  {" "}
                  25{" "}
                </TableCell>
                <TableCell align="left" style={{ fontSize: "18px" }}>
                  {" "}
                  40{" "}
                </TableCell>
                <TableCell align="left" style={{ fontSize: "18px" }}>
                  {" "}
                  React{" "}
                </TableCell>
                <TableCell align="left" style={{ fontSize: "18px" }}>
                  {" "}
                  React@gmial.com{" "}
                </TableCell>
                <TableCell align="left" style={{ fontSize: "18px" }}>
                  UTC : 5:00{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Summary;
