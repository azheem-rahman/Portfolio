import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar variant="dark" expand="sm">
        <Container className="align-middle">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About Me</Nav.Link>
              <Nav.Link>Projects</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1OCmNJwYmBL99OXM_wobIMT-L7jkQvyE8/view?usp=sharing">
                <Button variant="outline-light" size="sm">
                  Resume
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
