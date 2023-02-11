import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const authInit = {
  isLogin: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(authInit);

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({ ...authInit });

  useEffect(() => {
    setAuthState((prev) => {
      return { ...prev, logout: logoutFn, login: loginFn };
    });
  }, []);

  const loginFn = () => {
    setAuthState((prev) => {
      return { ...prev, isLogin: true };
    });
    navigate("/Records");
  };

  const logoutFn = () => {
    setAuthState((prev) => {
      return { ...prev, isLogin: false };
    });
    navigate("/");
  };
  return (
    <>
      <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
export { AuthContext };
