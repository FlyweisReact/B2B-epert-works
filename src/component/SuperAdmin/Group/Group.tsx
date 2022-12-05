import React,{useEffect} from 'react'
import Navbar from '../../Header/Navbar/Navbar'
import HeadingTile from '../../HeadingTile/HeadingTile'
import GroupForm from './GroupForm/GroupForm'
import GroupTable from './GroupTable/GroupTable'
import {useSelector,useDispatch} from 'react-redux'
import {RestClient} from "../../../util/RestClient"
import { RootState } from "../../../redux/reducers/index";
import { ProdConfiguration } from "../../../util/restConstants";
export default function SuperAdmin() {
    let superadmin: any = useSelector((state: RootState) => state.superAdminreducer);
useEffect(() => {
    window.scrollTo(0,0)

}, [])
    return (
        <div className="no-scroll">
            <Navbar />
            <HeadingTile heading="Super Admin" />
            <GroupForm partnerdata={superadmin.selectedParter}/>
            <div className="user-table"><GroupTable partnerdata={superadmin.selectedParter}/></div>

        </div>
    )
}
