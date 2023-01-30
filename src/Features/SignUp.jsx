import React, { useContext } from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import classes from "./SignUp.module.css";

const SignUp = () => {
  // const divStyle = {
  //   "margin-top": "-100px",
  //   background: "hsla(0, 0%, 100%, 0.8)",
  //   "backdrop-filter": "blur(30px)",
  //   width: "50%",
  //   float: "right",
  //   margin: "25px",
  // };
  const { logout } = useContext(AuthContext);
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

                  <form>
                    {/* <  2 column grid layout with text inputs for the first and last names   > */}
                    <div className="row">
                      <div className="col-md-6 mb-0">
                        <div className="form-outline">
                          <input
                            type="text"
                            className={classes.SignUpInput_F_L_name}
                            placeholder="First name"
                          />
                          <label className="form-label"></label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            className={classes.SignUpInput_F_L_name}
                            placeholder="Last name"
                          />
                          <label className="form-label"></label>
                        </div>
                      </div>
                    </div>

                    {/* <  Email input   > */}
                    <div className="form-outline mb-2">
                      <input
                        type="email"
                        className={classes.SignUpInput}
                        placeholder="Email address"
                      />
                      <label className="form-label"></label>
                    </div>

                    {/* <  Password input   > */}
                    <div className="form-outline mb-2">
                      <input
                        type="password"
                        className={classes.SignUpInput}
                        placeholder="Password"
                      />
                      <label className="form-label"></label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="Cpassword"
                        className={classes.SignUpInput}
                        placeholder="Confirm password"
                      />
                      <label className="form-label"></label>
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
                      type="submit"
                      className="btn btn-primary btn-block mb-2"
                      onClick={() => logout()}
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
