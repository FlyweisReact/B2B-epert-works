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
  const { showModal, modalHandler,data} = props;
  
  const restClient: RestClient = new RestClient()
  const clickHandler = async (courseIds: string[]) => {
    const payload = {
      "customerType": "B2C",
      "priceCurrency": "INR",
      "subscriptionStatus": "IN_PROGRESS",
      "addedCourseIdList": courseIds,
      "removedCourseIdList": [],
      "discountCode": "",
      "customerId": "test02B2CCustomer",
      "bundleId": "",
      "territory": "IN"
    }
    let response: any = await restClient.postCall(ProdConfiguration.PROD_PRICING_URL + "/cart/createUpdateCart", JSON.stringify(payload))


    console.log(response.headers)
    if (response.message === 'SUCCESS') {
      // setcartResponseData(response.result)
      // setshowModal(!showModal);
      alert('success')
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
              <Button onClick={()=>props.history.push(data.url)} className="default-modal-gotocart modal-btn">{data.name} </Button>
              <div className="style-or">or </div>
              <Button onClick={()=>props.history.push("/signup")} className="default-modal-gotocart modal-btn">Create a new Account </Button>

             
            </Typography>

          </Box>
        </Fade>
      </Modal>
     
    </div>
  );
}
export default withRouter(TransitionsModal)
//sx={{ mt: 2 }}
