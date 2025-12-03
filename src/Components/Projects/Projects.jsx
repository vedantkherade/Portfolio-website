import React from "react";
import "./Projects.css";
import weather_img from "../../assets/weather-app.png";
import education_img from "../../assets/education-website.png";
import spotify_img from "../../assets/spotify-clone.png";
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
                  <img
                    src={weather_img}
                    alt="Weather-img"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather Dashboard</h2>
                <p>
                An interactive weather dashboard web application
                that provides real-time weather updates including temperature, humidity, current weather information,
                wind speed and forecasts.
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
                  <img
                    src={education_img}
                    alt="Education-website"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Education Website</h2>
                <p>
                A dynamic, user-friendly education website designed to offer 
                interactive learning experiences for students, featuring admin 
                functionalities for course creation, editing, and deletion.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiPhp />
                  <SiMysql />
                </div>
                <div>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  <img
                    src={spotify_img}
                    alt="spoify-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Spotify Clone</h2>
                <p>
                  Spotify is a music streaming web application that allows 
                  users to stream and discover music seamlessly. 
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
