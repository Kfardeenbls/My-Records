import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiFillFacebook,
} from "react-icons/ai";

const SignUp = () => {
  const divStyle = {
    "margin-top": "-100px",
    background: "hsla(0, 0%, 100%, 0.8)",
    "backdrop-filter": "blur(30px)",
  };
  const bgimage = {
    "background-image": `url("Krk8H7")`,
    height: `300px`,
  };
  return (
    <>
      <section class="text-center" style={{ bgimage }}>
        {/* <Backgroundimage> */}
        {/* <div class="p-5 bg-image" style={{ bgimage }}></div> */}
        {/* </Backgroundimage> */}

        <div class="card mx-4 mx-md-5 shadow-5-strong" style={{ divStyle }}>
          <div class="card-body py-5 px-md-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Sign up now</h2>
                <form>
                  {/* <  2 column grid layout with text inputs for the first and last names   > */}
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <  Email input   > */}
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>

                  {/* <  Password input   > */}
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="Cpassword"
                      id="form3Example4"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example4">
                      Confirm password
                    </label>
                  </div>

                  {/* <  Checkbox   > */}
                  {/* <div class="form-check d-flex justify-content-center mb-4">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      checked
                    />
                    <label class="form-check-label" for="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div> */}

                  {/* <  Submit button   > */}
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>

                  {/* <  Register buttons   > */}
                  <div class="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <AiFillFacebook />
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <AiFillGoogleCircle />
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <AiFillTwitterCircle />
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <AiFillGithub />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
