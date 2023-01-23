import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import classes from "./Header.module.css";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className={classes.icon} href="#home">
            My Records
          </Navbar.Brand>
          <Nav className={classes.pages}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#My_Records">Records</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Contact_us">Contact us</Nav.Link>
          </Nav>
          <div className={classes.log}>
            <button type="button" class="btn btn-outline-info">
              Sign In
            </button>
            <span className={classes.space}>space </span>
            <button type="button" className="btn btn-outline-info">
              Sign Up
            </button>
            <span href="/" className={classes.userLogo}>
              <FaUserCircle />
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
