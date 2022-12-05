import React from "react";
import TopPane from "./TopPane/TopPane";
import NavBar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LMSMain from "../LMSMain/LMSMain";
import { RootState } from "../../redux/reducers/index";
import LMSVideos from "../LMSVideos/LMSVideos";
import LoginComponent from "../Login/LoginComponent";
export const Header = (props: any) => {
  const pageState = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();
  const clickToggle = (event: any) => {
    dispatch({ type: "TOGGLE_MENU", payload: "" });
  };

  useEffect(() => {
    
    // Update the document title using the browser API
    document.title = `Expert-Works`;
    alert('header')
    console.log('header')
  },[]);
  return (
    <div className="rootTag" onClick={clickToggle}>
      <nav className="fh5co-nav" role="navigation">
        <TopPane />
        <div className="top-menu">
          <div className="container">
            <div className="row">
              {pageState != "AWS" ? <Logo /> : ""}
              {pageState != "Login" && pageState != "AWS" ? <NavBar /> : ""}
            </div>
          </div>
        </div>
      </nav>

      {pageState == "LMS" ? <LMSMain></LMSMain> : ""}
      {pageState == "AWS" ? <LMSVideos></LMSVideos> : ""}
      {pageState == "Login" ? <LoginComponent></LoginComponent> : ""}
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
