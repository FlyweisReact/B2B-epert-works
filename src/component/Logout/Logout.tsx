import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import Courses from "../LMSMain/LMSMain";
import "./Logout.css";
export default function Logout() {
  return (
    <div className="no-scroll">
      <Navbar />
      <div>
        <section id="inner-headline">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="pageTitle" style={{ marginLeft: "-10px" }}>
                  Logout
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section id="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <h2></h2>✅{" "} */}
                <span className="logout-style">
                  You've successfully logged out of Expert Works. Never stop
                  learning!
                </span>
                <br />
              </div>
            </div>
          </div>
        </section>
        <section className="aboutUs">
          <div className="container">
            <div className="row">
              <div className="col-md-6 logout-image">
                <img
                  src={require("../../img/img1.png")}
                  className="img-center"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div>
                  <h2 className="logout-desc">
                    Expert-Works is a leading cloud-based, &nbsp; &nbsp;
                    e-learning platform!{" "}
                  </h2>
                  <p className="logout-text">
                    Did you know your company can get you unlimited access to
                    Expert Works top courses?
                  </p>
                  <p className="logout-text">
                    Expert-Works has custom designed a self-paced Tech course
                    with real-time content, which helps you position yourself
                    well in this highly competitive industry.
                  </p>
                  {/* <p className="logout-text">
                    Employees at Alphabet Techsolutions, Alameda Tech Solutions
                    and Cewaves use Expert-Works at work.
                  </p> */}
                </div>
                <br />
              </div>
            </div>
          </div>
        </section>
        <Courses show={false} />
      </div>
    </div>
  );
}
