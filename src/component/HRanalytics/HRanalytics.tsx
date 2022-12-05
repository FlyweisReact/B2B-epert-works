import React from "react";
import SubHeader from '../Header/SubHeader/SubHeader'
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import HRImages from "./HRImages";
import "./HRanalytics.css";
export const HRanalytics = () => {
  return (
    <div>
      <SubHeader />
      <Navbar />
      <section id="inner-headline">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="pageTitle">HR Analytics</h2>
            </div>
          </div>
        </div>
      </section>
      <HRImages />
      <Footer />
    </div>
  );
}
