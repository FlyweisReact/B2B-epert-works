import React from "react";
import NavBar from "../Header/Navbar/Navbar";
import ContactMe from "./ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import "./Pricing.css";
import "../../assets/style.css";
export default function Pricing() {
  return (
    <div>
      <NavBar />
      <section id="inner-headline">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="pageTitle">Pricing</h2>
            </div>
          </div>
        </div>
      </section>

      <ContactMe />
      <Footer />
    </div>
  );
}
