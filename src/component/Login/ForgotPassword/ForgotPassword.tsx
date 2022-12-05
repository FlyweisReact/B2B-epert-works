import React, { useState } from 'react'
import "./ForgotPasswords.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock, faEnvelopeSquare, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { RestClient } from "../../../util/RestClient"
import { ProdConfiguration } from "../../../util/restConstants";
import { RootState } from "../../../redux/reducers/index";
import Navbar from '../../Header/Navbar/Navbar';
export default function ForgotPassword() {
    let restClient: RestClient = new RestClient();

    const [userName, setuserName] = useState('');
    const submitHandler = async (e: any) => {
        e.preventDefault();
        if (userName.length === 0)
            alert('No Field can be empty')
        else {
            const payload: any = {

                userId: userName,


            };
            let response: any = await restClient.postCall(
                ProdConfiguration.PROD_COURSE_URL + "/user/resetpwd",
                JSON.stringify(payload),
                ///authState.access_token
            );
            if (response.message === "success") {
                alert("Password has been sent to your registered email");


            }
            else{
                alert("UserId not found");

            }
        }

    }
    return (
        <div className="no-scroll">
            <Navbar />
            <div style={{ marginTop: '100px' }}>
                <h3>Forgot password</h3>
                <form onSubmit={submitHandler}>
                    {/* <label htmlFor="name"><FontAwesomeIcon icon={faEnvelopeSquare} style={{ margin: '20px 0px' }} /></label> */}
                    <div className="user-form-group forgot-user">  <input type="email" name="name" id="name"
                        placeholder="User Name" className="user-input"
                        value={userName} onChange={(e) => setuserName(e.target.value)} /></div>
                    <div className="user-form-button">
                        <input type="submit" name="user-add" id="signup" className="add-user" value="Forgot Password" />
                    </div>
                </form>
            </div>
        </div>
    )
}
