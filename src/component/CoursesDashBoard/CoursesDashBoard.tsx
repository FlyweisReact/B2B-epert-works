import { truncate } from "fs";
import React,{useState} from "react";
import OverView from "./CourseDashboardItems/OverView/OverView"
import "./CourseDashboard.css";
export default function CoursesDashBoard(props:any) {
  const [overview, setoverview] = React.useState(true); //changed to true,as of now
  const [QA, setQA] = React.useState(false);
  const [notes, setNotes] = React.useState(false);
  const [announcements, setAnnouncements] = React.useState(false);
const [courseContent, setcourseContent] = useState(false)
  const dashBoardAction = (e: any, action: any) => {
    if (action === "overview") {
      setoverview(true);
      setQA(false);
      setNotes(false);
      setAnnouncements(false);
      setcourseContent(false)

      
    }
    if (action === "QA") {
      setoverview(false);
      setQA(true);
      setNotes(false);
      setAnnouncements(false);
      setcourseContent(false)

      
    }
    if (action === "notes") {
      setoverview(false);
      setQA(false);
      setNotes(true);
      setAnnouncements(false);
      setcourseContent(false)

      
    }
    if (action === "Announcements") {
      setoverview(false);
      setQA(false);
      setNotes(false);
      setAnnouncements(true);
      setcourseContent(false)

      
    }
    if (action === "courseContent") {
      setoverview(false);
      setQA(false);
      setNotes(false);
      setAnnouncements(false);
      setcourseContent(true)
    }
  };
  return (
    <>
      <div className="DiaEducation">
        <ul className="tab">
          <li
            className={!overview ? `tablink` : `tablink active`}
            
            onClick={(event) => dashBoardAction(event, "overview")}
          >
            Overview
          </li>
         <li
            className={!courseContent ? `tablink1` : `tablink1 active`}
            onClick={(event) => dashBoardAction(event, "courseContent")}
          >
           Course Content
          </li>
            {/*
          <li
            className={!notes ? `tablink` : ` tablink active`}
            onClick={(event) => dashBoardAction(event, "notes")}
          >
            Notes
          </li>
          <li
            className={!announcements ? `tablink` : ` tablink active`}
            onClick={(event) => dashBoardAction(event, "Announcements")}
          >
            Announcements
          </li>
         */}
        </ul>
      </div>
      <div>{overview ? <h1><OverView videoData={props.videoData}/></h1> : null}</div>
      <div>{courseContent ? <h2> <div className="content_description" aria-label="Related Clips">{props.subSections}</div></h2> : null}</div>
      <div>{QA ? <h1>QA</h1> : null}</div>
      <div>{notes ? <h1>Notes</h1> : null}</div>
      <div>{announcements ? <h1>Announcements</h1> : null}</div>
    </>
  );
}
