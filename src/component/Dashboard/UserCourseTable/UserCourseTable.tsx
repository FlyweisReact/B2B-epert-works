import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import MaterialTable from 'material-table';
import { dummyData } from "../dummyData";
import {RootState} from "../../../redux/reducers/index";
import Navbar from "../../Header/Navbar/Navbar";
import "./UserCourseTable.css"
import { Filter, Search } from '@mui/icons-material';
import HeadingTile from "../../HeadingTile/HeadingTile"
import { Button } from '@mui/material';
import {RestClient} from "../../../util/RestClient"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf'
import autoTable, { RowInput } from 'jspdf-autotable'

interface ICourse {
    "courseId": string,
    "courseDescription": string,
    "courseDeliveryMethod": string,
    "completedPercentage": string,
    "courseStatus": string,
    "enrollmentDate": string,
    "email": string,
    "noOfHourseCompleted": string,
}
interface ICourseData {
    userId: string,
    userTableRows: ICourse[]

}
export default function UserCourseTable() {
    const [courseData, setcourseData] = useState<RowInput[] | null >([]);
    const [tabCols, settabCols] = useState([{title: 'Course Description', field: 'courseDescription'},
    {title: 'Course Type', field: 'courseType'},
     {title: 'Course Delivery Method', field: 'courseDeliveryMethod'},
     {title: 'Course Status', field: 'courseStatus'},
     {title: 'Course Hours', field: 'courseHours'},
     {title: 'Percentage Completed', field: 'percentageCompleted',render:(rowData:any)=>rowData&&<span>{rowData.percentageCompleted}%</span>},
     {title: 'Start Date', field: 'startDate'},
     {title: 'Completion Date', field: 'completionDate'},
     {title: 'Email', field: 'email'},
     {title: 'Send reminder', field: 'internal_action', render: (rowData:any)=>rowData&&<button className="secondary" onClick={()=>sendReminderHandler(rowData)}>Send reminder</button>},
    ])
    const {DashBoardData,selectedDashBoardUser}:any=useSelector((state:RootState)=>state.commonReducer);
    let authState: any = useSelector((state: RootState) => state.authToken);

  let restClient: RestClient = new RestClient();

    const sendReminderHandler=async(selectedRow:any)=>{
      const payload=  {
            "fromEmail" : selectedDashBoardUser.email,
            "userEmail" : selectedDashBoardUser.email,
            "status" : selectedRow.courseStatus.toUpperCase(), // or IN_PROGRESS or NOT_STARTED
            "courseName" : selectedRow.courseDescription,
            "courseDetail" : "testCourseDetail",
            "percentageCompleted" : selectedRow.percentageCompleted,
            "adminEmail" : authState.userId,
            "adminUserId" : authState.userId,
            "userName" : selectedDashBoardUser?.userName,
        
            }
        let response: any = await restClient.postCall(
            "https://api.expert-works.com/sendReminder",
            JSON.stringify(payload),
            authState.access_token
        );
        if(response.status===200){
            alert('Reminder has been sent successfully')
        }
        else{
            alert('something went wrong')
        }
    }
    const exportPdf = () => {
        const unit = "pt";
        const size = "A4";
        let img = new Image();
//img.src = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/Capture_27_1200x768.png"|| authState.logo
 //img.src = "https://www.expert-works.com/expertlogo.png"
//img.src=authState.logo||"http://www.expert-works.com.s3-website-us-east-1.amazonaws.com/expertlogo.png"
img.src=authState.logo||"https://d3s24np0er9fug.cloudfront.net/partner/expertlogo.png";
//img.src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/Capture_27_1200x768.png"

img.alt="icon"
console.log(authState.logo)
img.alt="icon";
let imgData=""   
const orientation = "landscape";
debugger;
const modifiedcourseData=courseData
        var doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);
        doc.addImage(img, 'png', 40, 40, 130, 80)
        doc.text(`${selectedDashBoardUser.userName}'s DashBoard` , 40, 150);
        autoTable(doc, {
            startY: 170, //where to start table
            columns: tabCols?.filter(data=>data.title!=='Send reminder').map(col => ({ ...col, dataKey: col.field })),
            body: modifiedcourseData||[]
        })
        doc.save("UsersDashboard.pdf")


    }
    useEffect(() => {
        console.log('dummyData in course',dummyData)
        debugger;
        const alluserscourses=DashBoardData?.allUserProgress;
        const filteredData=alluserscourses.filter((d:any)=>d.userId===selectedDashBoardUser.email);
        const test:any=filteredData[0].userTableRows.map((d:any)=>{
            delete d?.tableData
             return d
        })
     console.log(test,'filteredData');
     if(filteredData.length>0) {
     setcourseData(test);
     let cols:any=[]
     for(let key in test[0])
     {
         debugger;
        if(typeof key==='string') {
            const newKey: string[] = [];
            if(key.length > 0) {
                newKey.push(key.charAt(0).toUpperCase());
            }
            for (let i = 1; i < key.length; i++) {
                const character = key.charAt(i);
                if(character == character.toUpperCase()) {
                    newKey.push(" ");
                }
                newKey.push(character);
            }
            if(key=='percentageCompleted')
            cols.push({title:newKey.join(""),field:key,render:(rowData:any)=>rowData&&<span>{rowData.percentageCompleted}%</span>})
else
            cols.push({title:newKey.join(""),field:key})
        }
        
     }
     cols.push({title:'Send reminder', filed:"internal_action",render:(rowData:any)=>rowData&&<button className="secondary" onClick={()=>sendReminderHandler(rowData)}>Send reminder</button>})
     console.log('colsss',cols)
        settabCols(cols)}

    }, [])
    return (
        <div>
            <Navbar/>
            <HeadingTile heading="DashBoard"/>

            <div className="dashboard-course-table">
            <MaterialTable data={courseData ||[]} columns={tabCols ||[]} title={`${selectedDashBoardUser.userName} DashBoard` } options={{search:false,
                    // exportAllData:true,
                    // exportButton:true,
                rowStyle:{
                    fontSize:15
                }}}
                actions={
                    [{
                        icon: () => <FontAwesomeIcon icon={faFilePdf}
                            style={{ width: '40px', height: '20px' }} />,
                        onClick: () => exportPdf(),
                        tooltip:'Export Data',
                        isFreeAction: true
                    }]
                }
                />
            </div>
        </div> 
    )
}
