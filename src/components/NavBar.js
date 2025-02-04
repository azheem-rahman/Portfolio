import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <Navbar
        fixed="top"
        variant="dark"
        expand="sm"
        style={{ background: "#161c2d" }} /* navbar background colour */
      >
        <Container className="align-middle">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <HashLink
                className={styles.HashLink}
                to="#"
                style={{ textDecoration: "none" }}
              >
                Home
              </HashLink>
              <HashLink
                className={styles.HashLink}
                to="#about-me"
                style={{ textDecoration: "none" }}
              >
                About Me
              </HashLink>
              <HashLink
                className={styles.HashLink}
                to="#portfolio"
                style={{ textDecoration: "none" }}
              >
                Projects
              </HashLink>
              <a
                href="https://drive.google.com/file/d/1OCmNJwYmBL99OXM_wobIMT-L7jkQvyE8/view?usp=sharing"
                className={styles.HashLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Resume
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
