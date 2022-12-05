

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import service1 from "../../../img/service_01.png"
import service2 from "../../../img/service_02.png"
import service3 from "../../../img/service_03.png"
import MImage from "../../../img/m-image.png"
import Review1 from "../../../img/works/p.png"
import Review2 from "../../../img/works/v.png"
import MoreInfo from "../../../img/more-info.png"
import client1 from "../../../img/client-01.png"
import client2 from "../../../img/client-02.png"
import { RestClient } from "../../../util/RestClient";
import { ProdConfiguration } from "../../../util/restConstants";
import { RootState } from "../../../redux/reducers/index";
import homeVideoThumbnail from "../../../img/homepage-video1.png"
import "./HomeComponents.css"
export default function HomeComponents() {
    let restClient: RestClient = new RestClient();
    const [fullName, setfullName] = useState("");
    const [Email, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [Message, setMessage] = useState("");
    const formHandler = async (e: any) => {

        e.preventDefault();
        const payload: any = {
            firstname: fullName,
            phoneNumber: phoneNumber,
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
            <div className="home-image-space">
                <div className="section-heading">
                    <h2>Learning at <em>Expert Works</em></h2>
                    <span>The training is provided by the best industry experts, who are always available to clarify your doubts.</span>
                </div>
                <div className="home-images">
                    <div>
                        <img src={service1} alt="" className="image-prop" />
                        <div className="down-content">
                            <h4 >Learn at your own pace </h4>
                            <p >Self-paced and Flexible learning that fits your needs. Subscribe and learn at your own terms </p>

                        </div>

                    </div>
                    <div>
                        <img src={service2} alt="" className="image-prop" />
                        <div className="down-content"> <h4 >Hassle free training </h4>
                            <p >Forget the hassles of getting your consultants trained individually and worry less about paying more! </p>
                        </div>


                    </div>
                    <div>
                        <img src={service3} alt="" className="image-prop" />

                        <div className="down-content"> <h4 >Get certified</h4>
                            <p >Showcase your skills on your resume and LinkedIn profile. Get a verified certificate on complete of the course. </p>

                        </div>

                    </div>

                </div>
            </div>

            <div className='ExpertImages'>
                <h1 style={{textAlign : 'center'}}>THE TRAINING IS PROVIDED BY THE BEST INDUSTRY EXPERTS, WHO ARE ALWAYS AVAILABLE TO CLARIFY YOUR DOUBTS.</h1>

            </div>

                <div className="fun-facts">
                    <div className="home-container2">

                        <div className="left-content">
                            <span className="home-justify">Why Expert Works</span>
                            <h2 className="home-justify">Increase your chances of getting hired by <em>Fortune 500 companies</em></h2>
                            <p className="home-justify">Expert Works is the ideal platform to learn any on-demand technology without worrying about time and money.
                                <br /><br />With self-paced learning, you can learn things on your terms. Try  Expert-works today and experience the difference yourself!
                            </p>
                            {/* <Link to="/signup" className="filled-button">Subscribe Now</Link> */}
                        </div>

                        <div className="right-content">
                            <img src={MImage} alt="" />
                        </div>
                    </div>
                </div>

            <div className="home-container3">

                <div className="left-content">
                    <img src={MoreInfo} alt="MoreInfo" />

                </div>

                    <div className="right-content">
                        <span>Who we are</span>
                        <h2>Get to know about <em className = "our-company">our company</em></h2>
                        <p>Expert-Works draws a global network of consultants with the large panel of experts having deep industry experience and nurture the best talent to help your organization grow. <br />
                            <br />We provide assistance in finding new and experienced talents in various technologies. Subscribe to any of our subscription models to get access to our portal and achieve the flexibility of training as many consultants as you want.  </p>
                        <Link to="/about-us" className="button1">Read More</Link>
                    </div>

            </div>


            <div className="home-container4">
                <div className="left-content">
                    <span className="span-style">Why Expert Works</span>
                    <h2>Upskill your data skill for<em className= "career-growth"> career growth</em></h2>
                    <p >Expert Works is a leading cloud based, e-learning platform! We provide in-demand, self paced tech courses with real time content. Now, it&rsquo;s easy to get trained and learn everything by yourself, at your own pace!
                        <br /><br />Subscribe to any of our subscription models to get access to our portal and achieve the flexibility of training.</p>
                        <Link to="/about-us" className="button2">Read More</Link>


                </div>
                <div  >
                <video className="right-frame" controls preload="metadata" poster={homeVideoThumbnail}>
                    <source src="https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4" type="video/mp4"></source>
                </video>

                    {/* <iframe src="https://d3s24np0er9fug.cloudfront.net/phase1/public/LMS%20New.mp4" className="right-frame" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}

                </div>

            </div>

            <div className="home-container5">
                <div>
                    <h2>What they say <em className="home-about-us">about us</em></h2>
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
                        <div className="smallimage">
                            <img src={Review1} alt="Review1" />
                        </div>
                    </div>
                    <div

                    >
                        <div className="cont5-box">
                            <h4>John</h4>
                            <span></span>
                            <p>"I purchased the Machine Learning course and enjoyed doing the mini-projects assigned. Other platforms were charging extra for the mini-projects but with Expert-Works, I received a lot of bonuses and a course completion certificate as well."</p>
                        </div>
                        <div className="smallimage">
                            <img src={Review2} alt="Review1" />
                        </div>
                    </div>

                </div>

            </div>


            {/* <div className="home-container6">
                <div className="section-heading">
                    <h2>Request a <em>call back</em></h2>
                    <span>To assist you better to choose the right course </span>
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
            </div> */}

            <div className="home-image-container">
                <div>
                    <img src={client1} />
                </div>
                <div>
                    <img src={client2} />
                </div>

            </div>
        </div>
    )
}
