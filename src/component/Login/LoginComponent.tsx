import React,{useState} from "react";
import "../../assets/LoginMain.css";
import "../../assets/LoginUtil.css";
import "./Login.css"
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { RestClient } from "../../util/RestClient";
import {
  LoginResponse,
  BaseResponse,
  ProdConfiguration,
  SuccessCode,
} from "../../util/restConstants";
import Navbar from "../Header/Navbar/Navbar";
import { withRouter } from "react-router-dom";

export const LoginComponent:React.FC = (props: any) => {
  const [loginerror,setLoginerror]=useState('')
  const dispatch = useDispatch();

  const restClient = new RestClient();

  const mapDispatchAuthResponse = (authResponse: any) => {
    dispatch({ type: "TOKEN", payload: authResponse });
  };
  const mapDispatchPage = (page: string) => {
    dispatch({ type: "PAGE", payload: page });
  };
  const loginCall = () => {

    const userName = (document.getElementById("username") as HTMLInputElement)
      .value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    console.log("Username : " + userName);
    console.log("password: " + password);
    const authToken = btoa('client:secret');
    interface formdata1{
      username:string,
      password:string

    }
    let formData:any = new FormData();
    formData.append('username', userName);
    formData.append('password', password);
    const loginResponse: any = restClient.postCall(
      ProdConfiguration.PROD_OAUTH_URL+"/oauth/token?scope=write&grant_type=password",
      formData, authToken, "Basic"
    );
    loginResponse.then((responseData: any) => {
      if (
        responseData.access_token
        //&&
        //SuccessCode.SUCCESS === responseData.responseCode
      ) {
        console.log(responseData.access_token);
        localStorage.setItem("access_token",responseData.access_token);
        localStorage.setItem("refresh_token",responseData.refresh_token);
      localStorage.setItem('user', JSON.stringify(responseData))
        mapDispatchAuthResponse(responseData as LoginResponse);
        console.log("set the auth state");
        // mapDispatchPage("");
        props.history.push(`/courses`);
      } else {
        setLoginerror('Invalid Credentials, Login Failed')
      }
    });
  };

  const onKeyUpHandler = (event: React.KeyboardEvent) => {
    if (event.key == "Enter") {
      loginCall();
    }
  };
  return (
    <div className="limiter no-scroll">
      <Navbar />
      <div className="container-login100" onKeyUp={onKeyUpHandler}>
        <div className="wrap-login100">
          <div className="login100-form-title">
            <span className="login100-form-title-1">Sign In</span>
          </div>

          <div className="login100-form validate-form">
            <div style={{fontSize:'14px',color:'red',margin:'10px 40px'}}>{loginerror}</div>
            <div
              className="wrap-input100 validate-input m-b-26"
              data-validate="Username is required"
            >
              <span className="label-input100">Username</span>
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Enter username"
                id="username"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-18"
              data-validate="Password is required"
            >
              <span className="label-input100">Password</span>
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Enter password"
                id="password"
              />
              <span className="focus-input100"></span>
            </div>

            <div className="flex-sb-m w-full p-b-30">
              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Remember me
                </label>
              </div>

              <div>
                <Link to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
            </div>
            {<div className="errorDiv"></div>}

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" onClick={loginCall}>
                Login
              </button>
            </div><br/>
            <div>
              <div className="divider-break">

              <h5>New to Expert Works?</h5>
              </div>


               <Link to="/signup"><button className="create-new-acc">create New Account</button></Link>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default withRouter(LoginComponent);
