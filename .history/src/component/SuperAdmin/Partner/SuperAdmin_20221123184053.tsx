/** @format */

import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import HeadingTile from "../../HeadingTile/HeadingTile";
import PartnerForm from "./PartnerForm/Partner";
import PartnerTable from "./PartnerTable/PartnerTable";
import PartnerTableNew from "./PartnerTable/PartnerTableNew";
export default function SuperAdmin() {
  return (
    <div className="no-scroll">
      <Navbar />
      <HeadingTile heading="Super Admin" />

      <PartnerForm />
      <div className="user-table">
        <PartnerTable />
      </div>
    </div>
  );
}
