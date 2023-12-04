import { useContext, useEffect } from "react";
import * as authService from "../../services/authService";
import AuthContext from "../../contexts/authContext";

export default function Logout() {
  console.log("AAAAAAAAAAAAAAAAAAA");
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    authService
      .logout()
      .then(() => logoutHandler())
      .catch(() => logoutHandler());
  }, []);

  return null;
}
