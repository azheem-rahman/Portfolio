import React from "react";
import { Button } from "react-bootstrap";

import AboutMeProfilePhoto from "../assets/AboutMeProfilePhoto.jpg";

import styles from "./AboutMe.module.css";

import NUSLogo from "../assets/NUSLogo.png";
import NCSLogo from "../assets/NCSLogo.png";
import GeneralAssemblyLogo from "../assets/GeneralAssemblyLogo.png";
import GoodHubSEALogo from "../assets/GoodHubSEALogo.png";
import JanioLogo from "../assets/JanioLogo.png";

const AboutMe = () => {
  const timelineItems = [
    {
      name: "Janio",
      logo: JanioLogo,
      title: "Full Stack Developer",
      date: "Aug 2023 - Nov 2024 (Contract)",
      description: [
        "Developed and maintained internal web apps (React, TypeScript, Ant Design), streamlining workflow for commercial team",
        "Implemented unit tests (Jest, React Testing Library) with 95%+ test coverage, reducing bugs and improving system reliability",
        "Designed and built RESTful APIs (Golang, Gin, Gorm) for multiple projects, enabling efficient data retrieval and CRUD operations for internal users",
        "Developed a data ingestion API to process incoming client data and integrate it with delivery partners, improving data consistency and reducing manual intervention",
        "Built and maintained microservices, applying concurrency features and object-oriented principles. Gained hands-on experience in Docker/Kubernetes for containerised deployments",
        "Deployed applications to AWS (DynamoDB, S3, API Gateway, Lambda Functions) and monitored logs via CloudWatch for debugging and performance optimisation",
      ],
    },
    {
      name: "GoodHubSEA",
      logo: GoodHubSEALogo,
      title: "Software Engineer (Volunteer)",
      date: "Jun 2023 - Present",
      description: [
        "Developed core frontend features (React, TypeScript, TailwindCSS, Zustand) for SEAmatcher, a social platform allowing users to sign up, post in forums, comment, like, and send friend requests",
        "Designed and implemented a scalable backend (Express, TypeScript, PostgreSQL, Prisma ORM) to manage user authentication, authorisation, forum interactions, profile management (editing profile info), and directory features (find and send friend requests)",
        "Integrated Google Authentication for seamless user login and signup",
        "Implemented email OTP verification, password encryption (bcrypt), and JWT-based authentication, ensuring secure user access and data protection",
      ],
    },
    {
      name: "GA",
      logo: GeneralAssemblyLogo,
      title: "Student (Software Engineering Immersive Programme, Full-Time)",
      date: "Aug 2023 - Nov 2024",
      description: [
        "Intensive training in full-stack web development with a project-based approach",
        "Developed frontend applications using React, JavaScript, and CSS",
        "Built RESTful APIs with Express.js and integrated them with MongoDB and PostgreSQL databases",
      ],
    },
    {
      name: "NCS",
      logo: NCSLogo,
      title: "Infrastructure Engineer (Virtualisation)",
      date: "Oct 2021 - May 2022",
      description: [
        "Underwent intensive training in virtualisation technology (VMware) and Windows Server OS",
        "Rotated into client’s System Administration team, handling server maintenance, incident management, and system optimisation",
        "Certifications attained: Microsoft Azure Fundamentals, Citrix Virtual Apps and Desktops Service on Citrix Cloud",
      ],
    },
    {
      name: "NUS",
      logo: NUSLogo,
      title: "Undergraduate Student",
      date: "Aug 2017 - Jun 2021",
      description: [
        "Bachelor of Engineering (Mechanical Engineering) with Honours (Merit)",
        "Final Year Project: Collaborated with WigetWorks to investigate airflow within the engine bay of the AirFish 8 using Computational Fluid Dynamics (CFD) simulations (STAR-CCM+)",
        "Explored the use of Porous Media Approach to simplify radiator fin structure, improving project efficiency by reducing computational time and power required for simulations",
        "Proved the need for increased airflow through the engine bay during taxiing and highlighted the importance of using fans to drive airflow, especially at lower speeds",
      ],
    },
  ];

  return (
    <div id="about-me">
      <div
        className="container"
        style={{
          minHeight: "100vh",
          paddingTop: "10vh",
          display: "grid",
        }}
      >
        <div className="row align-items-center d-flex flex-column flex-lg-row">
          {/* Grouped Column */}
          <div className="d-flex justify-content-center pb-4 col-12 col-lg-auto gap-3">
            {/* Profile Photo */}
            <div className="col-auto">
              <img
                src={AboutMeProfilePhoto}
                className="rounded-circle"
                width={150}
                alt="about-me-profile"
              />
            </div>
            {/* Name, LinkedIn, GitHub, Email Links */}
            <div className="col-auto d-flex align-items-center">
              <ul className="list-unstyled mb-0">
                <li className="pb-3">
                  <h5 className="text-nowrap">Azheem Rahman</h5>
                </li>
                <li className="d-flex gap-2">
                  <Button
                    variant="outline-light"
                    size="md"
                    href="https://www.linkedin.com/in/azheem/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline-light"
                    size="md"
                    href="https://github.com/azheem-rahman"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </Button>
                  <Button
                    variant="outline-light"
                    size="md"
                    href="mailto: azheem.rahman@gmail.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          {/* About Me Description */}
          <div className="col-12 col-md ms-lg-5">
            <h4 className="mb-4">
              <span style={{ backgroundColor: "#2E5A88" }}>About Me</span>
            </h4>
            <p align="justify">
              Hello! I'm Azheem, and I love bringing my creations to life.
            </p>
            <p align="justify">
              My software development journey started when I stumbled on a full
              stack web development programme online called The Odin Project.
              Without realising, I was spending hours engrossed in completing
              the modules.
            </p>
            <p align="justify">
              I was working then as an Infrastructure Engineer, managing virtual
              machines and servers, but soon realized my true calling was in
              software development.
            </p>
            <p align="justify">
              I left my job to dive into a full-time full-stack web development
              bootcamp at General Assembly. After graduating, I joined a
              tech-logistics startup as a Full Stack Developer.
            </p>
            <p align="justify">
              Join me on my journey and check out my projects below!
            </p>
          </div>
        </div>

        {/* My Journey */}
        <div className="row mt-5">
          <h4>
            <span style={{ backgroundColor: "#2E5A88" }}>My Journey</span>
          </h4>
          <div className="container mt-4">
            {/* each stage card */}
            <ul className={styles.timeline}>
              {timelineItems.map((item) => {
                return (
                  // each stage description point
                  <li key={item.name} className={`${styles.item} mb-5`}>
                    <div className="d-flex align-items-center">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className={styles.icon}
                      />
                      <h5>{item.title}</h5>
                    </div>
                    <p className="mb-2">{item.date}</p>
                    <ul style={{ padding: "0" }}>
                      {item.description.map((desc, index) => {
                        return (
                          <li className="ms-3" key={index}>
                            {desc}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
