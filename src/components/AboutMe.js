import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import AboutMeProfilePhoto from "../assets/AboutMeProfilePhoto.jpg";
import IconEmail from "../assets/IconEmail.svg";
import IconLinkedin from "../assets/IconLinkedin.svg";
import IconLocation from "../assets/IconLocation.svg";
import IconGitHub from "../assets/IconGitHub.svg";

const AboutMe = () => {
  const [visibleGA, setVisibleGA] = useState(true);
  const [visibleNCS, setVisibleNCS] = useState(false);
  const [visibleNUS, setVisibleNUS] = useState(false);

  const handleGAButtonClick = () => {
    setVisibleGA(true);
    setVisibleNCS(false);
    setVisibleNUS(false);
  };

  const handleNCSButtonClick = () => {
    setVisibleGA(false);
    setVisibleNCS(true);
    setVisibleNUS(false);
  };

  const handleNUSButtonClick = () => {
    setVisibleGA(false);
    setVisibleNCS(false);
    setVisibleNUS(true);
  };

  return (
    <div id="about-me">
      <div className="container" style={{ height: "150vh" }}>
        <div className="row">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-2 d-flex align-items-center justify-content-center">
                <img
                  src={AboutMeProfilePhoto}
                  className="rounded-circle"
                  width={100}
                  alt="about-me-profile-photo"
                />
              </div>
              <div className="col-1">
                <ul style={{ listStyle: "none" }}>
                  <li style={{ paddingBottom: "5px" }}>
                    <Button
                      href="https://www.linkedin.com/in/azheem/"
                      variant="light"
                      size="sm"
                    >
                      <img src={IconLinkedin} alt="linkedin-icon" />
                    </Button>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Button
                      href="https://github.com/azheem-rahman"
                      variant="light"
                      size="sm"
                    >
                      <img src={IconGitHub} alt="github-icon" />
                    </Button>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Button variant="light" size="sm">
                      <img src={IconEmail} alt="email-icon" />
                    </Button>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Button variant="light" size="sm">
                      <img src={IconLocation} alt="location-icon" />
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul style={{ listStyle: "none" }}>
                  <li style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                    Azheem Rahman
                  </li>
                  <li style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                    azheem-rahman
                  </li>
                  <li style={{ paddingTop: "7px", paddingBottom: "5px" }}>
                    azheem.rahman@gmail.com
                  </li>
                  <li style={{ paddingTop: "10px", paddingBottom: "5px" }}>
                    Singapore
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h4>
                <span style={{ backgroundColor: "#2E5A88" }}>About Me</span>
              </h4>
              <p>
                Hello! My name is Azheem and I enjoy seeing my creations come to
                life.
              </p>
              <p>
                My journey in web development started when I stumbled upon The
                Odin Project and without realising, I was spending hours deeply
                engrossed in learning how to code.
              </p>
              <p>
                Prior to that, my first job out of university was as
                Infrastructure Engineer, where I learnt about computer systems
                architecture. In university, I majored in Mechanical Engineering
                where my final year project focused on Computational Fluid
                Dynamics in studying the airflow within the engine bay of a
                Wing-in-Ground Aircraft.
              </p>
              <p>Join me in my journey and see my projects below!</p>
            </div>
            <br />
            <div className="row">
              <h4>
                <span style={{ backgroundColor: "#2E5A88" }}>My Journey</span>
              </h4>
              <div className="col-2 d-flex align-self-center">
                <ButtonGroup vertical className="gap-2">
                  <Button variant="outline-light" onClick={handleGAButtonClick}>
                    GA
                  </Button>
                  <Button
                    variant="outline-light"
                    onClick={handleNCSButtonClick}
                  >
                    NCS
                  </Button>
                  <Button
                    variant="outline-light"
                    onClick={handleNUSButtonClick}
                  >
                    NUS
                  </Button>
                </ButtonGroup>
              </div>
              <div className="col">
                <div className={visibleGA ? "GA" : "d-none"}>
                  <h5>Software Engineering Immersive Programme Graduate</h5>
                  <h6>
                    <i>General Assembly</i>
                  </h6>
                  <h6>Aug 2022 - Nov 2022</h6>
                  <ul style={{ padding: "0px" }}>
                    <li>
                      Full-stack web development, with strong focus on
                      project-based learning and group programming
                    </li>
                    <li>
                      Technologies learnt: Git, HTML, CSS, JavaScript, ReactJS,
                      Express, MongoDB, PostgreSQL, Python, Django
                    </li>
                  </ul>
                </div>
                <div className={visibleNCS ? "NCS" : "d-none"}>
                  <h5>Infrastructure Engineer</h5>
                  <h6>
                    <i>NCS Pte Ltd</i>
                  </h6>
                  <h6>Oct 2021 - May 2022</h6>
                  <ul style={{ padding: "0px" }}>
                    <li>
                      Attached to the System Administrator team while also
                      undergoing trainings focused on virtualisation technology
                    </li>
                    <li>
                      Certifications attained: Microsoft Azure Fundamentals,
                      Citrix Virtual Apps and Desktops Service on Citrix Cloud
                    </li>
                  </ul>
                </div>
                <div className={visibleNUS ? "NUS" : "d-none"}>
                  <h5>Undergraduate Student</h5>
                  <h6>
                    <i>National University of Singapore</i>
                  </h6>
                  <h6>Aug 2017 - Jun 2021</h6>
                  <ul style={{ padding: "0px" }}>
                    <li>
                      Attained Bachelor of Engineering (Mechanical Engineering)
                      with Honours (Merit)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
