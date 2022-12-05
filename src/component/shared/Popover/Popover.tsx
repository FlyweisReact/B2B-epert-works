import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import { Typography, Box } from '@mui/material';
import { RestClient } from "../../../util/RestClient";
import { ProdConfiguration } from "../../../util/restConstants"
import Button from '@mui/material/Button';
import HoverPopover from 'material-ui-popup-state/HoverPopover'
import PopupState, { bindTrigger, bindPopover, bindHover } from 'material-ui-popup-state';
import "./Popover.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { RootState } from "../../../redux/reducers/index";
import CustomModal from "../Modal/Modal"
import DefaultModal from '../Modal/DefaultModal';
export default function PopoverPopupState(props: any) {
  const { course } = props
  const [userRole, setUserRole] = useState('');
  const [showModal, setshowModal] = useState(false);
  const [showDefaultModal, setshowDefaultModal] = useState(false);
  let authState: any = useSelector((state: RootState) => state.authToken);
  const [cartResponseData, setcartResponseData] = useState([])
  const restClient: RestClient = new RestClient()
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
  const clickHandler = async (courseId: string) => {
    const payload = {
      "customerType": "B2C",
      "priceCurrency": "USD",
      "subscriptionStatus": "IN_PROGRESS",
      "addedCourseIdList": [courseId],
      "removedCourseIdList": [],
      "discountCode": "",
      "customerId": authState.userId,
      "bundleId": "",
      "territory": "US"
    }

    if (authState) {
      if (showModal)
        setshowModal(!showModal);
      else {
        let response: any = await restClient.postCall(ProdConfiguration.PROD_PRICING_URL + "/cart/createUpdateCart", JSON.stringify(payload))
        console.log('course response', response)

        if (response.message === 'SUCCESS') {
          setcartResponseData(response.result)
          setshowModal(!showModal);
          //alert('success')
        }
        else
          alert('something went wrong')
      }
    }

    else {
      setshowDefaultModal(!showDefaultModal)
    }


  }
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    height: '70vh',
    p: 4,
  };

  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-popover" >
        {(popupState) => (
          <div>
            <Typography  {...bindHover(popupState)}>
              {props.children}
            </Typography>
            { userRole === "ROLE_ADMIN" || "ROLE_USER" ? " " :
            <HoverPopover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Typography sx={{ p: 2 }}> <div className="popover-style">
                <h3>{course.title}</h3>
                <span>Level: <b>{course.level[0].toUpperCase() + course.level.substring(1)}</b></span>
                <p>This course includes</p>
                <ul>
                  {course?.includes?.map((data: any) => <li>{data}</li>)}

                </ul>
                <button className="popover-addtocart" onClick={() => clickHandler(course.courseId)}>Add to Cart</button></div></Typography>
            </HoverPopover>}
          </div>
        )}
      </PopupState>
      {showModal ?
        <CustomModal showModal={showModal} modalHandler={clickHandler} cartResponseData={cartResponseData} courseData={course} /> : null}
      {showDefaultModal ?
        <DefaultModal showModal={showDefaultModal} modalHandler={clickHandler} data={{ name: 'Please Login to proceed', url: "/login" }} /> : null}
    </div>

  );
}
