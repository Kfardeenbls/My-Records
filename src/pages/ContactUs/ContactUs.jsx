import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
// import "./Contact_Us.css";

const ContactUs = () => {
  return (
    <>
      <Header />

      <div class="container">
        <h1 class="maint">Contact Us</h1>
        <div class="section animated bounceInLeft">
          <div class="brandname">
            <h3>MD FARDEEN KHAN</h3>
            <ul>
              <li> +91 8114602855</li>
              <li>kfardeenbls@gmail.com</li>
              <li>myRecords.com</li>
            </ul>
          </div>
          <div class="contact">
            <h3>Email Me</h3>
            <form action="#">
              <p>
                <label for="#">Name</label>
                <input type="text" name="name" />
              </p>
              <p>
                <label for="#">Regarding</label>
                <input type="text" name="Regarding" />
              </p>
              <p>
                <label for="#">Email Address</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label for="#">Phone Number</label>
                <input type="text" name="phone" />
              </p>
              <p class="full">
                <label for="#">Message</label>
                <textarea name="message" cols="30" rows="5"></textarea>
              </p>
              <p class="full">
                <button>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
