import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { RestClient } from "../../../../util/RestClient"
import { ProdConfiguration } from "../../../../util/restConstants";
import { RootState } from "../../../../redux/reducers/index";
import * as actions from "../../../../redux/actions"
import { useSelector } from 'react-redux'
import "./TeamForm.css"
export default function TeamForm(props: any) {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [noOfusers, setnoOfusers] = useState('')
    const [price, setprice] = useState('')
    const dispatch = useDispatch();
    let restClient: RestClient = new RestClient();
    let authState: any = useSelector((state: RootState) => state.authToken);
    let selectedgroup: any = useSelector((state: RootState) => state.superAdminreducer.selectedgroup);

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0)
            alert('No Field can be empty')
        else {
            const payload: any = {
                name: name,

                email: email,

            };
            let response: any = await restClient.postCall(
                ProdConfiguration.PROD_COURSE_URL + `/team/${selectedgroup.groupId}`,
                JSON.stringify(payload),
                authState.access_token
            );
            if (response.message === "success") {
                alert("Team added");
                dispatch(actions.fetchTeams(authState, selectedgroup.groupId))

            }
        }

    }
    return (

        <div>

            <div className="user-container">
                <div className="user-content">
                    <div className="user-form">
                        <h2 className="form-title">Add Admin Under {selectedgroup.name}</h2>
                        <form method="POST" className="register-form" id="register-form" onSubmit={submitHandler}>
                            <div className="user-form-group">
                                <label htmlFor="name"><FontAwesomeIcon icon={faUser} style={{ margin: '20px 0px' }} /></label>
                                <input type="text" name="name" id="name"
                                    placeholder="Team Name" className="user-input"
                                    value={name} onChange={(e) => setname(e.target.value)} />
                            </div>
                            <div className="user-form-group">
                                <FontAwesomeIcon icon={faEnvelope} style={{ margin: '20px 0px' }} />
                                <input type="email" name="email" id="email"
                                    placeholder="Team Email" className="user-input"
                                    value={email} onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className="user-form-group">
                                <FontAwesomeIcon icon={faUser} style={{ margin: '20px 0px' }} />
                                <input type="number" name="No of Users" id="email"
                                    placeholder="No of Users" className="user-input"
                                    value={noOfusers} onChange={(e) => setnoOfusers(e.target.value)} />
                            </div>
                            <div className="user-form-group">
                                <FontAwesomeIcon icon={faEnvelope} style={{ margin: '20px 0px' }} />
                                <select className="user-input">
                                    {[{
                                        name: 'java'
                                    },
                                    { name: 'UI' },
                                    { name: 'hadoop' }].map((data: any) => <option>{data.name}</option>)}
                                </select>
                            </div>
                            <div className="user-form-group">
                                <FontAwesomeIcon icon={faEnvelope} style={{ margin: '20px 0px' }} />
                                <select className="user-input">
                                    {[{
                                        name: 'monthly'
                                    },
                                    { name: 'Quarterly' },
                                    { name: 'Yearly' }].map((data: any) => <option>{data.name}</option>)}
                                </select>
                            </div>
                            <div className="user-form-group">
                                <FontAwesomeIcon icon={faMoneyBill} style={{ margin: '20px 0px' }} />
                                <input type="number" name="price" id="price"
                                    placeholder="price" className="user-input"
                                    value={price} onChange={(e) => setprice(e.target.value)} />
                            </div>


                            <div className="user-form-button">
                                <input type="submit" name="user-add" id="signup" className="add-user" value="Create Team" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src="https://d3s24np0er9fug.cloudfront.net/phase1/public/pricing.jpg" alt="create Team" /></figure>

                    </div>
                </div>
            </div>

        </div>
    )
}
