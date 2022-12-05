import React from "react";
import pricing from "../../../img/pricing.png";
import { ContactMe, ProdConfiguration } from "../../../util/restConstants";
import { RestClient } from "../../../util/RestClient";
import "./ContactMe.css";
const ContactMePage = () => {
  const restClient = new RestClient();

  const submitContactMe = async(e: any) => {
    e.preventDefault();
    const firstname = (document.getElementById("firstname") as HTMLInputElement)
      .value;
    const lastname = (document.getElementById("lastname") as HTMLInputElement)
      .value;
    const mobile = (document.getElementById("mobile") as HTMLInputElement)
      .value;
    const company = (document.getElementById("company") as HTMLInputElement)
      .value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const course = (document.getElementById("course") as HTMLInputElement)
      .value;
    const message = (document.getElementById("message") as HTMLInputElement)
      .value;
    const contactMe: ContactMe = {
      firstname: firstname,
      lastname: lastname,
      mobile: mobile,
      company: company,
      email: email,
      course: course,
      message: message,
    };
    const contactMeResponse: any =await restClient.postCall(
      ProdConfiguration.PROD_COURSE_URL + "/public/contactus",
      JSON.stringify(contactMe)
    );
    if (contactMeResponse.message === "success") {
      alert("We will contact you shortly");
    }
  };
  return (
    <div>
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <form name="sentMessage" id="contactForm">
                <h3 className="contact-name">Contact Me</h3>
                <div className="control-group">
                  <div className="controls">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      id="firstname"
                      required
                      data-validation-required-message="Please enter your name"
                    />

                    <input
                      type="text"
                      className="form-control"
                      placeholder="last Name"
                      id="lastname"
                      required
                      data-validation-required-message="Please enter your name"
                    />

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      id="mobile"
                      required
                      data-validation-required-message="Please enter your name"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      id="company"
                      required
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Work Email"
                      id="email"
                      required
                      data-validation-required-message="Please enter your email"
                    />

                    <input
                      type="Pick your course"
                      className="form-control"
                      placeholder="Pick your course"
                      id="course"
                      required
                      data-validation-required-message="Please enter your email"
                    />
                  </div>
                </div>

                <div className="control-group">
                  <div className="controls">
                    <textarea
                      rows={5}
                      cols={100}
                      className="form-control"
                      placeholder="Message"
                      id="message"
                      required
                      data-validation-required-message="Please enter your message"
                      minLength={5}
                      data-validation-minlength-message="Min 5 characters"
                      maxLength={999}
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>
                </div>
                <div id="success"> </div>
                <button
                  type="submit"
                  className="btn btn-primary pull-right"
                  onClick={submitContactMe}
                >
                  Get in touch
                </button>
                <br />
              </form>
            </div>
            <br />
            <div className="demo-text">
              <h2>Get a free demo</h2>
              <p>
                The Expert way of learning gives flexibility to learn the course
                at your own pace and convenience. Our goal is to give you the
                best learning experience with greater efficiency...
              </p>
              <img src={pricing} width="552" height="444" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMePage;
