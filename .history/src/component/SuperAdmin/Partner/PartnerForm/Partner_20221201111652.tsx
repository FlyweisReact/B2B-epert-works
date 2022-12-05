/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faFileUpload,
} from "@fortawesome/free-solid-svg-icons";
import { RestClient } from "../../../../util/RestClient";
import { ProdConfiguration } from "../../../../util/restConstants";
import { RootState } from "../../../../redux/reducers/index";
import * as actions from "../../../../redux/actions";
import { useSelector } from "react-redux";
import "./Partner.css";
export default function Partner() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const dispatch = useDispatch();
  let restClient: RestClient = new RestClient();
  let authState: any = useSelector((state: RootState) => state.authToken);
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      address.length === 0 ||
      phoneNumber.length === 0
    )
      alert("No Field can be empty");
    else if (phoneNumber.length < 10) alert("Please enter valid phonenumber");
    else {
      const payload: any = {
        name: name,
        email: email,
        address: address,
        mobile: phoneNumber,
      };
      let response: any = await restClient.postCall(
        ProdConfiguration.PROD_COURSE_URL + "/partner",
        JSON.stringify(payload),
        authState.access_token
      );
      if (response.message === "success") {
        alert("partner added");
        dispatch(actions.fetchPartners(authState));
      }
    }
  };


  function Show () {
    const target = document.getElementById('hiddenInput')
    target?.click()
  }
  return (
    <div>
      <div className="user-container">
        <div className="user-content">
          <div className="user-form">
            <h2 className="form-title">Add Partner</h2>
            <form
              method="POST"
              className="register-form"
              id="register-form"
              onSubmit={submitHandler}
            >
              <div className="user-form-group">
                <label htmlFor="name">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ margin: "20px 0px" }}
                  />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Partner Name"
                  className="user-input"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="user-form-group">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ margin: "20px 0px" }}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Partner Email"
                  className="user-input"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="user-form-group">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ margin: "20px 0px" }}
                />
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Partner phone Number"
                  className="user-input"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                />
              </div>
              <div className="user-form-group">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ margin: "20px 0px" }}
                />
                <textarea
                  name="address"
                  id="address"
                  placeholder="Partner address"
                  className="user-input"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>

              <div className="user-form-group">
                <FontAwesomeIcon icon={faFileUpload} />
                <button className="UploadLoagoBtn" type="button">
                  {" "}
                  Upload Logo
                </button>
                <input type='file' style={{display : 'none' } } id='hiddenInput' />
              </div>

              <div className="user-form-button">
                <input
                  type="submit"
                  name="user-add"
                  id="signup"
                  className="add-user"
                  value="Create Partner"
                />
              </div>
            </form>
          </div>
          <div className="signup-image">
            {/* <figure><img src={require("../../../../img/user-entitle.jpg")} alt="create partner" /></figure> */}
          </div>
        </div>
      </div>
    </div>
  );
}
