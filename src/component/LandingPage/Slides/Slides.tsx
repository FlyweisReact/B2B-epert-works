import React from "react";
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../../img/slides/slide_01.jpg";
import slide2 from "../../../img/slides/slide_02.jpg";
import slide3 from "../../../img/slides/slide_03.jpg";
import "./Slides.css"
export default function Slides() {
  return (
    <div>
      <Carousel
        dynamicHeight={true}
         autoPlay={true}
        showArrows={false}
        showThumbs={false}
        width="80"
        infiniteLoop={true}
      >
        <div>
          <img src={slide1} alt="slide1" />
          {/* <h3 >Welcome to Expert-Works!</h3> */}

          <br />
          <p
            className="legend slide-text"

          >
            <span className="slide-font-size slide-color" style={{paddingTop:'100px'}}>Welcome to Expert-Works!</span><br />

            <span className="slide-font-size slide-style">A leading cloud-based<br /> E-learning platform</span>
            <br />
            <span  className="slide-subtext" >We provide in-demand, self- paced tech courses with real-time content.<br /> Courses will be available from December 2021.</span>
            <span  className="slide-subtext-mobile" >We provide in-demand, self- paced tech courses <br />with real-time content. Courses will be available <br /> from December 2021.</span>
            <Link to="/contact" className="slides-button" >Contact US</Link>
          </p>
        </div>
        <div>
          <img src={slide2} alt="slide2" />
          <p
            className="legend slide-text"

          >
            {" "}
            <span className="slide-font-size slide-color">We are here to support you</span><br />

            <span className="slide-font-size slide-style">Find your course  <br /> and start learning!</span>
            <br />
            <span  className="slide-subtext" >Gone are those days, when companies like Bench Sales had to spend <br />thousands of dollars and their valuable time just to get their consultants trained.</span>
            <span  className="slide-subtext-mobile" >Gone are those days, when companies like Bench Sales  <br />had to spend thousands of dollars and their valuable  <br />time just to get their consultants trained.</span>
            <Link to="/courses" className="slides-button" >Our Courses</Link>
          </p>
        </div>
        <div>
          <img src={slide3} alt="slide3" />
          <p
            className="legend slide-text"

          >
            {" "}
            <span className="slide-font-size slide-color">Start your Career</span><br />

            <span className="slide-font-size slide-style">Upskill your Career <br />and start learning</span>
            <br />
            <span  className="slide-subtext" >Subscribe to any of our subscription models to get access to our portal<br/> and achieve the flexibility of training as many consultants as you want.</span>
            <span  className="slide-subtext-mobile" >Subscribe to any of our subscription models to get <br/>access to our portal and achieve the flexibility of <br/>training as many consultants as you want.</span>
            <Link to="/courses" className="slides-button" >Our Courses</Link>
          </p>
        </div>
      </Carousel>
    </div>
  );
}
