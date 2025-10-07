import React from "react";
import './css/Navbar.css';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation({person}) {
  return (
    <Navbar className="navbar" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          {person.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Project</Nav.Link>
            <Nav.Link as={NavLink} to="/books">Books</Nav.Link>
            <Nav.Link as={NavLink} to="/experience">Experience</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
