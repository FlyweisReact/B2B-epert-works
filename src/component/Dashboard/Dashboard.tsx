import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import "./Dashboard.css"
import UserTable from './UserTable/UserTable'
import { dummyData } from "./dummyData.js"
import Navbar from '../Header/Navbar/Navbar'
import HeadingTile from "../HeadingTile/HeadingTile";
import { RestClient } from "../../util/RestClient";
import { RootState } from "../../redux/reducers/index";
import { useSelector } from 'react-redux'
import * as actions from "../../redux/actions"
import { ProdConfiguration } from '../../util/restConstants';
interface IuserData {
    "userId": string,
    "teamId": string,
    "userName": string,
    "courseDeliveryMethod": string,
    "noOfCourseNotStarted": number,
    "noOfCoursesStarted": number,
    "noOfCoursesCompleted": number,
    "noOfTotalCourses": number,
    "email": string,
    "comment": string,
}
export default function Dashboard() {
    const dispatch=useDispatch();
    const [loading, setloading] = useState(false)
    const restClient: RestClient = new RestClient();
    let authState: any = useSelector((state: RootState) => state.authToken);
    const [userData, setuserData] = useState<IuserData[] | null>([])
    useEffect(() => {
        // setuserData(dummyData["groupProgress"]);
        try{
            setloading(true)

            const res = restClient.getCall(ProdConfiguration.PROD_DASHBOARD_URL+'/dashboard/view/'+authState.partnerId);
            res.then((data: any) => {
                debugger
                dispatch(actions.storeDashBoardData(data))
               setuserData(data["teamProgress"]);
            setloading(false)

            })
        }
        catch(e){
            alert('something went wrong');
            setloading(false)

           
        }
       
       


    },[])
    return (
        <div>
            <Navbar />
            <HeadingTile heading="DashBoard" />
            <div>
                <UserTable userData={userData} loading={loading}/>


            </div>
        </div>
    )
}
