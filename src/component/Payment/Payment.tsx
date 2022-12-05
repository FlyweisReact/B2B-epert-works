import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Navbar from '../Header/Navbar/Navbar';
import { RootState } from "../../redux/reducers/index";
import { ProdConfiguration } from "../../util/restConstants";
import { RestClient } from "../../util/RestClient";
import { Button } from "@mui/material"
import "./Payment.css";

function Payment(props: any) {
  const [paymentResultUrl, setPaymentResultUrl] = useState("")
  const [paypalCheckedTrue, setPaypalCheckedTrue] = useState(false)
  const [invalidPaymentOption, setInvalidPaymentOption] = useState(false)
  const [paymentErrorMessage, setPaymentErrorMessage] = useState('')
  let restClient: RestClient = new RestClient();
  let authState: any = useSelector((state: RootState) => state.authToken);
  console.log("cartDetails",props.history.location.state.cartDetails);

  const handlePayPal = async () => {

    const finalPrice = props.history.location.state.cartDetails.finalPrice
    const priceCurrency = props.history.location.state.cartDetails.priceCurrency
        const payload: any = {
          price: finalPrice,
          currency: priceCurrency,
          method: "PayPal",
          intent: "sale",
          description: "user@gmail.com",
          successUrl: "https://www.expert-works.com/courses",
          cancelUrl: "https://www.expert-works.com/courses"
      }
        let response: any = await restClient.postCall(
          ProdConfiguration.PROD_COURSE_URL+"/payurl",
          JSON.stringify(payload),
          authState.access_token
        );
          if(response.approval_url){
            setPaymentResultUrl(response.approval_url)
          }
        else{
          setPaymentErrorMessage("There is an error while doing the Payment")
          alert('something went wrong')
        }

      }

      const handlePaymentProceed = () => {
        if(paymentResultUrl){
          window.open(paymentResultUrl, "_self");
        }
      }

      const handleChange = (e: any) => {
        if(e.target.value === "paypal"){
          handlePayPal();
          setPaypalCheckedTrue(true)
          setInvalidPaymentOption(false)
        }else{
          setInvalidPaymentOption(true)
          setPaypalCheckedTrue(false)
        }
    };

    return (
        <div className="no-scroll">
           <Navbar/>
              <div className="payment-main-container">
                <div className="payment-content">
                <h1 className="payment-method-title">Payment Method:</h1>
                <h1 className="payment-method-subtitle">Please choose a payment method.</h1>
                {invalidPaymentOption ? <span className="inavlid-payment-error">The Selected Payment Option is Invalid!</span> : null}
                <div className="payment-options-lists">
                <div className="form-radio">
                <label className="form-check-label">
                  <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => handleChange(e)}
                  name="pay"
                  id="paypal"
                  value="paypal"
                  /> PayPal </label>
                  <img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png" alt="Paypal-img" />
                  <hr></hr>
              </div>
              <div className="form-radio">
                <label className="form-check-label">
                  <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => handleChange(e)}
                  name="pay"
                  id="credit"
                  value="credit"
                  /> Credit Card </label>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRar18gl9WIJg2HBnbKvQo4nVEmjOeZxEO8UTlzlySSAJBP276dsWqfzs_jg9OKqJyES5w&usqp=CAU" alt="vsa-card-img" />
                  <img src="https://d28wu8o6itv89t.cloudfront.net/images/mastercardlogopng-1579603310730.png" alt="Master-Card-img" />
                  <img src="data:image/jpeg;base64,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" alt="Discover-Card-img" />
                  <hr></hr>
              </div>
              <div className="form-radio">
                <label className="form-check-label">
                  <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => handleChange(e)}
                  name="pay"
                  id="bankwire"
                  value="bankwire"
                  /> Bank Wire </label>
                  <hr></hr>
              </div>
              <div className="form-radio">
                <label className="form-check-label">
                  <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => handleChange(e)}
                  name="pay"
                  id="crypto"
                  value="crypto"
                  /> Cryptocurrency via BitPay </label>
              </div>
                    </div>
                    <div className="payment-proceed-button">
                  <Button onClick={() => handlePaymentProceed()} disabled={!paypalCheckedTrue}>Proceed</Button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Payment;
