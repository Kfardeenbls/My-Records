import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.mainFooter}>
      <p className={classes.para}>
        {/* <p className={classes.para}>
          <button type="button" class="btn btn-outline-info" >
            Sign Up
          </button>
        </p> */}
        © 2020 Copyright: My Records
      </p>
    </div>
  );
};
export default Footer;
