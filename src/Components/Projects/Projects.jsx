import React from "react";
import "./Projects.css";
import weather_img from "../../assets/weather-app.png";
import education_img from "../../assets/education-website.png";
import spotify_img from "../../assets/spotify-clone.png";
import FinTrackr from "../../assets/FinTrackr.png";
import cryptopulse from "../../assets/cryptopulse.png";
import Spendsync from "../../assets/Spendsync.png"
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiFramer,
  SiAntdesign,
  SiFirebase,
  SiCss3,
  SiChartdotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Spendsync} alt="FinTrackr-img" />
                </div>
              </div>
              <div className="project_information">
                <h2>Spendsync</h2>
                <p>
                   Spendsync is a full-stack finance dashboard to track income, expenses, 
                   and savings with interactive charts, analytics, and recent transactions.
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs/>
                  <SiExpress/>
                  <SiMongodb/>
                  <SiTailwindcss/>
                </div>
                <div>
                  <a
                    href="https://spendsync-1wix.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vedantkherade/SpendSync"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={cryptopulse} alt="cryptopulse-img" />
                </div>
              </div>
              <div className="project_information">
                <h2>CryptoPulse</h2>
                <p>
                 CryptoPulse is a crypto monitoring platform to track live market prices 
                 in real-time with charts, analytics, and recent market trends and insights data analysis.
                </p>
                <div>
                  <FaReact />
                  <SiMaterialui />
                  <SiFramer />
                  <SiChartdotjs />
                </div>
                <div>
                  <a
                    href="https://cryptopulse-live.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vedantkherade/CryptoPulse"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

           <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={FinTrackr} alt="FinTrackr-img" />
                </div>
              </div>
              <div className="project_information">
                <h2>FinTrackr</h2>
                <p>
                  FinTrackr is a personal finance management app built with React.js, 
                  Ant Design, and Firebase, with real-time data synchronization.
                </p>
                <div>
                  <FaReact />
                  <SiAntdesign />
                  <SiFirebase />
                </div>
                <div>
                  <a
                    href="https://fintrackr-finance-tracker.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vedantkherade/FinTrackr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={weather_img} alt="Weather-img" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather Dashboard</h2>
                <p>
                  An interactive weather dashboard that provides real-time temperature, 
                  humidity, wind speed, current conditions, and weather forecasts.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://vedantkherade-weather-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vedantkherade/weather-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={education_img} alt="Education-website" />
                </div>
              </div>
              <div className="project_information">
                <h2>Education Website</h2>
                <p>
                  A dynamic education platform offering interactive learning for students 
                  with admin features for course creation, editing, and management.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiPhp />
                  <SiMysql />
                </div>
                <div>
                  <a href="" target="_blank" rel="noreferrer">
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vedantkherade/Education_website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={spotify_img} alt="spoify-Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Spotify Clone</h2>
                <p>
                  Spotify is a music streaming web application that allows users
                  to stream and discover music seamlessly.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://vedantkherade-spotify-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vedantkherade/CodeClauseInternship_MusicStreamingApplication"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
