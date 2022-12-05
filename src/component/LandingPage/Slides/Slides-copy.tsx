import React from "react";
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
        autoPlay
        showArrows={false}
        showThumbs={false}
        width="80"
      >
        <div>
          <img src={slide1} alt="slide1" />
          {/* <h3 >Welcome to Expert-Works!</h3> */}

          <br />
          <p
            className="legend slide-text"

          >
            {/* <h6></h6>
                  <h4>Find your course<br/>&amp; start learning</h4>
                  <p>Gone are those days, when companies like Bench Sales had to spend thousands of dollars and their valuable time just to get their consultants trained.</p>
                  <a href="courses.html" className="filled-button">our Courses</a>  */}
            <span className="slide-font-size">we are here to support you</span>
            <br />
            <span className="slide-font-size" style={{color:'black'}}>Gone are those days, when companies like Bench Sales had to spend thousands of dollars and their valuable time just to get their consultants trained.</span>

            <span>                  <a href="courses.html" className="filled-button">our Courses</a>
            </span>
          </p>
        </div>
        <div>
          <img src={slide2} alt="slide2" />
          <p
            className="legend slide-text"

          >
            {" "}
            <span className="slide-font-size">
              THE EXPERT WAY OF LEARNING!
            </span>
            <br />
            <span>Flexibility to learn the course at your own pace and convenience.</span>
          </p>
        </div>
        <div>
          <img src={slide3} alt="slide3" />
          <p
            className="legend slide-text"

          >
            {" "}
            <span className="slide-font-size">
              THE EXPERT WAY OF LEARNING!
            </span>
            <br />
            <span>Flexibility to learn the course at your own pace and convenience.</span>
          </p>
        </div>
      </Carousel>
    </div>
  );
}
