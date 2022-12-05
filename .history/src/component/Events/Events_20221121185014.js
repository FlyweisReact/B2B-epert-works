/** @format */

import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar/Navbar";

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
