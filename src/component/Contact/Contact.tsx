import React from "react";
import NavBar from "../Header/Navbar/Navbar";
import ContactMe from "./ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import "./Contact.css";
import "../../assets/style.css";
export default function Contact() {
  return (
    <div className="no-scroll">
      <NavBar />


      <ContactMe />
      <Footer />
    </div>
  );
}
