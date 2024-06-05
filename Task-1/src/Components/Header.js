import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../portfolio.png";

const Header = () => {
  let activeStyle = {
    color: "#fff",
  };

  const logoStyle = {
    filter: "invert(100%) sepia(100%) hue-rotate(180deg)", // Invert the colors of the image
  };
  return (
    <div className="header">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <img src={logo} width={200} height={50} style={logoStyle}></img>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Projects
              </NavLink>
              <NavLink
                to="/services"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Services
              </NavLink>
              <NavLink
                to="/About"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                About
              </NavLink>
              <NavLink
                to="/Contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="nav-link"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
