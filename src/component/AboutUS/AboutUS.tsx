import React,{useEffect} from "react";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeadingTile from "../HeadingTile/HeadingTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Values from "../../img/values.png"
import "./AboutUS.css";
import ABoutusimg from "../../img/about_us.png"

// FIXME checkout https://mui.com/components/use-media-query/#migrating-from-withwidth
const withWidth = () => (WrappedComponent:any) => (props:any) => <WrappedComponent {...props} width="xs" />;

export default function AboutUS() {
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return (
    <div className="no-scroll" >
      <Navbar />
      <div className="aboutus-style">
        <div>
          <div className="aboutus-bck-image ">
            <h1 className="abouts-align-left aboutus-font-size">About Us</h1>
            <div className="abouts-align-left aboutus-desc">We focus on creating a wonderful and fruitful <br />
              experience with the best technologies in the industry
            </div>
          </div>

        </div>


        <div className="aboutus-bck">
          <div className="aboutus-left-content abouts-align-left">
            <span className="aboutus-bck-heading">our solid background on LMS</span>
            <h2 className="">Get to know about <em className="our-company">our company</em></h2>
            <p >Expert-Works is a leading edu-tech platform, providing quality and industry standard training in the on-demand technologies to Bench Sales companies and tech enthusiasts all over the world. We are known for providing the flexibility of self-paced learning and real-time content, allowing everyone to learn any technology conveniently.
              <br /><br />Expert-Works draws a global network of consultants with a large panel of experts having deep industry experience. We focus on nurturing the best talent to help your organization grow. Through the development of long-term relationships with clients, Expert-Works is able to match corporate goals. Expert-Works enables its clients to focus on their core competencies and increase their productivity. We are dedicated to serve our customers and the community with the highest levels of service, knowledge, professionalism, honesty, and integrity.
            </p>

          </div>
          <div className="right-content">
            <img src={ABoutusimg} alt="aboutus-image" />
          </div>
        </div>


        <div className="aboutus-values">

          <div className="values-left">
            <div className="abouts-align-left">Our Statements</div>
            <h2 className="abouts-align-left">Core <em className="commitements">Committments</em></h2>

            <div className="values-style">
              <div className="each-value">
                <h3>OUR MISSION</h3>
                <p className="aboutus-justify">Enabling clients to transform their employee technologically, upskill to make more productive, successful and creating long-term relationship. </p>

              </div>
              <div className="each-value">
                <h3>OUR VISION</h3>
                <p className="aboutus-justify">Our vision is to be one of top most leading cloud-based LMS providers. We strive to create quality training and impact in growth of the Company. </p>

              </div>
              <div className="each-value">
                <h3>OUR VALUES</h3>
                <p className="aboutus-justify">Doing business ethically, legally and with honesty is the foundation of Expert Works. We also value innovative ideas and approaches to continually improve our business processes. </p>

              </div>

            </div>
          </div>
          <div className="values-img">
            <img src={Values} alt="values" />
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
}
