import { useNavigate } from "react-router-dom";
import Path from "../paths";

import { createContext } from "react";
import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    if (values.password === values.confirm_password) {
      const result = await authService.register(values.email, values.password);
      console.log(result);
      setAuth(result);
      localStorage.setItem("accessToken", result.accessToken);

      navigate(Path.Home);
    } else {
      console.log("The passwords don't match ");
      return;
    }
  };

  const logoutHandler = () => {
    console.log("Logging out...");
    setAuth({});

    localStorage.removeItem("accessToken");
    navigate(Path.Home);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    usermail: auth.email,
    userId:auth._id,
    isAuthenticated: !!auth.email,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
