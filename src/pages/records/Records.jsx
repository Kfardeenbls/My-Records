import React from "react";
import { Link } from "react-router-dom";

const Records = () => {
  const digits = [4, 3, 2, 1];

  const outPut = digits.map((e) => {
    return e[e.length - 1] + 1;
  });
  return (
    <>
      <div className="section animated bounceInLeft">
        <Link to="Records">
          <h1>new array : {outPut}</h1>
        </Link>
      </div>
    </>
  );
};

export default Records;
