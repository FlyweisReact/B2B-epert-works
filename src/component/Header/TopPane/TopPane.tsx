import React from "react";

export const TopPane = (props: any) => {
  return (
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-right">
            <p className="num">Call: +1 (646) 727 9169</p>
            <ul className="fh5co-social">
              <li>
                <a
                  href="https://www.facebook.com/Expertworks2021"
                  target="_blank"
                >
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/expertworks2020/"
                  target="_blank"
                >
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/expert-works/?viewAsMember=true"
                  target="_blank"
                >
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPane;
