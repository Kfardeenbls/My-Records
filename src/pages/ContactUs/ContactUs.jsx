import React from "react";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <h1 className={classes.maint}>Contact Us</h1>
        <div className="section animated bounceInLeft">
          <div className={classes.brandname}>
            <h3>MD FARDEEN KHAN</h3>
            <ul className={classes.unOrderList}>
              <li> +91 8114602855</li>
              <li>kfardeenbls@gmail.com</li>
              <li>myRecords.com</li>
            </ul>
          </div>
          <div className={classes.contact}>
            <h3>Email Me</h3>
            <form>
              <p>
                <label>Name</label>
                <input type="text" name="name" className="rounded-3" />
              </p>
              <p>
                <label>Regarding</label>
                <input type="text" name="Regarding" className="rounded-3" />
              </p>
              <p>
                <label>Email Address</label>
                <input type="email" name="email" className="rounded-3" />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" className="rounded-3" />
              </p>
              <p className={classes.full}>
                <label>Message</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="5"
                  className="rounded-3"
                ></textarea>
              </p>
              <p className={classes.full}>
                <button>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
