import React, { useState } from 'react';
import Navbar from '../Header/Navbar/Navbar';
import { Button, Select, MenuItem} from "@mui/material"
import "./Mentorship.css";
import Footer from "../Footer/Footer";
import MentorImg from '../../img/mentor2.png';
import MentorImg1 from '../../img/mentor3.png';
function Mentorship(props: any) {

    return (
        <div className="no-scroll">
           <Navbar/>
              <div className="mentorship-main-container">
                <div className="mentorship-content">
                <div className="mentorship-image">
                <img src={MentorImg} alt="mentorship-img" />
                </div>
                <div className="mentorship-form">
                <h1 className="mentorship-method-title">Request a <span>Session!</span></h1>
                <div className="mentorship-inputs">
                <label className="">Course Name</label>
                <input
                name="name"
                type="text"
                className="form-control mentor-select-font"
                id="courceName"
                placeholder="Course Name"
                />
                 <label className="">Course Level</label>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Course Level"
                    className="mentor-select"
                >
                    <MenuItem className="mentor-select-font" value={10}>Beginner</MenuItem>
                    <MenuItem className="mentor-select-font" value={20}>Intermediate</MenuItem>
                    <MenuItem className="mentor-select-font" value={30}>expert</MenuItem>
                </Select>
                <label className="mar-10">Session type</label>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Session Type"
                    className="mentor-select"
                >
                    <MenuItem className="mentor-select-font" value={10}>Project Explanation</MenuItem>
                    <MenuItem className="mentor-select-font" value={20}>Q & A Session</MenuItem>
                    <MenuItem className="mentor-select-font" value={30}>Assignment Session</MenuItem>
                </Select>
                <label className="mar-10">Message</label>
                <textarea
                name="message"
                rows={6}
                className="form-control mentor-select-font"
                id="message"
                placeholder="Write Something..."
                >
                </textarea>
                <Button className="mentorship-submit">Submit</Button>
        </div>
               </div>
                </div>
                </div>
                <div className="mentorship-intro">
                    <div className="mentorship-desc">
                    <span>ENROLL NOW!</span>
                        <h1 className="mentorship-text-left">How Our Mentorship<br />Program <em>Will Benefit You</em></h1><br />
                        <p className="mentorship-text-left"><span className="style3">&#10004;</span> A great mentor will always guide you properly for a smoother learning <br /> process.</p>
                        <p className="mentorship-text-left"><span className="style3">&#10004;</span> Mentorship programmes are essential if you’re stuck in between your <br /> course and need clarity to continue.</p >
                        <p className="mentorship-text-left"><span className="style3">&#10004;</span>Your mentor will surely inspire you to finish the course on time and  <br />  help you develop your technical skills.</p >
                        <p className="mentorship-text-left"><span className="style3">&#10004;</span> A Mentorship programme is the best way to make your time more productive  <br />  and develop new skills as well.</p >
                        <p className="mentorship-text-left"><span className="style3">&#10004;</span>When you interact with your mentor directly, you develop the <br /> confidence needed to achieve your goals. This in turn, solves all your <br />  doubts and problems associated with your course.</p >
                    </div>
                    <div >
                        <img src={MentorImg1} className="mentorship-size" alt="mentor-img" />
                    </div>
                </div>
                <Footer/>
        </div>
    )
}

export default Mentorship;
