import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useContext } from "react";
import classes from "./Header.module.css";
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
    "margin-right": "440px",
    "margin-top": "5px",
    "margin-bottom": "-51px",
    "margin-left": "-200px",
  };

  const { isLogin, logout } = useContext(AuthContext);
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
    {
      content: "Records",
      link: "/Records",
    },
  ];
  return (
    <>
      <Navbar variant="dark" bg="primary" className={classes.mainNavbar}>
        <Container>
          <Link className={classes.icon} to="/">
            My Records
          </Link>
          <Nav className={classes.pages}>
            {navLink.map((nav, index) => (
              <Link to={nav.link} style={link1} key={index}>
                {nav.content}
              </Link>
            ))}
          </Nav>
          <div className={classes.log}>
            {!isLogin && (
              <div className="d-flex">
                <div>
                  <Link to="SignIn">
                    <button
                      // onClick={() => login()}
                      type="button"
                      className="btn btn-outline-info mx-2"
                    >
                      Sign In
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="SignUp">
                    <button
                      // onClick={() => logout()}
                      type="button"
                      className="btn btn-outline-info"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            )}
            {isLogin && (
              <div className="d-flex">
                <div>
                  <Link to="Records" style={recordLink}>
                    Records
                  </Link>
                </div>
                <div>
                  <Link to="/SignIn">
                    <button
                      onClick={() => logout()}
                      type="button"
                      className="btn btn-outline-info"
                    >
                      Log Out
                    </button>
                  </Link>
                </div>
                {/* <div>
                  <Link to="SignIn">
                    <button
                      // onClick={() => login()}
                      type="button"
                      className="btn btn-outline-info mx-2"
                    >
                      Sign In
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="SignUp">
                    <button
                      // onClick={() => logout()}
                      type="button"
                      className="btn btn-outline-info"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div> */}
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
