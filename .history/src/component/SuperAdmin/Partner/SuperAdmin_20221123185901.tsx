/** @format */

import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import HeadingTile from "../../HeadingTile/HeadingTile";
import PartnerForm from "./PartnerForm/Partner";
import PartnerTable from "./PartnerTable/PartnerTable";
import PartnerTableNew from "./PartnerTable/PartnerTableNew";
import { useHistory } from "react-router-dom";

export default function SuperAdmin() {

    const history = useHistory();
  return (
    <div className="no-scroll">
      <Navbar />
      <HeadingTile heading="Super Admin" />
      <h2 className="MenuH" onClick={() => history.push("/")}>
                {" "}
                Add Course{" "}
              </h2>
      <PartnerForm />
      <div className="user-table">
        <PartnerTable />
      </div>
    </div>
  );
}
