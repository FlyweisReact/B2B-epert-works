import React, { useState } from 'react'
import Navbar from '../Header/Navbar/Navbar'
import { Link } from 'react-router-dom'
import "./ExpertBusiness.css"
import BusinessImg from "../../img/business.png"
import upskillImg from "../../img/upskill.png"
import Footer from '../Footer/Footer'
import { RestClient } from "../../util/RestClient";
import { ProdConfiguration } from "../../util/restConstants";
import upgradeImg from "../../img/upgrade.png"
import experVideoThumbnail from "../../img/homepage-video2.png"
export default function ExpertBusiness() {
    let restClient: RestClient = new RestClient();
    const [fullName, setfullName] = useState("");
    const [Email, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [Message, setMessage] = useState("");
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
        <div className="no-scroll ">
            <Navbar />
            <div className="expert-business">
                <div className="expert-business-intro">
                    <div className="expert-business-desc">
                        <h1 className="expert-bus-text-left">With Expert Works, Learning any <br />technology becomes easy!</h1><br />
                        <p className="expert-bus-text-left"><span className="style3">&#10004;</span> Unlimited access to our top courses.</p>
                        <p className="expert-bus-text-left"><span className="style3">&#10004;</span> Taught by global instructors.</p >
                        <p className="expert-bus-text-left"><span className="style3">&#10004;</span> Mentorship.</p >
                    </div>
                    <div >
                        <img src={BusinessImg} className="expert-bus-size" alt="business icon"/>
                    </div>
                </div>
                <div className="expert-bus-more-info">
                    <div className="left-content">
                        <span>Upskill Now!</span>
                        <h2>Cut down your training expenditure by <em className="near-80">nearly 80%</em></h2>
                        <p>Expert-Works offers you a platform where you can get your consultants trained easily via subscription plans.
                            <br /><br />The best part is, you get trained by the industry experts with real-time content, accompanied by loads of mini-projects!</p>
                        {/* <Link to="/" className="filled-button">Subscribe</Link> */}
                    </div>
                    <video width="560" height="315" className="right-content" controls preload="metadata" poster= {experVideoThumbnail}>
                    <source src="https://d3s24np0er9fug.cloudfront.net/phase1/public/WEBSITE%20PORTAL%20ANIMATION%20FINAL.mp4" type="video/mp4"></source>
                </video>

                {/* <iframe src="https://d3s24np0er9fug.cloudfront.net/phase1/public/WEBSITE%20PORTAL%20ANIMATION%20FINAL.mp4" className="right-frame" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}

                </div>
                <div className="home-container6">
                <div className="section-heading">
                    <h2>Request a <em>Demo</em></h2>
                    <span>GET IN TOUCH </span>
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
                <div className="expert-bus-fun-facts">
                    <div className="left-content">
                        <span>Upgrade your skills to grow your business</span>
                        <h2>Upskill your organization with<em className="expert-works-blue"> Expert Works</em></h2>
                        <p>With self-paced learning, your consultants get enough time to practice and learn every concept with complete focus.

                            <br /><br />Upgrade your skills to grow your business.!</p>
                        {/* <Link to="/" className="filled-button">Subscribe</Link> */}
                    </div>
                    <div className="right-content">

                        <div className="count-area-content">
                            <div className="count-digit">645</div>
                            <div className="count-title">Work Hours</div>
                        </div>
                        <div className="count-area-content">
                            <div className="count-digit">656</div>
                            <div className="count-title">Q & A</div>
                        </div>
                        <div className="count-area-content">
                            <div className="count-digit">59</div>
                            <div className="count-title">Projects</div>
                        </div>
                        <div className="count-area-content">
                            <div className="count-digit">1289</div>
                            <div className="count-title">Great Reviews</div>
                        </div>

                    </div>

                </div>
                <div className="expert-business-intro expert-more-info">
                <div >
                        <img src={upskillImg} className="expert-bus-size" />
                    </div>
                    <div className="expert-business-desc">
                    <div>UPSKILL NOW!</div>
                        <h1 className="expert-bus-text-left">Upskill, support, guide, <br />and develop a skilled team</h1><br />
                        <p className="expert-bus-text-left"><span className="style3">&#10004;</span> Upskill your team members with the latest technologies</p>
                        <p className="expert-bus-text-left"><span className="style3">&#10004;</span> Support them throughout their learning journey</p >
                        <p className="expert-bus-text-left"><span className="style3">&#10004;</span> Receive guidance from the top industry experts</p >
                    </div>

                </div>
                <div className="expert-business-intro">
                    <div className="expert-business-desc">
                    <div>UPGRADE NOW!</div>
                        <h1 className="expert-bus-text-left">Upgrade your consultants<br />with <em className="expert-works-blue">Expert works</em> </h1><br />
                        <p className="expert-bus-text-left"><span className="style3">&#10004;</span> Train your consultants on the top on-demand technologies</p>
                        <p className="expert-bus-text-left"><span className="style3">&#10004;</span> Improve your skills with your consistent practice and mini-projects</p >
                        <p className="expert-bus-text-left"><span className="style3">&#10004;</span> Increase your chance of getting hired by the Fortune 500 companies</p >
                        <p className="expert-bus-text-left"><span className="style3">&#10004;</span> Use technology to upgrade your business</p >
                    </div>
                    <div >
                        <img src={upgradeImg} className="expert-bus-size" />
                    </div>
                </div>

                <div className="home-container5">
                    <div>
                        <h2>What they say <em>about us</em></h2>
                        <span className="span-black">testimonials from our greatest clients</span>

                    </div>

                    <div
                        className="inner-container"
                    >
                        <div >
                            <div className="cont5-box">
                                <h4>Victor</h4>
                                <span></span>
                                <p>"I had an amazing experience with Expert-Works. I purchased their Salesforce admin course and completed the entire course in a couple of months. The video quality is good and they respond quickly to emails, so I found it very helpful and convenient."</p>
                            </div>

                        </div>
                        <div

                        >
                            <div className="cont5-box">
                                <h4>John</h4>
                                <span></span>
                                <p>"I purchased the Machine Learning course and enjoyed doing the mini-projects assigned. Other platforms were charging extra for the mini-projects but with Expert-Works, I received a lot of bonuses and a course completion certificate as well."</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <Footer/>
        </div>

    )
}
