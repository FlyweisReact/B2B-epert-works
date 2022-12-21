/** @format */

import React, { useEffect, useState } from "react";
import "../../assets/LMS.css";
import "./LMSMain.css";
import LMSVideos from "../LMSVideos/LMSVideos";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/index";
import { TopPane } from "../../component/Header/TopPane/TopPane";
import NavBar from "../Header/Navbar/Navbar";
import { RestClient } from "../../util/RestClient";
import { MenuItems as defaultMenuItems } from "../../component/Header/Navbar/MenuItems";
import * as actions from "../../redux/actions";
import {
  CourseResponse,
  CourseSectionResponse,
  ProdConfiguration,
} from "../../util/restConstants";
import { Rating } from "@mui/lab";

import Logo from "../Header/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomPopover from "../shared/Popover/Popover";
import {
  faAddressBook,
  faFilter,
  faTimes,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Popover, Typography, Modal } from "@mui/material";
let counter: number = 0;

const LMSMain = (props: any) => {
  const [userRole, setUserRole] = useState("");
  const [allCourses, setallCourses] = useState([]);
  const [intermediateCourse, setintermediateCourse] = useState([]);
  const [beginnerCourse, setbeginnerCourse] = useState([]);
  const [expertCourse, setexpertCourse] = useState([]);
  const [type, settype] = useState("");
  const [showFilter, setshowFilter] = useState(true);
  const [filteredallCourses, setFilteredallCourses] = useState([]);

  const dispatch = useDispatch();
  const pageState = useSelector((state: RootState) => state.page);
  let authState: any = useSelector((state: RootState) => state.authToken);
  console.log("authState in lmsmain", authState);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    console.log("enter");
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (e: React.MouseEvent<HTMLElement>) => {
    console.log("leave");
    //e.preventDefault()

    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      if (foundUser.access_token) {
        setUserRole(foundUser.role);
      }
    } else {
      setUserRole("");
    }
  }, []);


  let restClient: RestClient = new RestClient();

  let [state, setState] = useState(counter);
  const showSideFilter = () => {
    setshowFilter(!showFilter);
    if (showFilter) {
      settype("");
      // a helper function
      filterLevel(allCourses);
    }
    // settype("No-type");

    // setFilteredallCourses(allCourses);
  };

  const sortdata = (data: any) => {
    const sorteddata = data.sort((a: any, b: any) => {
      if (a.order < b.order) return -1;
      else if (a.order > b.order) return 1;
      return 0;
    });
    return sorteddata;
  };
  const filterCourses = (type1: string) => {
    let beginnercopy: any = [];
    let intermediateCopy: any = [];
    let expertCopy: any = [];
    if (type1 === "FREE COURSES" && type !== type1) {
      settype(type1);

      const filteredcourses = allCourses.filter(
        (course: any) => course.price == "0.0"
      );
      filteredcourses?.forEach((course: any) => {
        if (course.level == "beginner") {
          beginnercopy = [...beginnercopy, course];
        } else if (course.level == "intermediate") {
          intermediateCopy = [...intermediateCopy, course];
        } else if (course.level == "expert") {
          expertCopy = [...expertCopy, course];
        }
      });

      const sorteddata = sortdata(filteredcourses);
      setbeginnerCourse(beginnercopy);
      setintermediateCourse(intermediateCopy);
      setexpertCourse(expertCopy);
      setFilteredallCourses(sorteddata);
    } else if (type === type1) {
      settype("");
      filterLevel(allCourses);
    } else {
      settype(type1);
      const filteredcourses = allCourses.filter(
        (course: any) => course.type == type1
      );
      let beginnercopy: any = [];
      let intermediateCopy: any = [];
      let expertCopy: any = [];
      filteredcourses?.forEach((course: any) => {
        if (course.level == "beginner") {
          beginnercopy = [...beginnercopy, course];
        } else if (course.level == "intermediate") {
          intermediateCopy = [...intermediateCopy, course];
        } else if (course.level == "expert") {
          expertCopy = [...expertCopy, course];
        }
      });

      const sorteddata = sortdata(filteredcourses);
      setbeginnerCourse(beginnercopy);
      setintermediateCourse(intermediateCopy);
      setexpertCourse(expertCopy);
      setFilteredallCourses(sorteddata);
    }
  };

  const filterLevel = (courses: any) => {
    let beginnercopy: any = [];
    let intermediateCopy: any = [];
    let expertCopy: any = [];
    courses?.forEach((course: any) => {
      if (course.level == "beginner") {
        beginnercopy = [...beginnercopy, course];
      } else if (course.level == "intermediate") {
        intermediateCopy = [...intermediateCopy, course];
      } else if (course.level == "expert") {
        expertCopy = [...expertCopy, course];
      }
    });
    setbeginnerCourse(beginnercopy);
    setintermediateCourse(intermediateCopy);
    setexpertCourse(expertCopy);
  };
  useEffect(() => {
    try {
      if (authState.access_token) {
        //if (true) {
        const courseListPromise = restClient.getCall(
          ///ProdConfiguration.PROD_COURSE_URL + "/courses/",
          ProdConfiguration.PROD_COURSE_URL + "/team-courses/",
          //ProdConfiguration.PROD_COURSE_URL + "/tmp/courses/",
          authState.access_token
        );
        console.log("courseListPromise", courseListPromise);
        courseListPromise
          .then((courseData) => {
            console.log("courseListPromise inside", courseListPromise);

            const response: any = courseData as CourseResponse;
            //this if throws error, and catch executes if below line is true
            if (
              response.hasOwnProperty("error") &&
              (response("error") === "unauthorized" ||
                response("error") === "invalid_grant")
            ) {
            }
            //if(response.hasOwnProperty('error')&&(response('error')==='unauthorized'|| response('error')==='invalid_grant')){
            // localStorage.removeItem('access_token');
            // localStorage.removeItem('refresh_token');
            // localStorage.removeItem('user');
            // localStorage.removeItem('menuItems');

            // props.history.push("/")
            //}
            setallCourses(response?.result);
            filterLevel(response?.result);
          })
          .catch((e) => {
            dispatch({ type: "TOKEN", payload: "" });
            //localStorage.removeItem('user')
            // localStorage.setItem('menuItems',JSON.stringify(defaultMenuItems))
            // // dispatch(actions.storeMenuItems(defaultMenuItems));

            // localStorage.removeItem('access_token');
            // localStorage.removeItem('refresh_token');
            // localStorage.removeItem('user');
            // localStorage.removeItem('menuItems');
            // props.history.push("/")
          });
      } else {
        const courseListPromise = restClient.getCall(
          //ProdConfiguration.PROD_COURSE_URL + "/public/courses/4234"
          ProdConfiguration.PROD_COURSE_URL + "/public/courses/"
        );
        console.log("response token ourtsise token", courseListPromise);

        courseListPromise.then((courseData) => {
          const response: any = courseData as CourseResponse;
          console.log("response token", response);
          if (!response) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("user");
            localStorage.removeItem("menuItems");
            props.history.push("/");
          }
          setallCourses(response?.result);
          filterLevel(response?.result);
        });
      }
    } catch (e) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
      localStorage.removeItem("menuItems");
      props.history.push("/");
    }
  }, []);
  const mapDispatch = (stateType: string, payload: any) => {
    dispatch({ type: stateType, payload: payload });
  };
  const clickHandler = (course: any) => {
    let coursename = course.type.split(" ").join("-").toLowerCase();
    let courseId = course.courseId;
    localStorage.setItem("selectedCourseId", courseId);
    props.history.push(`/course/${coursename}/${course.level}`);
  };
  return (
    <div className="no-scroll">
      {/* <NavBar /> */}
      <div className="">
        {window.location.pathname !== "/logout" && <NavBar />}
        {window.location.pathname !== "/logout" && (
          <section id="inner-headline">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="pageTitle">
                    Courses
                  </h2>
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="course-division">
          {showFilter ? (
            <div className="side-filter">
              <div className="filter-heading">
                <span>
                  <strong>Filter Courses </strong>
                </span>
                <span style={{ textAlign: "end" }} onClick={showSideFilter}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </div>
              <div className="filter-items">
          
                {userRole === "ROLE_PUBUSER" ? (
                  <div
                    className={
                      type === "FREE COURSES"
                        ? "type-style selected-course"
                        : "type-style"
                    }
                    //className="type-style"
                    onClick={() => filterCourses("FREE COURSES")}
                  >
                    FREE COURSES
                  </div>
                ) : (
                  " "
                )}
                {Array.from(new Set(allCourses?.map((dt: any) => dt.type))).map(
                  (type1: any) => {
                    return (
                      <div
                        className={
                          type == type1
                            ? "type-style selected-course"
                            : "type-style"
                        }
                        onClick={() => filterCourses(type1)}
                      >
                        {type1}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          ) : (
            <div onClick={showSideFilter} className="filter-icon">
              <FontAwesomeIcon icon={faFilter} />
            </div>
          )}
          <div className="filtered-courses">
            {" "}
            <div className="video_heading">
  
              {authState && (
                <h2 style={{ marginBottom: "20px" }}>
                  Let's Start learning, {authState.name}
                </h2>
              )}
              <h2 style={{ marginBottom: "20px" }}> Our Top Courses</h2>
              <p style={{ marginBottom: "20px !important" }}>
                Upskill Your Career with Expert Technologies.{" "}
              </p>
            </div>
            {/* //////////////// */}
            <div>
              {type === "FREE COURSES" && !authState ? (
                <div>
                  <h2>Sign up for free to start Learning.</h2>
                  <Link to="/signup">
                    {" "}
                    <button className="create-new-acc">Create Account</button>
                  </Link>{" "}
                </div>
              ) : null}
            </div>
            <div className="container-fluid proj-bottom">
              <div>
                {type.length > 0 &&
                  filteredallCourses?.map((course: any) => {
                    return (
                      <div
                        className="col-md-4 col-sm-6 fh5co-project animate-box"
                        //  data-animate-effect="fadeIn"
                        key={course.courseId}
                      >
                        <CustomPopover course={course}>
                          <p
                            onClick={() => clickHandler(course)}
                            className="add-mar"
                          >
                            <img
                              src={course.img}
                              alt="#"
                              className="img-responsive"
                            />
                            <div className="courses-down-content">
                              <h3 className="rating-left">{course.title}</h3>
                              <div className="rating-left">
                                <FontAwesomeIcon icon={faClock} />{" "}
                                {`${course.hours || "12"} hours`}
                              </div>
                        
                            </div>
                          </p>
                        </CustomPopover>
                      </div>
                    );
                  })}
              </div>
              <div className="courses">
                <div className="heading-level">
                  {/* if courses filtred, show all courses */}
                  {type.length === 0 && <h2 className="level">Beginner</h2>}
                  <Link to=''
                </div>
                <div className="course-align">
                  {type.length === 0 &&
                    (beginnerCourse.length > 0 ? (
                      beginnerCourse?.map((course: any) => {
                        return (
                          <div
                            className="each-course"
                            data-animate-effect="fadeIn"
                            key={course.courseId}
                          >
                            <CustomPopover course={course}>
                              <p
                                onClick={() => clickHandler(course)}
                                className="add-mar"
                              >
                                <img
                                  src={course.img}
                                  alt="#"
                                  className="img-responsive"
                                />
                                <div className="courses-down-content">
                                  <h3 className="rating-left">
                                    {course.title}
                                  </h3>
                                  <div className="rating-left">
                                    <FontAwesomeIcon icon={faClock} />{" "}
                                    {`${course.hours || "12"} hours`}
                                  </div>
                            
                                </div>
                              </p>
                            </CustomPopover>
                          </div>
                        );
                      })
                    ) : (
                      <p>No Courses under this category</p>
                    ))}
                </div>
              </div>

              <div className="courses">
                <div className="heading-level">
                  {/* if courses filtred, show all courses */}
                  {type.length === 0 && <h2 className="level" id='Inter'>Intermediate</h2>}
                </div>
                <div className="course-align">
                  {type.length === 0 &&
                    (intermediateCourse.length > 0 ? (
                      intermediateCourse?.map((course: any) => {
                        return (
                          <div
                            className="each-course"
                            data-animate-effect="fadeIn"
                            key={course.courseId}
                          >
                            <CustomPopover course={course}>
                              <p
                                onClick={() => clickHandler(course)}
                                className="add-mar"
                              >
                                <img
                                  src={course.img}
                                  alt="#"
                                  className="img-responsive"
                                />
                                <div className="courses-down-content">
                                  <h3 className="rating-left">
                                    {course.title}
                                  </h3>
                                  <div className="rating-left">
                                    <FontAwesomeIcon icon={faClock} />{" "}
                                    {`${course.hours || "12"} hours`}
                                  </div>
                                </div>
                              </p>
                            </CustomPopover>
                          </div>
                        );
                      })
                    ) : (
                      <p>No Courses under this category</p>
                    ))}
                </div>
              </div>

              <div className="courses">
                <div className="heading-level">
                  {type.length === 0 && <h2 className="level">Expert</h2>}
                </div>
                <div className="course-align">
                  {type.length === 0 &&
                    (expertCourse.length > 0 ? (
                      expertCourse?.map((course: any) => {
                        return (
                          <div
                            className="each-course"
                            data-animate-effect="fadeIn"
                            key={course.courseId}
                          >
                            <CustomPopover course={course}>
                              <p
                                onClick={() => clickHandler(course)}
                                className="add-mar"
                              >
                                <img
                                  src={course.img}
                                  alt="#"
                                  className="img-responsive"
                                />
                                <div className="courses-down-content">
                                  <h3 className="rating-left">
                                    {course.title}
                                  </h3>
                                  <div className="rating-left">
                                    <FontAwesomeIcon icon={faClock} />{" "}
                                    {`${course.hours || "12"} hours`}
                                  </div>
                                </div>
                              </p>
                            </CustomPopover>
                          </div>
                        );
                      })
                    ) : (
                      <p>No Courses under this category</p>
                    ))}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default withRouter(LMSMain);
