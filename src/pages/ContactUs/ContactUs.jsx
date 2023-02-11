import React, { useState } from "react";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  const initialValues = {
    name: "",
    Regarding: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [isEnabled, setIsenabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
    if (
      !formValues.name ||
      !formValues.Regarding ||
      !formValues.email ||
      !formValues.phone ||
      !formValues.message
    ) {
      setIsenabled(false);
    } else {
      setIsenabled(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("click");

    const res = await fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);

    const inputValues = {
      name: formValues.name,
      Regarding: formValues.Regarding,
      email: formValues.email,
      phone: formValues.phone,
      message: formValues.message,
    };
    console.log(inputValues);
  };

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
                <input
                  type="text"
                  value={formValues.name}
                  onChange={handleChange}
                  name="name"
                  className="rounded-3"
                />
              </p>
              <p>
                <label>Regarding</label>
                <input
                  type="text"
                  value={formValues.Regarding}
                  onChange={handleChange}
                  name="Regarding"
                  className="rounded-3"
                />
              </p>
              <p>
                <label>Email Address</label>
                <input
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  name="email"
                  className="rounded-3"
                />
              </p>
              <p>
                <label>Phone Number</label>
                <input
                  type="text"
                  value={formValues.phone}
                  onChange={handleChange}
                  name="phone"
                  className="rounded-3"
                />
              </p>
              <p className={classes.full}>
                <label>Message</label>
                <textarea
                  value={formValues.message}
                  onChange={handleChange}
                  name="message"
                  cols="30"
                  rows="5"
                  className="rounded-3"
                ></textarea>
              </p>
              <p className={classes.full}>
                <button onClick={handleSubmit} disabled={!isEnabled}>
                  Submit
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
