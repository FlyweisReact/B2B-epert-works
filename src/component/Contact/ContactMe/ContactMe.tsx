import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import contact from "../../../img/contact.jpg";
import "./ContactMe.css";
import { RestClient } from "../../../util/RestClient";
import { ProdConfiguration } from "../../../util/restConstants";
import { RootState } from "../../../redux/reducers/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap, faPhone, faRoute, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import client1 from "../../../img/client-01.png"
import client2 from "../../../img/client-02.png"
export default function ContactMe() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  let restClient: RestClient = new RestClient();
  let authState: any = useSelector((state: RootState) => state.authToken);


  const [fullName, setfullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [phoneNumber, setphoneNumber] = useState('')
  const formHandler = async (e: any) => {
    e.preventDefault();
    const payload: any = {
      firstname: fullName,
      mobile: phoneNumber,
      email: Email,

      message: Message,
    };
    let response: any = await restClient.postCall(
      ProdConfiguration.PROD_COURSE_URL + "/public/contactus",
      JSON.stringify(payload)
      //authState.authToken
    );
    if (response.message === "success") {
      alert("We will contact you shortly");
    }
  };
  return (
    <div>
      <div className="contact-gallery">

        <div className="contact-text">
          <h1 >Contact Us</h1>
          <span>feel free to send us a message</span>

        </div>
      </div>
      {/* <div className="contact-details">
        <div className="contact-details-box">
          <FontAwesomeIcon icon={faPhone} className="faicon-style" />
          <h4>Phone</h4>

          <p>+1 (646) 727 9169</p>
        </div>
        <div className="contact-details-box">
          <FontAwesomeIcon icon={faEnvelope} className="faicon-style" />
          <h4>Email</h4>

          <p>sales@expert-works.com</p>
        </div>
        <div className="contact-details-box">
          <FontAwesomeIcon icon={faMap} className="faicon-style" />

          <h4>Location</h4>
          <p>1464 E Whitestone Blvd<br />Suite 1803-E, Cedar Park, TX 78613.</p>
          <a href="#">View on Google Maps</a>
        </div>

      </div> */}
      <div className="home-container6">
        <div className="section-heading">
          <h2>Send us a <em>Message</em></h2>

        </div>
        <div className="home-request-form">
          <form id="contact" onSubmit={formHandler}>

            <div className="home-form">
              <div className="form-inputs">

                <input name="name" type="text" className="form-control" id="name" placeholder="Full Name"
                  value={fullName} onChange={(e) => setfullName(e.target.value)} />


                <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address"
                  value={Email} onChange={(e) => setEmail(e.target.value)} />


                <input name="subject" type="text" className="form-control" id="subject" placeholder="Mobile"
                  value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />

              </div>
              <div className="form-textarea">

                <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your Message"
                  value={Message} onChange={(e) => setMessage(e.target.value)}></textarea>

              </div>
              <div>
                <fieldset>
                  <button type="submit" id="form-submit" className="border-button3">Send Message</button>
                </fieldset>

              </div>
            </div>
          </form>

        </div>
      </div>

      <div className="home-image-container">
        <div>
          <img src={client1} />
        </div>
        <div>
          <img src={client2} />
        </div>
      </div>
    </div>
  );
}
