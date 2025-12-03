import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/vedant-photo.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Vedant Kherade </span> from{" "}
                <span className="different">
                  {" "}
                  Chiplun, Maharashtra (India)
                </span>
                . I had recently completed my Bachelor's degree in 
                {" "}
                <span className="different">
                Computer Engineering  {" "}
                </span>
                 from Gharda Institute of Technology, Khed (MH).{" "}
                <span className="different"></span> 
              
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Explorer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Designer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Fitness enthusiast{" "}
              </h4>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
