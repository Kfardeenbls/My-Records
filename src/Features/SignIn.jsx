import React, { useContext, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiFillFacebook,
} from "react-icons/ai";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
// import { AuthContext } from "../context/AuthContextProvider";

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    validation();
    console.log(isEnabled);
    const emailcode = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    const passcode =
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})";
    if (
      !formValues.email.match(emailcode) ||
      !formValues.password.match(passcode)
    ) {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
    }
  };
  const error = {};

  const handleLogin = (e) => {
    e.preventDefault();
    setFormValues(initialValues);

    // if (!isSubmit) {
    //   alert("Please fill the form correctly");
    // } else if (isSubmit) {
    //   alert("loge in successfull");
    // }
    // console.log(isSubmit);
    validation();
    e.target.reset();
  };
  const validation = () => {
    if (!formValues.email) {
      error.email = "email can't be empty";
    } else if (!formValues.email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
      error.email = "Email is not valid";
    } else {
      error.email = "";
    }

    if (!error.password) {
      error.password = "";
    } else if (
      !formValues.password.match(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
      )
    ) {
      error.password = "password is not valid";
    } else {
      error.password = "password can't be empty";
    }
    setFormErrors(error);
    // console.log(formErrors);
    // if (!error.email === null && !error.password === null) {
    //   setisSubmit(false);
    // } else {
    //   setisSubmit(true);
    // }
  };
  // const enabled = (e) => {

  // };

  return (
    <>
      <div className="section animated bounceInLeft">
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
                <div>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <FaFacebook />
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-2"
                    >
                      <BsTwitter />
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <BsLinkedin />
                    </button>
                  </div>

                  <form onSubmit={() => login()}>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>

                    {/* <!-- Email input --> */}

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className={classes.SignInInputs}
                        placeholder="Enter email address"
                        required
                      />
                      {formErrors.email ? <p>{formErrors.email}</p> : ""}
                      {/* <label className="form-label" for="form3Example3">
                        Email address
                      </label> */}
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        className={classes.SignInInputs}
                        placeholder="Enter password"
                        required
                      />
                      <span>
                        {formErrors.password ? (
                          <p>{formErrors.password}</p>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      {/* <!-- Checkbox --> */}
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value="checkbox"
                        />
                        <label className="form-check-label">Remember me</label>
                      </div>
                      <Link to={"./ForgotPassword"} className="text-body">
                        Forgot password?
                      </Link>
                    </div>

                    <div className={classes.SignInBtnMainDiv}>
                      <Link to={"/"}>
                        <button
                          type="button"
                          disabled={!isEnabled}
                          onSubmit={handleLogin}
                          className={classes.SignInBtn}
                          onClick={() => login()}
                        >
                          Login
                        </button>
                      </Link>
                      <br />

                      <span className={classes.spanRegister}>
                        Don't have an account?
                        <Link to="/SignUp">
                          <span className="link-danger">Register</span>
                        </Link>
                      </span>
                      <div className={classes.SocialMedia}>
                        <Link to={"./Facebook"} className="text-white me-4">
                          <AiFillFacebook />
                        </Link>
                        <Link to={"./Gmail"} className="text-white me-4">
                          <AiFillGoogleCircle />
                        </Link>
                        <Link to={"./Twitter"} className="text-white me-4">
                          <AiFillTwitterCircle />
                        </Link>
                        <Link to={"./Github"} className="text-white">
                          <AiFillGithub />
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
