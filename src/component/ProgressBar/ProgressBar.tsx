import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useDispatch } from "react-redux";
const Container = styled.div`
  progress {
    margin: 10px 0px;
  }
  progress[value] {
    /* Reset the default appearance */
    -webkit-appearance: none;
    appearance: none;
    width: 400px;
    height: 20px;
  }
  progress[value]::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
  // div.time-bar {
  //   float: left;
  //   margin-left: 340px;
  // }
`;
interface timer {
  timervalue: number ;
  maxValue: number;
}
export default function Timer({ timervalue, maxValue }: timer) {
  
  const dispatch = useDispatch();
  useEffect(() => {
    //alert(timervalue);
    if (timervalue === 0) {
      localStorage.setItem("timervalue", "0");
      
    }
  }, [timervalue]);

  return (
    <Container>
      <progress value={timervalue*100} max={maxValue*10}  className="test"/>
      <br />

      {/* <div className="time-bar">
        Time Remaining: {((timervalue / 150) * 0.15).toFixed(2)} / 0.15 seconds
      </div>
      <br /> */}
    </Container>
  );
}

// Timer.propTypes = {
//   value: PropTypes.number.isRequired,
//   max: PropTypes.number,
// };

Timer.defaultProps = {
  max: 100,
};
