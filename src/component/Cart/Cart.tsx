import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Header/Navbar/Navbar';
import { ProdConfiguration } from "../../util/restConstants";
import { RestClient } from "../../util/RestClient";
import { Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import { RootState } from "../../redux/reducers/index";
import "./Cart.css";

export default function Cart(props: any) {
    const [cartList, setCartList] = useState([])
    const [cartDetails, setCartDetails] = useState([])
    const [total, setTotal] = useState(0)
    const [currency, setyCurrency] = useState('')
    const [cartDataTrue, setCartDataTrue] = useState(false)
    const [cartDataErrorMessage, setCartDataErrorMessage] = useState('')
    const [cartEmptyMessage, setcartEmptyMessage] = useState('')
    const [discountPercentage, setDiscountPercentage] = useState(0)
    const [totalSavings, setTotalSavings] = useState(0)
    let restClient: RestClient = new RestClient();
    let authState: any = useSelector((state: RootState) => state.authToken);

    useEffect(()=>{
    let code = {
      customerType: "B2C",
      customerId:authState.userId
    }

    const res=restClient.getCall(ProdConfiguration.PROD_PRICING_URL+`/cart/getCartInfo?customerType=${code.customerType}&customerId=${code.customerId}`)
      res.then((data:any)=>{
          if(data && data.result.courseDetailList === null){
            setcartEmptyMessage("No Courses are added to the Cart!")
          }
          if(data && data.message === "SUCCESS"){
            setCartDetails(data?.result)
            setCartList(data?.result?.courseDetailList)
            setTotal(data?.result?.finalPrice.toFixed(2))
            setyCurrency(data?.result?.priceCurrency)
            setCartDataTrue(true)
            setDiscountPercentage(data?.result?.appliedDiscountPercentage)
            setTotalSavings(data?.result?.discountAmount.toFixed(2))
          }else{
            setCartDataErrorMessage("There is an error while fetching the Cart Details")
          }
      });
  },[])

  const handleRemoveCourse = async (courceData:any) => {

    const payload: any = {
          customerType : "B2C",
          priceCurrency : "INR",
          subscriptionStatus : "IN_PROGRESS",
          addedCourseIdList : [],
          removedCourseIdList : [courceData.courseId],
          discountCode : "",
          customerId: authState.userId,
          bundleId: "",
          territory : "IN"
    };
    let response: any = await restClient.postCall(
      ProdConfiguration.PROD_PRICING_URL+"/cart/createUpdateCart",
      JSON.stringify(payload)
    )
    if(response.result.courseDetailList.length === 0){
      setCartList(response.result.courseDetailList)
      setcartEmptyMessage("No Courses are added to the Cart!")
    }
    if (response.message === "SUCCESS") {
      alert("The selected course is successfully removed");
      if(response.result.courseDetailList.length>=0){
        setCartList(response.result.courseDetailList)
        setTotal(response.result.finalPrice.toFixed(2))
        setDiscountPercentage(response.result.appliedDiscountPercentage)
        setTotalSavings(response.result.discountAmount.toFixed(2))
      }
    }
    else{
      alert('something went wrong')
    }

  }

  const handleSaveforLater = () => {
  }

  const handleMovetoWatchlist = () => {
  }

  const handlePayment = () => {
    props.history.push({
      pathname: '/payment',
      state: { cartDetails: cartDetails }
  })
  }

    return (
        <div className="no-scroll">
            <Navbar/>
            <div className="cart-header">
            <h2 className="cart-page-title">SHOPPING CART</h2>
              </div>
             <div>
               {cartDataTrue ?
               <div>
                {cartList && cartList.length !== 0 ?
                <div className="cart-main-container">
                <div className="cart-container">
                <div className="cart-content">
                <h4 >{cartList?.length} Courses in cart</h4>
                {cartList?.map((cartData:any) => (
                <div className="cart-content-border">
                  <div className="cart-content-section">
                    <img alt="course in cart" src={cartData?.img} className="cart-content-img" />
                    <h4>{cartData?.title}</h4>
                    <div className="cart-content-actions">
                    <span onClick={()=>handleRemoveCourse(cartData)}>Remove</span>
                    <span onClick={handleSaveforLater}>Save for Later</span>
                    <span onClick={handleMovetoWatchlist}>Move to Watchlist</span>
                    </div>
                    <div className="cart-price-actions">
                    <span className="cart-price" >{currency + ' ' + cartData?.price}</span>
                    <span className="cart-override-price" >{currency + ' ' + cartData?.actualPrice}</span>
                    </div>
                  </div>
                  </div>))}
                </div>
                </div>
                <div className="cart-total-section">
                <div className="cart-subtotal">
                <span className="cart-subtotal-title" >Subtotal:</span>
                <span className="cart-subtotal-price" >{currency + ' ' + total}</span>
                </div>
                <div className="cart-savings">
                <span className="cart-subtotal-title" >Total Savings ({discountPercentage}%) :</span>
                <span className="cart-override-total" >{currency} {totalSavings}</span>
                </div>
                <Button className="cart-checkout" onClick = { () => handlePayment()}>Checkout</Button>
                <span className="cart-promotion-title" >Promotions</span>
                <div className="cart-coupon">
                <span className="cart-co-title" >x EXPERTWORKS1</span>
                <span className="cart-override-total" >{currency} {totalSavings}</span>
                </div>
                <div className="cart-coupon-enter">
                <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                defaultValue="Enter Coupon"
                variant="filled"
                size="small"
                />
                <Button className="cart-coupon-apply">Apply</Button>
                </div>

                </div>
                </div>:
                  <div className="no-course-added">
                  <span>{cartEmptyMessage}</span>
                </div>}
                </div>: <div>
                  <span>{cartDataErrorMessage}</span>
                  </div>}
                </div>
        </div>
    )
}
