import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import classes from "./Header.module.css";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const link = {
    color: "white",
    textDecoration: "none",
    margin: "0 20px",
  };
  return (
    <>
      <Navbar variant="dark" bg="primary" className={classes.mainNavbar}>
        <Container>
          <Navbar.Brand className={classes.icon} to="#home">
            My Records
          </Navbar.Brand>
          <Nav className={classes.pages}>
            <Link to="home" style={link}>
              Home
            </Link>
            <Link to="Records" style={link}>
              Records
            </Link>
            <Link to="Services" style={link}>
              Services
            </Link>
            <Link to="ContactUs" style={link}>
              Contact us
            </Link>
          </Nav>
          <div className={classes.log}>
            <Link to="SignUp">
              <button type="button" class="btn btn-outline-info">
                Sign In
              </button>
            </Link>
            <span className={classes.space}>space </span>
            <Link to="SignIn">
              <button type="button" className="btn btn-outline-info">
                Sign Up
              </button>
            </Link>
            <span to="/" className={classes.userLogo}>
              <FaUserCircle />
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
