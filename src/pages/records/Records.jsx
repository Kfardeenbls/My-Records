import React from "react";
import { Link } from "react-router-dom";

const Records = () => {
  var digits = [4, 3, 2, 1];
  var newArray = [...digits];
  newArray[digits.length - 1] = newArray[digits.length - 1] + 1;
  console.log(newArray);

  return (
    <>
      <div className="section animated bounceInLeft">
        <Link to="Records">
          <h1>new array : {newArray}</h1>
        </Link>
      </div>
      inp
    </>
  );
};

export default Records;
