import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";

import BuyHDBSearchPage from "../assets/BuyHDBSearchPage.jpg";

import IRRLoginPage from "../assets/IRRLoginPage.jpg";
import IRRWorkerHome from "../assets/IRRWorkerHome.jpg";
import IRRWorkerRequestItem from "../assets/IRRWorkerRequestItem.jpg";

import ColourPopScreenshot from "../assets/ColourPopScreenshot.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container" style={{ paddingTop: "10vh" }}>
        <h2>Projects</h2>
        <div className="row">
          <div className="col">
            {/* BuyHDB Card */}
            <Card bg="dark" border="light" text="white">
              <Card.Body>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                    <img
                      className="card-img-top"
                      src={BuyHDBSearchPage}
                      alt="buyhdb-search-screenshot"
                      style={{
                        padding: "0.313rem",
                        borderRadius: "0.625rem",
                      }}
                    />
                  </div>
                  <div className="col-12 col-lg-6 align-self-center">
                    <Card.Title>
                      <span style={{ backgroundColor: "#2E5A88" }}>BuyHDB</span>
                    </Card.Title>
                    <Card.Text>
                      Full-stack web application to provide users with a general
                      idea of resale HDB market trends. Leveraged on data.gov.sg
                      API to retrieve past HDB resale transaction records.
                    </Card.Text>
                    <Card.Text>
                      <i>
                        Technologies used: ReactJS, ExpressJS, PostgreSQL,
                        Node.js, Bcrypt, JWT, Bootstrap, and MaterialsUI
                      </i>
                    </Card.Text>
                    <ButtonGroup size="sm">
                      {/* github icon link */}
                      <Button
                        variant="link"
                        size="lg"
                        href="https://github.com/azheem-rahman/BuyHDB"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <br />

            {/* ItsRainingRaincoats Card */}
            <Card bg="dark" border="light" text="white">
              <Card.Body>
                <div className="row">
                  <div className="col-12 col-lg-6 order-2 order-lg-1 align-self-center">
                    <Card.Title>
                      <span style={{ backgroundColor: "#2E5A88" }}>
                        ItsRainingRaincoats
                      </span>
                    </Card.Title>
                    <Card.Text>
                      Full-stack web application to provide a central platform
                      for seamless communication between beneficiaries, donors,
                      and volunteers.
                    </Card.Text>
                    <Card.Text>
                      <i>
                        Technologies used: ReactJS, ExpressJS, MongoDB, Node.js,
                        Bcrypt, UUID, Bootstrap
                      </i>
                    </Card.Text>
                    <div className="row">
                      <div className="col d-flex align-items-center justify-content-start">
                        {/* github icon link */}
                        <Button
                          variant="link"
                          href="https://github.com/azheem-rahman/itsrainingraincoats"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                        </Button>
                        <Card.Text>Front-End</Card.Text>
                      </div>
                      <div className="col d-flex align-items-center justify-content-start">
                        {/* github icon link */}
                        <Button
                          variant="link"
                          href="https://github.com/azheem-rahman/its-raining-raincoat-backend"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>
                        </Button>
                        <Card.Text>Back-End</Card.Text>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 order-1 order-lg-2 mb-3 mb-lg-0">
                    <div className="row">
                      <div className="col">
                        <img
                          className="card-img-top"
                          src={IRRLoginPage}
                          alt="IRR-login"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="card-img-top"
                          src={IRRWorkerHome}
                          alt="IRR-worker-home"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="card-img-top"
                          src={IRRWorkerRequestItem}
                          alt="IRR-worker-request-item"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <br />

            {/* Colour Pop Card */}
            <Card bg="dark" border="light" text="white">
              <Card.Body>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                    <img
                      className="card-img-top"
                      src={ColourPopScreenshot}
                      alt="colour-pop-screenshot"
                      style={{ padding: "0.313rem", borderRadius: "0.625rem" }}
                    />
                  </div>
                  <div className="col-12 col-lg-6 align-self-center">
                    <Card.Title>
                      <span style={{ backgroundColor: "#2E5A88" }}>
                        Colour-Pop
                      </span>
                    </Card.Title>
                    <Card.Text>
                      A simple memory game built using HTML, CSS, and Vanilla
                      JavaScript. Players given 30 seconds to remember 10
                      circles containing randomised colours and numbers and
                      another 30 seconds to input their guess by dragging,
                      dropping, and typing answers.
                    </Card.Text>
                    <ButtonGroup size="sm">
                      {/* github icon link */}
                      <Button
                        variant="link"
                        href="https://github.com/azheem-rahman/Colour-Pop"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </Button>
                      {/* website icon link */}
                      <Button
                        variant="link"
                        href="https://azheem-rahman.github.io/Colour-Pop/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-link-45deg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
