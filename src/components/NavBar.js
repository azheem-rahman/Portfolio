import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <h1>test</h1>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavbarBrand></NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About Me</Nav.Link>
              <Nav.Link>Portfolio</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
