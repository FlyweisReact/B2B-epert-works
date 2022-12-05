import React, { useState ,useEffect} from 'react'
import Navbar from '../Header/Navbar/Navbar';
import { RestClient } from "../../util/RestClient";
import { ProdConfiguration } from "../../util/restConstants";
import {Link} from 'react-router-dom'

import "./signup.css"
export default function Signup() {
    const [displayname, setdisplayname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
  let restClient: RestClient = new RestClient();
  useEffect(()=>{
      window.scrollTo(0,0)
  },[])
    const formHandler=async(e:any)=>{
        e.preventDefault();
        const payload={
            "email": email,
            "name": displayname,
            "password": password
        }
        if(email===''||displayname===''||password===''||confirmPassword==='')
        alert('No field can be empty')
        else if(password!==confirmPassword)
        alert('passwords should be equal')

        else{
            let response: any = await restClient.postCall(
                ProdConfiguration.PROD_COURSE_URL + "/public/signup",
                JSON.stringify(payload)
                //authState.authToken
              );
              if (response.message === "success") {
                alert("A confirmation mail has been sent to your registreed email");
              }
              else{
                  alert('something went wrong')
              }
        }


    }
    return (
        <div className="no-scroll">
            <div><Navbar /></div>
            <div className="signup-background">
            <div className="signup-form">
                <form onSubmit={formHandler}>
                    <h5>Create your account for free</h5>
                    <div className="signup-input">
                        <input type="text" placeholder="Your display name" value={displayname} onChange={(e)=>setdisplayname(e.target.value)}/>
                    </div>
                    <div className="signup-input">
                        <input type="email" placeholder="Your email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div className="signup-input">
                        <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                    <div className="signup-input">
                        <input type="password" placeholder="Repeat Password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)}/>
                    </div>
                    <div className="signup-button">
                        <input type="submit" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" name="submit" value="Signup Now" />
                    </div>
                    <div className="or-container">
                        <div className="line-separator"></div>
                        <div className="or-label">or</div>
                        <div className="line-separator"></div>
                    </div>
                    <div >

                            {/* <a  href="#">
                                <button disabled className="google-button"><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google"/> Signup Using Google</button></a>  */}

                    </div>
                    <p className="text-inverse text-center add-mar">Already have an account? <Link to="/login">Login</Link></p>

                </form>
        </div>
        </div>
        </div >

    )
}
