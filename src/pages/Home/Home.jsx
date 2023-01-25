import classes from "./Home.module.css";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="section animated bounceInLeft">
      <div className={classes.MainLayout}>
        <Header />
        <div className={classes.displaybg}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
