import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContextProvider";

const AuthRequired = ({ children }) => {
  const isLogin = useContext(AuthContext);
  const logoutFn = useContext(AuthContext);

  return (
    <>
      {isLogin ? children : <Navigate to="/" />}
      {logoutFn ? children : <Navigate to="/SignIn" />}
    </>
  );
};

export default AuthRequired;
