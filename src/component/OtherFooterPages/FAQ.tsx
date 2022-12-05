import React,{useEffect} from 'react'
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/Footer'
import "./styles.css"
export default function FAQ() {
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    return (
        <div className="no-scroll">
            <div>
                <Navbar />
            </div>
            <div className="testimonal-bg">
                <div className="section-heading">
                 <h2>   <em>
                        Frequently Asked Questions
                    </em></h2>
                </div>

                <div className="questions">
                    <h6 className="faq-align-left">1. Can I renew my subscription plan once the duration is over?</h6>
                    <p className="faq-align-left">A: Yes, you can renew your subscription by paying the renewal fee.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Is the fee same for the renewal of any subscription plan?</h6>
                    <p className="faq-align-left">A: No, it varies from course to course. But you may get a discount.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Is this platform only for the Bench Sales companies?</h6>
                    <p className="faq-align-left">A: No. Anyone can register and get access to our portal.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I choose this platform only for one month?</h6>
                    <p className="faq-align-left">A: Yes</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I use this platform without submitting my name and email id?</h6>
                    <p className="faq-align-left">A: No, you need to register using your name and email id.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I change my subscription plan if I want to go for another course or plan?</h6>
                    <p className="faq-align-left">A: Yes</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I pay the subscription fee in installments?</h6>
                    <p className="faq-align-left">A: No</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Will I get access to all the courses with one subscription plan?</h6>
                    <p className="faq-align-left">A: Yes</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I get in touch with the trainer to get my doubts clarified?</h6>
                    <p className="faq-align-left">A: No</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Will I receive a refund if I decide to cancel my subscription plan?</h6>
                    <p className="faq-align-left">A: No</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">What is the least duration of all the subscription plans available?</h6>
                    <p className="faq-align-left">A: 1 month</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Will I get a mini-project after the course completion?</h6>
                    <p className="faq-align-left">A: Yes. You will get a mini-project after you complete each level of the chosen course.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Are the courses accompanied with a course completion certificate?</h6>
                    <p className="faq-align-left">A: Yes</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Whom should I contact if I come across any technical issue on the website?</h6>
                    <p className="faq-align-left">A: Please email us immediately</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">What should I do if I forget my login credentials?</h6>
                    <p className="faq-align-left">A: You can reset and change your password. If you face any issue, please email us.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I go for a free trial before purchasing a plan?</h6>
                    <p className="faq-align-left">A: Yes, we have a free 1-month trial offer for our new customers.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Will we receive assignments for every course?</h6>
                    <p className="faq-align-left">A: Yes</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">How many courses do you offer?</h6>
                    <p className="faq-align-left">A: 15 on-demand technologies.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Which subscription plan is the best for beginners?</h6>
                    <p className="faq-align-left">A: The basic plan</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I enroll even if I don’t know any basic knowledge?</h6>
                    <p className="faq-align-left">A: Yes</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Is there any minimum eligibility for enrolling?</h6>
                    <p className="faq-align-left">A: No</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I get lifetime access to the portal?</h6>
                    <p className="faq-align-left">A: No</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I watch the videos from my android phone?</h6>
                    <p className="faq-align-left">A: Yes, you can login from any device.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I download the videos from the portal to my PC or laptop?</h6>
                    <p className="faq-align-left">A: No. This is against our policy and you may get penalized if you copy any part of our content.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Is a laptop or PC necessary for watching the videos?</h6>
                    <p className="faq-align-left">A: No</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I share the videos from the portal with my friends?</h6>
                    <p className="faq-align-left">A: No</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">How many people get access to the portal with one subscription?</h6>
                    <p className="faq-align-left">A: It depends on the type of subscription plan you choose.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Do you offer live chat support?</h6>
                    <p className="faq-align-left">A: Yes</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">How do I unsubscribe from any of your mailing lists?</h6>
                    <p className="faq-align-left">A: Please send us an email with the request.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Do you accept international credit cards?</h6>
                    <p className="faq-align-left">A: Yes</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">What forms of payments do you accept?</h6>
                    <p className="faq-align-left">A: Only online payment. The options are available below each course on our website.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I pay with multiple Visa or Mastercard?</h6>
                    <p className="faq-align-left">A: Yes</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">What if I change my mind and want to drop from the chosen subscription plan?</h6>
                    <p className="faq-align-left">A: You can withdraw any time but you won’t receive any refund.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Is it important to complete the assignments and mini-projects?</h6>
                    <p className="faq-align-left">A: No. But you need practice if you seriously want to excel in the chosen technology.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">What should I do if I have questions about an assignment?</h6>
                    <p className="faq-align-left">A: You can email us and get your doubts clarified.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Are the classes live or recorded?</h6>
                    <p className="faq-align-left">A: All the classes are pre-recorded.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I take more than 1 course at a time?</h6>
                    <p className="faq-align-left">A: Yes</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">What should I do if I want to start the course late?</h6>
                    <p className="faq-align-left">A: You can start the course any time based on your convenience. This is a self-paced learning platform, so you can prepare your own schedule.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">How should I register?</h6>
                    <p className="faq-align-left">A: Visit our website, click on the menu and choose the option “register.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Are there any terms and conditions?</h6>
                    <p className="faq-align-left">A: Yes. Please visit our ‘terms and conditions’ page on our website.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Who can benefit from this website?</h6>
                    <p className="faq-align-left">A: Anyone who’s seriously interested in learning new technologies and developing their skills.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Where can I get the course information and overview?</h6>
                    <p className="faq-align-left">A: Click on the menu and choose the ‘course overview’ option.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">How much time is required to complete one course?</h6>
                    <p className="faq-align-left">A: It depends on the candidate’s interest, grasping power, and practice.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">What if I’m unable to complete all the courses during the duration of my subscription plan?</h6>
                    <p className="faq-align-left">A: You can renew your subscription plan.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">How can I contact the course trainer?</h6>
                    <p className="faq-align-left">A: No, you can’t contact the course trainer directly. You need to email us with your queries and we will get back to you.</p>
                    {/* <br /> */}

                    <h6 className="faq-align-left">Can I become an expert after completing the chosen course?</h6>
                    <p className="faq-align-left">A: Yes, with consistent practice, you can become an expert.</p>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
