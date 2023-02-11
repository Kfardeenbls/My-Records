import React, { useState } from "react";
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
  const initFormValues = {
    fname: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValue] = useState({
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

  const [isSubmit, setIsSubmit] = useState(false);

  //handle submit updates
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValues, [name]: value });
    // formValidation();

    if (
      !formValues.fname ||
      !formValues.lName ||
      !formValues.email ||
      !formValues.password ||
      !formValues.confirmPassword
    ) {
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
  };

  const handleSubmit = async (e) => {
    setIsSubmit(true);
    e.preventDefault();
    formValidation();
    setFormValue(initFormValues);

    const res = await fetch("http://localhost:6070/", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);

    const inputValues = {
      fname: formValues.fname,
      lName: formValues.lName,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
    };

    console.log(inputValues);
  };
  // useEffect(() => {
  //   return () => {};
  // }, []);
  let errors = {};
  const formValidation = () => {
    //first Name validation
    if (!formValues.fname.trim()) {
      errors.fname = "First name is required";
    } else {
      errors.fname = "";
    }
    //last Name validation
    if (!formValues.lName.trim()) {
      errors.lName = "Last name is required";
    } else {
      errors.lName = "";
    }

    // email validation
    const emailCond = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!formValues.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    //password validation
    // const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    // const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    // const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = formValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (
      !formValues.password.match(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
      )
    ) {
      errors.password = "password is not valid";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    // const cPassword = password;
    if (!formValues.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (formValues.confirmPassword !== formValues.password) {
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
                            value={formValues.fname}
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
                            value={formValues.lName}
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
                        value={formValues.email}
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
                        value={formValues.password}
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
                        value={formValues.confirmPassword}
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

                    {/* <  Submit button   > */}

                    <button
                      disabled={!isSubmit}
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
