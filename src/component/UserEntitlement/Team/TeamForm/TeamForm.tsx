import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { RestClient } from "../../../../util/RestClient"
import { ProdConfiguration } from "../../../../util/restConstants";
import { RootState } from "../../../../redux/reducers/index";
import * as actions from "../../../../redux/actions"
import Multiselectdropdown from "../../../shared/MultiSelectDropdown/MultiSelectDropdown"
import pricing from "../../../../img/pricing.jpg"
import { useSelector } from 'react-redux'
import "./TeamForm.css"
import CustomMultiSelect from "../../../shared/CustomMultiSelect/CustomMultiSelect"

interface Course{
    name:string,
    courseId:string
}
export default function TeamForm(props: any) {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [noOfusers, setnoOfusers] = useState('')
    const [price, setprice] = useState('');
    const [coursesData, setcoursesData] = useState([])
    const [selectedCourse, setselectedCourse] = useState({});
    const [selectedCOurses, setselectedCOurses] = useState([])
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch();
    let restClient: RestClient = new RestClient();
    let authState: any = useSelector((state: RootState) => state.authToken);
    let selectedgroup: any = useSelector((state: RootState) => state.superAdminreducer.selectedgroup);

    useEffect(() => {
        let res: any = restClient.getCall(ProdConfiguration.PROD_COURSE_URL + "/public/courses/");

        res.then((response: any) => {
            let formatedarr: any = response.result.map((data: any) => {
                return {
                    name: data.title,
                    courseId: data.courseId


                }
            })
        setselectedCourse(formatedarr[0])
        const formatedarrtemp:any=[{name:'All Courses',courseId:'ALL'},...formatedarr].sort((a:any,b:any)=>{
            let x=a.name.toLowerCase();
            let y=b.name.toLowerCase();
            return x<y?-1:1

        })
        setcoursesData(formatedarrtemp)

        dispatch(actions.storeFormattedCourses(formatedarrtemp))


        })



    }, [])

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(false)
        setErrorMessage(' ')
        if (name.length === 0 ||selectedCOurses.length<=0)
            alert('No Field can be empty')
        else {
            const payload: any = {
                name: name,

                selectedCourses:selectedCOurses

            };
            let response: any = await restClient.postCall(
                ProdConfiguration.PROD_COURSE_URL + `/team/${authState.groupId}`,
                JSON.stringify(payload),
                authState.access_token
            );
            if (response.message === "success") {
                alert("Team added");
                dispatch(actions.fetchTeams(authState, authState.groupId))
            }
            if(response.status && response.status === 403){
                setError(true)
                setErrorMessage(response.message)
            }
            // else{
            //     alert(response.message)
            // }
        }

    }
    const courseHandler=(e:any)=>{

        // let obj=e.target.options[e.target.selectedIndex].dataset
        // console.log(obj.value);
        // for(let i in obj.value){
        //     console.log('i',i,obj.value[i])
        // }
        console.log('test',e.target.value)
        setselectedCourse(JSON.parse(e.target.value))

    }

    const storeSelectedCourses=(values:any)=>{
debugger;
// console.log(e.target,values)
setselectedCOurses(values)


    }
    return (

        <div>

            <div className="user-container">
                <div className="user-content">
                    <div className="user-form">
                        <h2 className="form-title">Create a Team</h2>
                        {error ? <h5 className="team-create-error">{errorMessage}</h5> : '' }
                        <form method="POST" className="register-form" id="register-form" onSubmit={submitHandler}>
                            <div className="user-form-group">
                                <input type="text" name="name" id="name"
                                    placeholder="Team Name" className="user-input"
                                    value={name} onChange={(e) => setname(e.target.value)} />
                            </div>

                            {/* <div className="user-form-group">
                                <Multiselectdropdown storeSelectedCourses={storeSelectedCourses} coursesData={coursesData}/>

                            </div> */}
                            <div className="user-form-group">
                            <CustomMultiSelect existingCourses={[]} setSelectedCourses={storeSelectedCourses} />
                            </div>
                            {/* <div>
                            <select className="user-input" onChange={courseHandler}>
                                    {coursesData&&coursesData.map((data: any) => <option value={JSON.stringify(data)}>{data.name}</option>)}
                                </select>
                                </div> */}

                            <div className="user-form-button">
                                <input type="submit" name="user-add" id="signup" className="add-user" value="Create Team" />
                            </div>
                        </form>
                    </div>
                    <div className="create-team-image">
                        <img src="https://d3s24np0er9fug.cloudfront.net/phase1/public/pricing.jpg" alt="create Team" className="signup-image" />

                    </div>
                </div>
                <div className="create-team-content">
                    <h5>What is a Team?</h5>
                    <p>A one-stop feature to organize, track the progress of your employee, and achieve your organization's goal.
Example: If you're planning to train your employees in 2 different technologies like Java and AWS, you can divide your employees into 2 different teams and name them accordingly. The team members will have access only to the course assigned to them. You may create as many teams as required to organize and train your employees in different technologies. </p>
                </div>
            </div>

        </div>
    )
}
