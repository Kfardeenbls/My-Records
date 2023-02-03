import React, { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContextProvider";
import classes from "./SignUp.module.css";

const SignUp = () => {
  const [inputValues, setInputValue] = useState({
    fname: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validation, setValidation] = useState({
    fname: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handle submit updates
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
    formValidation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(inputValues);
    // console.log(inputValues.confirmPassword, inputValues.password);
  };
  useEffect(() => {
    return () => {};
  }, []);
  let errors = {};
  const formValidation = () => {
    //first Name validation
    if (!inputValues.fname.trim()) {
      errors.fname = "First name is required";
    } else {
      errors.fname = "";
    }
    //last Name validation
    if (!inputValues.lName.trim()) {
      errors.lName = "Last name is required";
    } else {
      errors.lName = "";
    }

    // email validation
    const emailCond = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    //password validation
    // const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    // const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    // const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (
      !inputValues.password.match(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
      )
    ) {
      errors.password = "password is not valid";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    // const cPassword = password;
    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.password) {
      errors.password = "";
    } else {
      errors.confirmPassword = "Password does not match confirmation password";
    }
    return setValidation(errors);
  };

  return (
    <>
      <div className="section animated bounceInLeft">
        <section className={classes.mainDiv}>
          <img
            src="./assets/values-3.png"
            alt=""
            style={{ marginLeft: "4%", marginTop: "10%", width: "42%" }}
          />
          <div className={classes.formStyle}>
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold mb-5">Sign up now</h2>

                  <form onSubmit={handleSubmit}>
                    {/* <  2 column grid layout with text inputs for the first and last names   > */}
                    <div className="row">
                      <div className="col-md-6 mb-0">
                        <div className="form-outline">
                          <input
                            type="text"
                            className={classes.SignUpInput_F_L_name}
                            placeholder="First name"
                            name="fname"
                            onChange={handleChange}
                            required
                            value={inputValues.fname}
                          />
                          {validation ? (
                            <label style={{ color: "red" }}>
                              {validation.fname}
                            </label>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            className={classes.SignUpInput_F_L_name}
                            placeholder="Last name"
                            name="lName"
                            onChange={handleChange}
                            required
                            value={inputValues.lName}
                          />
                          {validation ? (
                            <label style={{ color: "red" }}>
                              {validation.lName}
                            </label>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <  Email input   > */}
                    <div className="form-outline mb-2">
                      <input
                        type="email"
                        className={classes.SignUpInput}
                        placeholder="Email address"
                        name="email"
                        onChange={handleChange}
                        required
                        value={inputValues.email}
                      />
                      {validation ? (
                        <label style={{ color: "red" }}>
                          {validation.email}{" "}
                        </label>
                      ) : (
                        ""
                      )}
                    </div>

                    {/* <  Password input   > */}
                    <div className="form-outline mb-2">
                      <input
                        type="password"
                        className={classes.SignUpInput}
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        required
                        value={inputValues.password}
                      />
                      {validation ? (
                        <label style={{ color: "red" }}>
                          {validation.password}
                        </label>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="password"
                        className={classes.SignUpInput}
                        placeholder="Confirm password"
                        name="confirmPassword"
                        onChange={handleChange}
                        required
                        value={inputValues.confirmPassword}
                      />
                      {validation ? (
                        <label style={{ color: "red" }}>
                          {validation.confirmPassword}
                        </label>
                      ) : (
                        ""
                      )}
                    </div>

                    {/* <  Checkbox   > */}
                    {/* <div className="form-check d-flex justify-content-center mb-2">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      checked
                    />
                    <label className="form-check-label" for="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div> */}

                    {/* <  Submit button   > */}
                    <button
                      disabled={!validation}
                      type="submit"
                      className="btn btn-primary btn-block mb-2"
                      // onClick={() => logout()}
                    >
                      Sign up
                    </button>

                    {/* <  Register buttons   > */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <div className={classes.SignUpSocialMedia}>
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

export default SignUp;
