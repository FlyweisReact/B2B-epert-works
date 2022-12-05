import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { RestClient } from "../../../../util/RestClient";
import { ProdConfiguration } from "../../../../util/restConstants";
import { RootState } from "../../../../redux/reducers/index";
import {Button} from "@mui/material"
import "./OverView.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function OverView(props:any) {
    const [userRole, setUserRole] = useState('');
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          if(foundUser.access_token){
            setUserRole(foundUser.role);
          }
        }else{
          setUserRole("");
        }
      }, []);

  let restClient: RestClient = new RestClient();

  let videoData: any = props.videoData


  const {description='',includes=[],level='',leveldesc=''}=videoData?.result

    return (
        <div className="overview">
             { userRole === "ROLE_ADMIN" || "ROLE_USER" ? " " : <div style={{textAlign:'end'}}>
        <Button variant="contained" className="add-to-cart">Add to Cart <FontAwesomeIcon icon={faShoppingCart}/></Button>
            </div>}
            <div className="overview-header
            ">About this course</div>
            <div>
                <p className="overview-desc">{description||`Let us take you to the world of one of the top programming languages,
                JAVA! This course is designed by an experienced JAVA programmer to provide you the best real-time content.
                 This course will help you understand everything needed to excel in this programming language.
                 All the best!`}</p></div>
            <h2 className="overview-header">{level||`Level`}</h2>
            <p className="overview-desc">{leveldesc||`As a beginner,
             it’s important to learn everything from the basics. This course will provide you the basic
             knowledge to get started with JAVA.`}</p>
            <div>
                <h5 className="overview-details">This course includes the following:</h5>
                <ul >
                    {includes?.map((data: string) => <li className="overview-list">{data}</li>)
                    || ['9 hours of recorded sessions',

                        '3 assignments',

                        '15 technical papers',

                        '2 mock test papers',

                        '1 mini-project',

                        'Real-time content'].map((data: string) => <li className="overview-list">{data}</li>)}
                </ul>
            </div>
        </div>
    )
}
