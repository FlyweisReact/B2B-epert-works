/** @format */

import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, withRouter } from "react-router-dom";
import "../../assets/LMSVideos.css";
import "./LMSVideos.css";
import makeStyles from "@mui/styles/makeStyles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CoursesDashBoard from "../CoursesDashBoard/CoursesDashBoard";
import { RootState } from "../../redux/reducers/index";
import { CourseSectionResponse } from "../../util/restConstants";
import Navbar from "../Header/Navbar/Navbar";
import ProgressBar from "../ProgressBar/ProgressBar";
import { RestClient } from "../../util/RestClient";
import { ProdConfiguration } from "../../util/restConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CurrentVideoElement } from "../../util/ComponentInterfaces";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: "bold",
    lineHeight: "1.43em",
  },
  blurImage: {
    filter: "blur(0.9px)",
  },
}));

let currentVideoSectionID: any;

let currentVideo: CurrentVideoElement;
const Clappr = require("clappr");
let subSections: any = [];
// let subSections = []
let counter: number = 0;
let courseCounter: number = 0;
let player: any;
let firstVideoLink: string = "";
let playerPoster: string = "";
let courseId: string;
let sectionId: string;
let currentVideoElements: CurrentVideoElement[] = [];
const LMSVideos: React.FC = (props: any) => {
  let restClient: RestClient = new RestClient();
  const [error, seterror] = useState("");
  const [coursePercentageCompleted, setcoursePercentageCompleted] =
    useState<number>(0);
  const [showResources, setshowResources] = useState(false);
  const [flag, setFlag] = useState(false);
  const [offset, setoffset] = useState<number>(0);
  const [courseSectionData, setcourseSectionData] = useState<
    CourseSectionResponse[] | []
  >([]);
  const classes = useStyles();
  const playerParent = useRef(null);
  //let videoData: any = useSelector((state: RootState) => state.video);

  let authState: any = useSelector((state: RootState) => state.authToken);
  let [state, setState] = useState(counter);
  const [videoData, setVideoData] = useState({});

  const onEndedMethod = async (courseId: any) => {
    const payload: any = {
      userId: authState.userId,
      courseId: courseId,
      vid: currentVideoSectionID,
      status: "completed",
    };
    if (authState.access_token) {
      let response: any = await restClient.postCall(
        ProdConfiguration.PROD_COURSE_URL + "/video/status",
        JSON.stringify(payload),
        authState.access_token
      );
      if (response.message === "success") {
        setFlag(!flag);
      }
    }
  };

  // Events.PLAYBACK_ENDED = 'playback:ended'
  const playVideo = (currentVideoElement: CurrentVideoElement) => {
    const playVideoWithSrc = () => {
      currentVideo = currentVideoElement;
      currentVideoSectionID = currentVideo.sectionId;
      const id: any = currentVideo.sectionId.split("S#");

      try {
        if (authState.access_token || currentVideoElement.currentVideoLink)
          player.load(currentVideoElement.currentVideoLink, "video/mp4", true);
        else {
          notify();
          player.stop(currentVideoElement.currentVideoLink, "video/mp4", true);
        }
      } catch (e: any) {
        console.log(e);
        seterror(e);
      }
    };
    return playVideoWithSrc;
  };

  const playAnother = (offset: number) => {
    if (
      currentVideo.currentIndex + offset > 0 &&
      currentVideo.currentIndex + offset < currentVideoElements.length
    ) {
      playVideo(currentVideoElements[currentVideo.currentIndex + offset])();
      setoffset(offset === currentVideoElements.length - 1 ? 0 : ++offset);
    }
  };

  const notify = () =>
    toast.info("Please visit the pricing page to subscribe it");
  const getVideoData = async () => {
    const courseId: any = localStorage.getItem("selectedCourseId");

    if (authState.access_token) {
      const videoListPromise = restClient.getCall(
        ProdConfiguration.PROD_COURSE_URL + "/tmp/courses/" + courseId,
        authState.access_token
      );
      videoListPromise.then((videoData) => {
        const response = videoData as CourseSectionResponse;
        renderVideo(response);
      });
    } else {
      const videoListPromise = restClient.getCall(
        ProdConfiguration.PROD_COURSE_URL + "/public/courses/" + courseId
      );
      videoListPromise.then((videoData) => {
        const response = videoData as CourseSectionResponse;
        renderVideo(response);
      });
    }
  };

  const renderVideo = (videoData: any) => {
    setVideoData(videoData);
    try {
      if (videoData.result) {
        let counter: number = 0;
        let videoElement: CurrentVideoElement;
        setcoursePercentageCompleted(videoData.result.percentage);
        videoData.result.sections.forEach((section: any, index: number) => {
          courseId = section.courseId;
          sectionId = section.sk;
          currentVideoSectionID = section.sk;
          if (section.videoLinks) {
            let courseSection: any = [];

            setcourseSectionData(section);

            section.videoLinks.forEach((videoLink: any) => {
              videoElement = {
                currentVideoLink: videoLink.url,
                sectionId: section.sk,
                currentIndex: counter,
              };
              console.log(videoElement, "ve");
              if (!firstVideoLink || firstVideoLink === "") {
                firstVideoLink = videoLink.url;
                currentVideo = videoElement;
                playerPoster = videoLink.img;
              }
              currentVideoElements.push(videoElement);
              courseSection.push(
                <div
                  className="courseSection-sub-box"
                  key={"" + ++courseCounter}
                >
                  <span
                    style={{
                      position: "fixed",
                      visibility: "hidden",
                      top: "0px",
                      left: "0px",
                    }}
                  ></span>
                  <span
                    aria-hidden="true"
                    className="section-section-expand "
                  ></span>
                  {section?.type !== "doc" ? (
                    <div
                      onClick={playVideo(videoElement)}
                      className="thumbnail_content item_selected"
                      data-position="1"
                    >
                      <div>
                        <input
                          type="checkbox"
                          disabled
                          checked={section.completed}
                          style={{}}
                        />
                      </div>
                      <div className="thumbnail_img">
                        <a aria-hidden="true">
                          <img
                            src={videoLink.img}
                            alt=""
                            width="180"
                            height="73"
                          ></img>
                        </a>
                      </div>
                      <div className="thumbnail_description">
                        <div>
                          <div>
                            <h3 className="maininfo">
                              <a title="East">{videoLink.title}</a>
                            </h3>
                            <div>
                              <span className="subinfo">
                                <a>{videoLink.subtitle}</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  ) : null}

                  {videoLink.resourceLinks.length > 0 && (
                    <>
                      {" "}
                      <div
                        className="resources"
                        onClick={(e) => {
                          // e.stopPropagation();
                          setshowResources(!showResources);
                        }}
                      >
                        Resources{" "}
                        <span>
                          <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                      </div>
                      {true ? (
                        <div>
                          {videoLink.resourceLinks.map((resource: any) => (
                            <div className="resources-items">
                              <a
                                href={resource.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {resource.title}
                              </a>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              );
            });

            subSections.push(
              <Accordion
                className={
                  authState.access_token || index <= 2 ? "" : classes.blurImage
                }
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="new"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.4rem" }}
                    key={"" + ++courseCounter}
                  >
                    {section.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="courseSection">
                      {courseSection}{" "}
                      {console.log("courseSection", courseSection)}{" "}
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
            counter = counter + 1;
            // setState(++counter);
          }
        });
      }
      player = new Clappr.Player({
        parentId: "#dynamic_video",
        //parentId: sectionId,
        source: firstVideoLink,
        width: "100%",
        height: "100%",
        autoPlay: true,
        hlsjsConfig: {
          enableWorker: true,
        },
        events: {
          onEnded: () => onEndedMethod(courseId),
        },
        poster: playerPoster,
      });
      player.load(firstVideoLink, "video/mp4", true);
    } catch (e) {
      alert("something went wrong");
    }
  };
  useEffect(() => {
    subSections = [];

    getVideoData();

    return () => {
      if (player && player.isPlaying()) {
        player.stop();
      }
      firstVideoLink = "";
    };
  }, []);

  const history = useHistory();

  return (
    <div className="mainDivVideos no-scroll">
      <Navbar />
      {error}
      <ToastContainer position="top-center" />

      <div className="flex-container">
        <div className="rightBar">
          <p style={{ fontSize: "2rem" }}>Python Beginner</p>
          <div className="player_section">
            <div
              className="video-dimension"
              ref={playerParent}
              id="dynamic_video"
            ></div>
            <span className="right-arrow" onClick={() => playAnother(1)}>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </span>
            <div className="courseInfo"></div>
          </div>

          {Object.keys(videoData).length > 0 && (
            <CoursesDashBoard subSections={subSections} videoData={videoData} />
          )}
        </div>

        <div className="sidebar">
          <h2 className="courseContent">
            {" "}
            Course Content{" "}
            <select
              style={{ width: "200px", outline: "none" }}
              onChange={() => history.push("/courses")}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>{" "}
          </h2>

          <ProgressBar timervalue={coursePercentageCompleted} maxValue={10} />
          <span style={{ fontSize: "14px" }}>
            <strong>
              {authState.access_token &&
                `${(coursePercentageCompleted * 100).toFixed(0)} % Completed`}
            </strong>{" "}
          </span>
          <div className="content_description" aria-label="Related Clips">
            {subSections}
          </div>
          <div className="content_description" aria-label="Related Clips">
          {videoData?.result?.sections?.map((i , index) => (
                    <Accordion
                    className={
                      authState.access_token || index <= 2 ? "" : classes.blurImage
                    }
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="new"
                    >
                      <Typography
                        className={classes.heading}
                        style={{ fontSize: "1.4rem" }}
                        key={"" + ++courseCounter}
                      >
                       {i.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className="courseSection">



                        <div
                  className="courseSection-sub-box"
                  // key={"" + ++courseCounter}
                >
                  <span
                    style={{
                      position: "fixed",
                      visibility: "hidden",
                      top: "0px",
                      left: "0px",
                    }}
                  ></span>
                  <span
                    aria-hidden="true"
                    className="section-section-expand "
                  ></span>
                  {/* {section?.type !== "doc" ? ( */}
                    <div
                      // onClick={playVideo(videoElement)}
                      className="thumbnail_content item_selected"
                      data-position="1"
                    >
                      <div>
                        <input
                          type="checkbox"
                          disabled
                          // checked={section.completed}
                          style={{}}
                        />
                      </div>
                      <div className="thumbnail_img">
                        <a aria-hidden="true">
                          <img
                            src={videoLink.img}
                            alt=""
                            width="180"
                            height="73"
                          ></img>
                        </a>
                      </div>
                      <div className="thumbnail_description">
                        <div>
                          <div>
                            <h3 className="maininfo">
                              <a title="East">{videoLink.title}</a>
                            </h3>
                            <div>
                              <span className="subinfo">
                                <a>{videoLink.subtitle}</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>


                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LMSVideos);
