import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import {RestClient} from "../../../util/RestClient"
import { ProdConfiguration } from "../../../util/restConstants";
import { RootState } from "../../../redux/reducers/index";
import * as actions from "../../../redux/actions"
import Navbar from "../../Header/Navbar/Navbar"
import userEntitleImg from "../../../img/user-entitle.jpg"
export default function ChangePassword() {
    let restClient: RestClient = new RestClient();
    const [userName, setuserName] = useState('')
    const [oldPassword, setoldPassword] = useState('')
    const [newPassword, setnewPassword] = useState('')
    const [confirmNewPassword, setconfirmNewPassword] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
  let authState: any = useSelector((state: RootState) => state.authToken);
const dispatch=useDispatch()
    const submitHandler=async(e:React.FormEvent)=>{
        e.preventDefault()
        if(userName.length===0||newPassword.length===0||confirmNewPassword.length===0||oldPassword.length===0)
        alert('No Field can be empty')
        else if(newPassword!==confirmNewPassword)
        alert('password and confirm passwords should be same')
        // else if(newPassword.length<6){
        //     alert('password lenght cannot be less than 6 characters')
        // }
     else {
            const payload: any = {
                userId: authState.userId,

                oldpassword: oldPassword,
                name:userName,

                password: newPassword,
              };
              let response: any = await restClient.postCall(
                ProdConfiguration.PROD_COURSE_URL + "/user/changepwd",
                JSON.stringify(payload),
                authState.access_token
              );
              if (response.message === "success") {
                alert("Password changed successfully");


              }}

    }
    return (
        <div className="no-scroll">
               <Navbar/>
        <div className="user-container">
            <div className="user-content">
                <div className="user-form">
                    <h2 className="form-title">Change Password</h2>
                    <form method="POST" className="register-form" id="register-form" onSubmit={submitHandler}>
                    <div className="user-form-group">
                            <label htmlFor="name"><FontAwesomeIcon icon={faUser} style={{margin:'20px 0px'}}/></label>
                            <input type="text" name="name" id="name"
                            placeholder="User Name" className="user-input"
                            value={userName} onChange={(e)=>setuserName(e.target.value)}/>
                        </div>
                        <div className="user-form-group">
                            <label htmlFor="name"><FontAwesomeIcon icon={faUser} style={{margin:'20px 0px'}}/></label>
                            <input type="text" name="name" id="name"
                            placeholder="Old Password" className="user-input"
                            value={oldPassword} onChange={(e)=>setoldPassword(e.target.value)}/>
                        </div>

                        <div className="user-form-group">
                           <FontAwesomeIcon icon={faLock} style={{margin:'20px 0px'}}/>
                            <input type="password" name="pass" id="pass"
                            placeholder="New Password" className="user-input"
                            value={newPassword} onChange={(e)=>setnewPassword(e.target.value)}/>
                        </div>
                        <div className="user-form-group">
                           <FontAwesomeIcon icon={faLock} style={{margin:'20px 0px'}}/>
                            <input type="password" name="re_pass" id="re_pass"
                            placeholder="Confirm New password" className="user-input"
                            value={confirmNewPassword} onChange={(e)=>setconfirmNewPassword(e.target.value)}/>
                        </div>

                        <div className="user-form-button">
                            <input type="submit" name="user-add" id="signup" className="add-user" value="Change Password" />
                        </div>
                    </form>
                </div>
                <div className="signup-image">
                    <figure><img src={userEntitleImg} alt="sing up" /></figure>

                </div>
            </div>
        </div>

</div>
    )
}
