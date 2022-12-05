import React,{useEffect} from 'react'
import Navbar from '../../Header/Navbar/Navbar'
import HeadingTile from '../../HeadingTile/HeadingTile'
import UserForm from './UserForm/UserForm'
import UserTable from './UserTable/UserTable'
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
            <UserForm partnerdata={superadmin.selectedgroup}/>
            <div className="user-table"><UserTable /></div>


        </div>

    )
}
