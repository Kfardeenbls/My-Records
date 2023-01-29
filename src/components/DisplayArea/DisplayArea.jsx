import React from "react";

const DisplayArea = () => {
  return (
    <div className="section animated bounceInLeft">
      <section
        id="hero"
        className="hero d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We offer modern solutions for growing your business
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                We are team of data security making a good enough security with
                new technologies.
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <span className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="assets/hero-img.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayArea;
