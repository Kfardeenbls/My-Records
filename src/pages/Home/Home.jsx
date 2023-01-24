import classes from "./Home.module.css";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className={classes.MainLayout}>
      <Header />

      <Footer />
    </div>
  );
};

export default Home;
