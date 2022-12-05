/** @format */

import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar/Navbar";

import img from "../../img";
import img1 from "../../../img/Event/WhatsApp Image 2022-11-08 at 9.36.18 PM.jpeg";
import img2 from "../../../img/Event/WhatsApp Image 2022-11-08 at 9.36.19 PM (1).jpeg";
import img3 from "../../../img/Event/WhatsApp Image 2022-11-08 at 9.36.19 PM.jpeg";
import img4 from "../../../img/Event/WhatsApp Image 2022-11-08 at 9.36.20 PM.jpeg";

const Images = [
  {
    image: img,
  },
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
];

const Events = () => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <Navbar />

        <div className="GalleryImages">
          <h4 style={{ padding: "10px" }}>
            We take great pride in our partnership with IT Serve Synergy 2022.
            <br />
            Our tech expo experience was more encouraging than ever.
          </h4>
          <section
            className="main-card--container"
            style={{ color: "black", marginBottom: "10%", marginTop: "5%" }}
          >
            {Images.map((i) => {
              return (
                <>
                  <div className="card-container">
                    <div className="card">
                      <div className="card-body">
                        <img
                          src={i.image}
                          style={{ width: "100%", height: "400px" }}
                        />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Events;
