import classes from "./Home.module.css";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className={classes.MainLayout}>
      <Header />

      <Footer />
    </div>
  );
};

export default Home;
