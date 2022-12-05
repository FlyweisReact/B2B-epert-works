import React from 'react'
import Navbar from "../../Header/Navbar/Navbar"
import HeadingTile from "../../HeadingTile/HeadingTile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./UserEntitlement.css"
import UserForm from "./UserForm/UserForm"
import UserTable from "./userTable/UserTable"
export default function UserEntitlement() {
    return (
        <div className="no-scroll">
            <Navbar />
            <HeadingTile heading="Admin"></HeadingTile>
            <UserForm />


            <div className="user-table">
                <UserTable /></div>
        </div>
    )
}
