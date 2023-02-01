import React, { useState } from "react";
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
// import { AuthContext } from "../context/AuthContextProvider";

const SignIn = () => {
  // const { isLogin } = useContext(AuthContext);
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    validation();
    console.log(isSubmit);
  };
  const error = {};
  const handleLogin = (e) => {
    e.preventDefault();
    if (!isSubmit) {
      alert("log in failed ");
    } else {
      alert("loge in successfull");
    }
    console.log(isSubmit);
  };
  const validation = () => {
    if (!formValues.email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
      error.email = "Email is not valid";
    }
    if (
      !formValues.password.match(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
      )
    ) {
      error.password = "password is too weak";
    }
    setFormErrors(error);

    return setisSubmit(true);
  };

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

                  <form onSubmit={handleLogin}>
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
                      />
                      <span>
                        {formErrors.password ? (
                          <p>{formErrors.password}</p>
                        ) : (
                          ""
                        )}
                      </span>
                      {/* <label className="form-label" for="form3Example4">
                        Password
                      </label>
                      <p>{formErrors.password}</p> */}
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
                      {/* <Link to="/"> */}
                      <button
                        type="button"
                        className={classes.SignInBtn}
                        onClick={handleLogin}
                        // style={{
                        //   paddingLeft: `2.5rem`,
                        //   paddingRight: `2.5rem`,
                        //   height: "40px",
                        //   paddingBottom: `40px`,
                        //   marginBottom: `10px`,
                        //   marginRight: `20px`,
                        //   fontSize: `21px`,
                        // }}
                      >
                        Login
                      </button>
                      <br />
                      {/* </Link> */}
                      <span className={classes.spanRegister}>
                        Don't have an account?
                        <Link to={"./SignUp"} className="link-danger">
                          Register
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

          {/* <!-- Copyright --> */}

          {/* <!-- Copyright -->

    <!-- Right --> */}

          {/* <!-- Right --> */}
        </section>
      </div>
    </>
  );
};

export default SignIn;
