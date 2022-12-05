import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {RestClient} from "../../../../util/RestClient"
import { ProdConfiguration } from "../../../../util/restConstants";
import { RootState } from "../../../../redux/reducers/index";
import * as actions from "../../../../redux/actions"
import {useSelector} from 'react-redux'
import "./UserForm.css"
export default function UserForm(props:any) {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const dispatch=useDispatch();
    let restClient: RestClient = new RestClient();
    let authState: any = useSelector((state: RootState) => state.authToken);
  let selectedgroup: any = useSelector((state: RootState) => state.superAdminreducer.selectedgroup);

    const submitHandler=async(e:React.FormEvent)=>{
        e.preventDefault();
        if(name.length===0||email.length===0)
        alert('No Field can be empty')
     else {
            const payload: any = {
                name: name,
                "userRole" : "ROLE_ADMIN",
                email: email,

              };
              let response: any = await restClient.postCall(
                ProdConfiguration.PROD_COURSE_URL + `/user?groupId=${selectedgroup.groupId}`,
                JSON.stringify(payload),
                authState.access_token
              );
              if (response.message === "success") {
                alert("Admin added");
                 dispatch(actions.fetchUsers(authState,selectedgroup.groupId))

              }
              else{
                  alert(response.message)
              }

            }

    }
    return (

        <div>

        <div className="user-container">
            <div className="user-content">
                <div className="user-form">
                    <h2 className="form-title">Add Admin Under {selectedgroup.name} Group</h2>
                    <form method="POST" className="register-form" id="register-form" onSubmit={submitHandler}>
                        <div className="user-form-group">
                            <label htmlFor="name"><FontAwesomeIcon icon={faUser} style={{margin:'20px 0px'}}/></label>
                            <input type="text" name="name" id="name"
                            placeholder="Admin Name" className="user-input"
                            value={name} onChange={(e)=>setname(e.target.value)}/>
                        </div>
                        <div className="user-form-group">
                            <FontAwesomeIcon icon={faEnvelope}  style={{margin:'20px 0px'}}/>
                            <input type="email" name="email" id="email"
                            placeholder="Admin Email" className="user-input"
                            value={email} onChange={(e)=>setemail(e.target.value)}/>
                        </div>


                        <div className="user-form-button">
                            <input type="submit" name="user-add" id="signup" className="add-user" value="Create Admin" />
                        </div>
                    </form>
                </div>
                <div className="signup-image">
                    <figure><img src={require("../../../../img/user-entitle.jpg")} alt="create Team" /></figure>

                </div>
            </div>
        </div>

</div>
    )
}
