import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers/index";
import expertLogo from "../../../img/logo.png";
import { Link, withRouter } from "react-router-dom";
import "./Logo.css";
function Logo() {
  //const [defaultLogo, setdefaultLogo] = useState("../../../img/logo.png");
  let authState: any = useSelector((state: RootState) => state.authToken);

  return (
    <div className="col-xs-1">
      <div id="fh5co-logo">
        <Link to="/">
          <div className="es-logo">
            {authState && authState.logo ? (
              <img src={authState.logo} />
            ) : (
              <img src={expertLogo} />
            )}
            {/* <img src="https://d3s24np0er9fug.cloudfront.net/partner/alameda.png" /> */}
          </div>

          <span></span>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Logo);
