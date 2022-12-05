import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../../redux/reducers/index"
import { Link } from 'react-router-dom'
import * as actions from "../../../redux/actions"
import MaterialTable, { MTableToolbar } from 'material-table'
import { DownloadOutlined } from "@mui/icons-material"
import HeadingTile from '../../HeadingTile/HeadingTile'
import { colors } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faPrint } from '@fortawesome/free-solid-svg-icons'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { toDataUrl } from "../../shared/common"
import "./UserTable.css"
// import img from "../../img/business.png"

const style = {
    headerStyle: {
        width: 50,
        minwidth: 50
    },
    cellStyle:
    {
        width: 50,
        minwidth: 50


    }
}
export default function UserTable(props: any) {
    // const tableIcons = {     Export: React.forwardRef((props, ref) => <MatDownloadSplitButton className="p-0" {...props} ref={ref} />)   };
    const dispatch = useDispatch();
    let authState: any = useSelector((state: RootState) => state.authToken);
    const cols = [
        {
            title: 'Full Name', field: 'userName', render: (rowData: any) => rowData &&
                <Link to="/dashboard/user-courses" onClick={() => dispatch(actions.storeSelectedDashboardUser(rowData))} className="table-link">{rowData.userName}</Link>
        },
        { title: "Course delivery method", field: "courseDeliveryMethod" },
        { title: "No. of courses enrolled", field: "noOfTotalCourses" },
        { title: "Not Started", field: "noOfCourseNotStarted" },
        { title: "In Progress", field: "noOfCoursesStarted" },
        { title: "Completed", field: "noOfCoursesCompleted" },
        { title: "Email", field: "email" },
    ]
    const [columns, setcolumns] = useState(cols)
    const { userData, loading } = props;

    const exportPdf = async () => {
        const unit = "pt";
        const size = "A4";
        let img = new Image();

        img.src = authState.logo || "https://d3s24np0er9fug.cloudfront.net/partner/expertlogo.png"
        console.log(authState.logo)
        const orientation = "landscape";
        debugger;
        try {
            let imgData = img;
            toDataUrl(authState.logo, (x: any) => {
                imgData = x
            })
            var doc = new jsPDF(orientation, unit, size);
            doc.setFontSize(15);
            doc.addImage(imgData, 'png', 40, 40, 130, 80);
            doc.text(`User Name - ${authState.name}`, 300, 110)
            doc.text("Users DashBoard", 40, 150);
            autoTable(doc, {
                startY: 170, //where to start table
                columns: columns.map(col => ({ ...col, dataKey: col.field })),
                body: userData
            })
            doc.save("UsersDashboard.pdf")
        }
        catch (e) {
            alert('something went wrong')
        }

    }
    return (
        <div
            //className="user-table"
            className='dashboard-course-table'
        >

            <MaterialTable data={userData || []} columns={columns || []}
                isLoading={loading}

                title="Users DashBoard"
                actions={
                    [{
                        icon: () => <FontAwesomeIcon icon={faFilePdf}
                            style={{ width: '40px', height: '20px' }} />,
                        onClick: () => exportPdf(),
                        tooltip: 'Export Data',
                        isFreeAction: true
                    }]
                }
                options={
                    {
                        search: false,
                        // exportAllData: true,
                        // exportButton: true,
                        rowStyle: {
                            fontSize: 15
                        }
                    }
                }
            // components={{
            //     Toolbar: props => (
            //         <div
            //           style={{
            //             display: "flex",
            //             justifyContent: "space-between",
            //             alignItems: "center"
            //           }}
            //         >

            //         <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/Capture_27_1200x768.png?91fJTelbzvGToMdC7wJ0pb4KiW9GVPd3&size=770:433"
            //           style={{ width: '100px', height: '60px' }} alt="icon"/>
            //           <h2>Users Dashboard</h2>

            //           <div style={{ width: "13rem" }}>
            //             <MTableToolbar {...props} />
            //           </div>
            //         </div>
            //     )
            //   }}
            />
        </div>
    )
}
