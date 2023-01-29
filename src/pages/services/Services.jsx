import React from "react";
import classes from "./services.module.css";

const Services = () => {
  return (
    <div className="section animated bounceInLeft">
      <section className={classes.section} id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={classes.section_title}>
                <h2>What I Do</h2>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className={classes.feature_box_1}>
                <div className="icon">
                  <i className="fa fa-desktop"></i>
                </div>
                <div className={classes.section_title}>
                  <h5>Unique design</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>

            {/* feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className={classes.feature_box_1}>
                <div className="icon">
                  <i className="fa fa-user"></i>
                </div>
                <div className={classes.section_title}>
                  <h5>Different Layout</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>

            {/* feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className={classes.feature_box_1}>
                <div className="icon">
                  <i className="fa fa-comment"></i>
                </div>
                <div className={classes.section_title}>
                  <h5>Make it Simple</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>

            {/* feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className={classes.feature_box_1}>
                <div className="icon">
                  <i className="fa fa-image"></i>
                </div>
                <div className={classes.section_title}>
                  <h5>Responsiveness</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>

            {/* feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className={classes.feature_box_1}>
                <div className="icon">
                  <i className="fa fa-th"></i>
                </div>
                <div className={classes.section_title}>
                  <h5>Testing for Perfection</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>

            {/* feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className={classes.feature_box_1}>
                <div className="icon">
                  <i className="fa fa-cog"></i>
                </div>
                <div className={classes.section_title}>
                  <h5>Advanced Options</h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
