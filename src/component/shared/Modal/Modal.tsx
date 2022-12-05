import React from 'react';
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography
} from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { RestClient } from "../../../util/RestClient";
import { ProdConfiguration } from "../../../util/restConstants"
import "./Modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { RootState } from "../../../redux/reducers/index";
function TransitionsModal(props: any) {
  const { showModal, modalHandler, cartResponseData, courseData } = props;
  const recommendedCourses = cartResponseData?.recommendedCourses?.slice(0,2);

  let authState: any = useSelector((state: RootState) => state.authToken);
  
  const restClient: RestClient = new RestClient()
  const clickHandler = async (courseId: string[],addAll:Boolean) => {
    let courseIds=courseId
    if(addAll)
    {
      courseIds=recommendedCourses.map((data:any)=>data.courseId)

    }
    const payload = {
      "customerType": "B2C",
      "priceCurrency": "INR",
      "subscriptionStatus": "IN_PROGRESS",
      "addedCourseIdList": courseIds,
      "removedCourseIdList": [],
      "discountCode": "",
      "customerId": authState.userId,
      "bundleId": "",
      "territory": "IN"
    }
    let response: any = await restClient.postCall(ProdConfiguration.PROD_PRICING_URL + "/cart/createUpdateCart", JSON.stringify(payload))


    console.log(response.headers)
    if (response.message === 'SUCCESS') {
      // setcartResponseData(response.result)
      // setshowModal(!showModal);
      alert('Added to Cart')
    }
    else
      alert('something went wrong')


  }
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 520,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    height: 'auto',
    p: 4,

  };
  const goTOCart = () => {
    props.history.push("/cart")
  }

  return (
    <div style={{ overflowY: 'scroll' }}>
      {/* <Button onClick={modalHandler}>Open modal</Button> */}

    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={modalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h3>Added to cart </h3>
              <div className="modal-added-course">
                <CheckCircleIcon fontSize="large" />
                <img alt="course" src={courseData?.img} className="modal-course-img" />
                <div className="modal-price-chip">
                  <h4>{courseData?.title}</h4>
                  <h4 className="modal-price">{cartResponseData?.priceCurrency} {courseData?.price}</h4>

                </div>
                <Button className="modal-gotocart" onClick={goTOCart}>Go To Cart</Button>

              </div>
              <div className="frequently-bought">
                <h4>Frequently bought together</h4>
                <div>
                  {recommendedCourses?.map((course: any) => {
                    
                    return <>
                      <div className="modal-added-course">
                        <img alt="suggestedcourse" src={course?.img} className="modal-course-img1" />
                        <div className="modal-price-chip">
                          <h4>{course?.title}</h4>
                          <h4 className="modal-price">{cartResponseData?.priceCurrency} {course?.price}</h4>

                        </div>

                        <Button className="modal-gotocart" onClick={()=>clickHandler([course.courseId],false)}>Add To Cart</Button>
                      </div>
                    </>

                  })}
                </div>


                <div className="modal-added-course discounted-course-chip">
                  <h4>Total: {cartResponseData?.priceCurrency} {courseData?.price * 1.5}</h4>
                  <Button className="modal-gotocart" onClick={() => clickHandler(cartResponseData.addedCourseIdList,true)}> Add all to cart</Button>
                </div>

              </div>
              <div className="save-extra">
                <h5>Save Extra:</h5>
                <ul className="modal-save">{cartResponseData?.moreOfferList?.map((data: any) => {

                  return <li>{data.message}</li>
                })}
                 
                </ul>
              </div>
            </Typography>

          </Box>
        </Fade>
      </Modal>: 
     
    </div>
  );
}
export default withRouter(TransitionsModal)
//sx={{ mt: 2 }}
