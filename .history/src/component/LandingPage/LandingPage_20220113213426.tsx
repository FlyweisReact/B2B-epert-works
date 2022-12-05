import React from "react";
import {Link} from 'react-router-dom'
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import OurClients from "./OurClients/OurClients";
import Slides from "./Slides/Slides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import thumbnail from "../../img/landingpage-thumbnail.png"
import HomeComponents from "./HomeComponents/HomeComponents";
import TransitionsModal from "../shared/Modal/Modal";
import Modal from "../shared/Modal/Modal"

import "./LandingPage.css";
export const LandingPage = () => {

  return (
    <div style={{overflowX:'hidden'}}>
      <Navbar />

      <Slides />
      <div className="request-form">
      <div className="landing-signup-container">
        <div className="landing-signup-left">
          <div >
            <h4>Sign Up a free course now!</h4>
            <span>Start learning for free.</span>
          </div>

        </div>
        <div className="landing-signup-right">
            <Link to="/signup" className="border-button">Sign Up</Link>
          </div>
      </div>
    </div>

   <HomeComponents/>

   <Modal/>

      <Footer />
    </div>
  );
};
