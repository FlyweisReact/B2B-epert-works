
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { RestClient } from "../../../../util/RestClient"
import { ProdConfiguration } from "../../../../util/restConstants";
import { RootState } from "../../../../redux/reducers/index";
import * as actions from "../../../../redux/actions"
import { useSelector } from 'react-redux'
import Navbar from '../../../Header/Navbar/Navbar'
import { FormControl, InputLabel, MenuItem, Select, Box, TextField, Button } from '@mui/material'
import userEntitle from "../../../../img/user-entitle.jpg"
import "./Package.css"
type Package = {
    id: string,
    name: string,
    price: string,
    subscriptionFrequency: string,
    subscriptionPackage: string

}
type intPayload = {
    customerId: string,
    customerType: string,
    groupId:string

}
type Discountedcode = {
    appliedDiscountPercentage: string

}
export default function Package(props: any) {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [couponCode, setCouponCode] = useState("")
    const [packages, setPackages] = useState([])
    const [price, setPrice] = useState('')
    const [selectedPackageId, setselectedPackageId] = useState('')
    const [selectedPackage, setselectedPackage] = useState<Package | undefined>(undefined);
    const [discountedCodeData, setdiscountedCodeData] = useState<any | null>(null);
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    let restClient: RestClient = new RestClient();
    let authState: any = useSelector((state: RootState) => state.authToken);
    let selectedgroup: any = useSelector((state: RootState) => state.superAdminreducer.selectedgroup);

    useEffect(() => {
        const res = restClient.getCall(ProdConfiguration.PROD_COURSE_URL + "/packages", authState.access_token)
        res.then((data: any) => {
            setPackages(data.result);
            //setselectedPackage(data.result[0].name);
            //setPrice(data.result[0].price)
        });
        const cartinfo = restClient.getCall(ProdConfiguration.PROD_PRICING_URL + `/cart/getCartInfo?customerType=B2B&customerId=${selectedgroup.groupId}`, authState.access_token)
        cartinfo.then((data: any) => {
            setCouponCode(data.result.appliedDiscountCode);
            setdiscountedCodeData(data.result)
            setPrice(data.result.discountAmount + " " + data.result.priceCurrency);
            //setselectedPackageId(data.result.packageId)
            //discuss
            if(data.result.addedCourseIdList.length>0)
            setselectedPackageId(data.result.addedCourseIdList[0])

        });



    }, [])
    const getDiscountedPrice = async (e: any) => {


        setError('')
        setdiscountedCodeData([])
        const payload: any = {
            "customerType": "B2B",
            "subscriptionFrequency": selectedPackage?.subscriptionFrequency,
            "subscriptionPackage": selectedPackage?.subscriptionPackage,
            "priceCurrency": "USD",
            "subscriptionStatus": "IN_PROGRESS",
            "packagePrice": 123.9,
            "discountCode": couponCode,
            "customerId": selectedgroup.groupId,
            "bundleId": "",
            "territory": "US",
            "packageId": selectedPackage?.id
        }
        let response: any = await restClient.postCall(
            ProdConfiguration.PROD_PRICING_URL + `/cart/createUpdateCart`,
            JSON.stringify(payload),
            //authState.access_token
        );
        if (response.message === "SUCCESS") {
            setdiscountedCodeData(response.result)
            setPrice(response.result.discountAmount + " " + response.result.priceCurrency)


        }
        else {
            setError(response.error);
            setdiscountedCodeData({});
            setPrice('')
        }
    }


    console.log('packa', packages)
    const packageHandler = (e: any) => {
        const packageId = e.target.value;
        const package1: any = packages.find((pk: any) => pk.id === packageId)
        setselectedPackage(package1)
        setselectedPackageId(package1.id);
        const requirddtaa: any = packages.find((data: any) => data.name === package1.name);


    }
    const onBoardPartner = async (e: any) => {
        const payload: intPayload = {

            "customerType": "B2B",
            "customerId": authState.userId,
            "groupId": selectedgroup.groupId
        }

        let response: any = await restClient.postCall(ProdConfiguration.PROD_PRICING_URL + '/cart/completeOrder', JSON.stringify(payload), authState.access_token)
        
    }
    console.log('selectedPackageId', selectedPackageId)
    return (
        <div>
            <Navbar />
            <h3 className="superadmin-package-title">Add Package for {selectedgroup.name}</h3>

            <div className="package-container">
                <div className="user-form-group">
                    <Box style={{ minWidth: '390px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" style={{ fontSize: '20px' }}>Select Package</InputLabel>
                            <Select inputProps={{ style: { fontSize: '20px' } }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={package}
                                value={selectedPackageId}
                                label="Age"
                                onChange={packageHandler}
                                name="package"
                            >
                                {packages && packages.map((data: any) => {

                                    return <MenuItem value={data.id} style={{ fontSize: '20px' }}
                                        data-id={data.price} >{data.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="cart-coupon-enter coupon-style">
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="Enter Coupon"
                        variant="filled"
                        size="small"
                        value={couponCode}
                        onChange={(e: any) => setCouponCode(e.target.value)}

                    />
                    <Button className="cart-coupon-apply" onClick={getDiscountedPrice} disabled={!selectedPackageId}>Calculate Price</Button><br />

                </div>


                <div className="coupon-message">

                    {(discountedCodeData?.appliedDiscountPercentage && !(discountedCodeData?.invalidDiscountCode)) ? <div className="coupon-style">
                        Coupon code applied successfully, Extra {discountedCodeData?.appliedDiscountPercentage}% off
                    </div> : discountedCodeData?.invalidDiscountCode && <div className="coupon-style" style={{ color: 'red' }}> Coupon Code Inavlid</div>}

                    {(discountedCodeData?.appliedDiscountPercentage && !(discountedCodeData?.invalidDiscountCode)) ?
                        <div className="coupon-style">
                            <div className="price-text">Price for the selected package:{price}</div>
                        </div> : null}
                </div>
                <div className="partner-grid">
                    <div className="user-form-button">
                        <input type="submit" name="user-add" id="signup"
                            className="add-user" value="Onboard Partner" onClick={onBoardPartner} />
                    </div>
                    {/* <div className="user-form-button">
                        <input type="submit" name="user-add" id="signup"
                            className="add-user" value="Revoke Partner" onClick={onBoardPartner} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
