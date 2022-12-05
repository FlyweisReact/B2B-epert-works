import React from 'react'
import {faClock,faLink,faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faInstagram,faYoutube,faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "./SubHeader.css"
export default function SubHeader() {
    return (
        <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              {/* <ul className="left-info">
                <li><a href="#"><FontAwesomeIcon icon={faClock}/><span className="sub-header-icon-space">Mon-Fri 09:00-17:00</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faPhone}/><span className="sub-header-icon-space">+1 (646) 727 9169</span></a></li>
              </ul> */}
            </div>
            <div className="col-md-4">
              <ul className="right-icons">
                <li><a href="https://www.facebook.com/Expertworks2021" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li><a href="https://www.instagram.com/expertworks2020/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a href="https://www.linkedin.com/company/75511667/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                <li><a href="https://www.youtube.com/channel/UCWtuFD33Wt1tCNSsue9t51A/?sub_confirmation=1" target="_blank"><FontAwesomeIcon icon={faYoutube}/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}
