import React from "react";
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

const SignIn = () => {
  return (
    <>
      <div className="section animated bounceInLeft">
        <section class="vh-100">
          <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
                <form>
                  <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button
                      type="button"
                      class="btn btn-primary btn-floating mx-1"
                    >
                      <FaFacebook />
                    </button>

                    <button
                      type="button"
                      class="btn btn-primary btn-floating mx-2"
                    >
                      <BsTwitter />
                    </button>

                    <button
                      type="button"
                      class="btn btn-primary btn-floating mx-1"
                    >
                      <BsLinkedin />
                    </button>
                  </div>

                  <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  {/* <!-- Email input --> */}
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control form-control-lg"
                      placeholder="Enter Link valid email address"
                    />
                    <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>

                  {/* <!-- Password input --> */}
                  <div class="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control form-control-lg"
                      placeholder="Enter password"
                    />
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>

                  <div class="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div class="form-check mb-0">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label class="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <Link to={"./ForgotPassword"} class="text-body">
                      Forgot password?
                    </Link>
                  </div>

                  <div class="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      style={{
                        "padding-left": `2.5rem`,
                        "padding-right": `2.5rem`,
                        height: "40px",
                        paddingBottom: `40px`,
                        marginBottom: `10px`,
                        marginRight: `20px`,
                      }}
                    >
                      Login
                    </button>
                    <span class="small fw-bold mt-2 pt-1 mb-0 ">
                      Don't have an account?
                      <Link to={"./SignUp"} class="link-danger">
                        Register
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <!-- Copyright --> */}

          {/* <!-- Copyright -->

    <!-- Right --> */}
          <div className={classes.SocialMedia}>
            <Link to={"./Facebook"} class="text-white me-4">
              <AiFillFacebook />
            </Link>
            <Link to={"./Gmail"} class="text-white me-4">
              <AiFillGoogleCircle />
            </Link>
            <Link to={"./Twitter"} class="text-white me-4">
              <AiFillTwitterCircle />
            </Link>
            <Link to={"./Github"} class="text-white">
              <AiFillGithub />
            </Link>
          </div>
          {/* <!-- Right --> */}
        </section>
      </div>
    </>
  );
};

export default SignIn;
