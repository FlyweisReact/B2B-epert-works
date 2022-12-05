import React from 'react'
import Navbar from '../../Header/Navbar/Navbar'
import HeadingTile from '../../HeadingTile/HeadingTile'
import PartnerForm from './PartnerForm/Partner'
import PartnerTable from './PartnerTable/PartnerTable'
import PartnerTableNew from './PartnerTable/PartnerTableNew'
export default function SuperAdmin() {
    return (
        <div className="no-scroll">
            <Navbar />
            <HeadingTile heading="Super Admin" />
            <div style={{position : 'absolute' , top : 50}}>
                Add Course
            </div>
            <PartnerForm/>
            <div className="user-table"><PartnerTable/></div>

        </div>
    )
}
