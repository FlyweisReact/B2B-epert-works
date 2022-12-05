import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import {RestClient} from "../../../../util/RestClient"
import { ProdConfiguration } from "../../../../util/restConstants";
import { RootState } from "../../../../redux/reducers/index";
import * as actions from "../../../../redux/actions"
export default function UserForm() {
    let restClient: RestClient = new RestClient();
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
  let authState: any = useSelector((state: RootState) => state.authToken);

  let selectedTeam: any = useSelector((state: RootState) => state.superAdminreducer.selectedTeam);

const dispatch=useDispatch()
    const submitHandler=async(e:React.FormEvent)=>{
        e.preventDefault()
        setError(false)
        setErrorMessage(' ')
        if(name.length===0||email.length===0)
        alert('No Field can be empty')
        // else if(password!==confirmpassword)
        // alert('password and confirm passwords should be same')
        // else if(password.length<6){
        //     alert('password length cannot be less than 6 characters')
        // }
     else {
            const payload: any = {
                name: name,

                email: email,

                "userRole" : "ROLE_USER"
              };
              let response: any = await restClient.postCall(
                ProdConfiguration.PROD_COURSE_URL + "/user/"+selectedTeam.teamId,
                JSON.stringify(payload),
                authState.access_token
              );
              if (response.message === "success") {
                alert("User added");
                 dispatch(actions.fetchUsersInAdmin(authState,selectedTeam.teamId))

              }
              if(response.status && response.status === 403){
                setError(true)
                setErrorMessage(response.message)
            }
            }


    }
    return (
        <div>

        <div className="user-container user-container-user">
            <div className="user-content">
                <div className="user-form">
                    <h2 className="form-title">Add User</h2>
                    {error ? <h5 className="team-create-error">{errorMessage}</h5> : '' }
                    <form method="POST" className="register-form" id="register-form" onSubmit={submitHandler}>
                        <div className="user-form-group">
                            <label htmlFor="name"><FontAwesomeIcon icon={faUser} style={{margin:'20px 0px'}}/></label>
                            <input type="text" name="name" id="name"
                            placeholder="Your Name" className="user-input"
                            value={name} onChange={(e)=>setname(e.target.value)}/>
                        </div>
                        <div className="user-form-group">
                            <FontAwesomeIcon icon={faEnvelope}  style={{margin:'20px 0px'}}/>
                            <input type="email" name="email" id="email"
                            placeholder="Your Email" className="user-input"
                            value={email} onChange={(e)=>setemail(e.target.value)}/>
                        </div>
                        {/* <div className="user-form-group">
                           <FontAwesomeIcon icon={faLock} style={{margin:'20px 0px'}}/>
                            <input type="password" name="pass" id="pass"
                            placeholder="Password" className="user-input"
                            value={password} onChange={(e)=>setpassword(e.target.value)}/>
                        </div>
                        <div className="user-form-group">
                           <FontAwesomeIcon icon={faLock} style={{margin:'20px 0px'}}/>
                            <input type="password" name="re_pass" id="re_pass"
                            placeholder="Repeat your password" className="user-input"
                            value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>
                        </div> */}

                        <div className="user-form-button">
                            <input type="submit" name="user-add" id="signup" className="add-user" value="Add user" />
                        </div>
                    </form>
                </div>
                <div className="create-team-image">
                    <figure><img src="https://d3s24np0er9fug.cloudfront.net/phase1/public/pricing.jpg" alt="sing up img" className="signup-image"/></figure>

                </div>
            </div>
        </div>

</div>
    )
}
