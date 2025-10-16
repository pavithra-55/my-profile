import React, { useState } from "react";
import './css/Navbar.css';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import DarkLightToggle from "./DarkLightToggle";

export default function Navigation({ person }) {
  const [expended, setExpended] = useState(false);

  const handleNavLinkClick = () => {
    setExpended(false);
  };


  return (
    <Navbar className="navbar" expand="lg" fixed="top" expanded={expended} onToggle={()=>setExpended(!expended)}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          {person.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/skills">Skills</Nav.Link>
            <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/projects">Project</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/books">Books</Nav.Link> */}
            <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/experience">Experience</Nav.Link>
            <Nav.Link as={NavLink} onClick={handleNavLinkClick} to="/contact">Contact</Nav.Link>
          </Nav>&nbsp;&nbsp;&nbsp;
          <DarkLightToggle onClick={handleNavLinkClick}/>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}
