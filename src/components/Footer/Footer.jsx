import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.mainFooter}>
      {/* <p className={classes.para}>
          <button type="button" class="btn btn-outline-info" >
            Sign Up
          </button>
        </p> */}
      <span className={classes.para}>© 2020 Copyright: My Records</span>
    </div>
  );
};
export default Footer;
