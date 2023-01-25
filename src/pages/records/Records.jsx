import React from "react";
import { Link } from "react-router-dom";
// import Header from "../../components/Header/Header";

const Records = () => {
  return (
    <>
      <div className="section animated bounceInLeft">
        <Link to="Records">
          <h1>I am from Records</h1>
        </Link>
      </div>
    </>
  );
};

export default Records;
