import React from "react";
import MobileFooter from "./mobilefooter/MobileFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <MobileFooter/>
      <a onClick={() => window.scroll(0, 0)} className="scrollup">
        <FontAwesomeIcon icon={faAngleUp} style={{ color: "white" }} />
      </a>
    </div>
  );
}
