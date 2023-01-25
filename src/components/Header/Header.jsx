import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useContext } from "react";
import classes from "./Header.module.css";
// import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

const Header = () => {
  const link1 = {
    color: "white",
    textDecoration: "none",
    margin: "0 20px",
  };
  const recordLink = {
    color: "white",
    "text-decoration": "none",
    float: "right",
    "margin-right": "440%",
    "margin-top": "5px",
    "margin-bottom": "-51px",
  };
  // isLogin, logout, login
  const { isLogin, logout, login } = useContext(AuthContext);
  const navLink = [
    {
      content: "Home",
      link: "/",
    },
    {
      content: "Services",
      link: "/services",
    },
    {
      content: "Contact us",
      link: "/ContactUs",
    },
  ];
  return (
    <>
      <Navbar variant="dark" bg="primary" className={classes.mainNavbar}>
        <Container>
          <Navbar.Brand className={classes.icon} to="#home">
            My Records
          </Navbar.Brand>
          <Nav className={classes.pages}>
            {navLink.map((nav, index) => (
              <Link to={nav.link} style={link1} key={index}>
                {nav.content}
              </Link>
            ))}
          </Nav>
          <div className={classes.log}>
            {!isLogin && (
              <div>
                {/* <Link to="/" style={link1}>
                  Home
                </Link>
                <Link to="Services" style={link1}>
                  Services
                </Link>
                <Link to="ContactUs" style={link1}>
                  Contact Us
                </Link> */}
                <Link to="SignIn">
                  <button
                    onClick={() => login()}
                    type="button"
                    class="btn btn-outline-info"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            )}
            {isLogin && (
              <div>
                <div>
                  {/* <Link to="/" style={link1}>
                    Home
                  </Link> */}
                  <Link to="Records" style={recordLink}>
                    Records
                  </Link>
                  {/* <Link to="Services" style={link1}>
                    Services
                  </Link>
                  <Link to="ContactUs" style={link1}>
                    Contact Us
                  </Link> */}
                </div>
                <div>
                  <Link to="SignUp">
                    <button
                      onClick={() => logout()}
                      type="button"
                      className="btn btn-outline-info"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            )}
            {/* <Link to="SignIn">
              <button type="button" class="btn btn-outline-info">
                Sign In
              </button>
            </Link>
            <span className={classes.space}>space </span>*/}
            {/* <Link to="SignUp">
              <button type="button" className="btn btn-outline-info">
                Sign Up
              </button>
            </Link> */}
            {/* <span to="/" className={classes.userLogo}>
              <FaUserCircle />
            </span> */}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
