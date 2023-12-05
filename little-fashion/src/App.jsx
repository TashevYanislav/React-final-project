import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import Path from "./paths";
import {AuthProvider} from "./contexts/authContext";

import Home from "./Components/home/Home";
import Footer from "./Components/Footer/Footer";
import NavigationBar from "./Components/NavBar/NavigationBar";
import Contact from "./Components/Contact/Contact";
import Faq from "./Components/Faq/Faq";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Create from "./Components/Create/Create";
import Details from "./Components/Details/Details";
import AboutUs from "./Components/aboutUs/aboutUs";
import Logout from "./Components/Logout/Logout";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");
    return {};
  });

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
    isAuthenticated: !!auth.email,
  };

  return (
    <AuthProvider value={values}>
      <div>
        <section className="preloader">
          <div className="spinner">
            <span className="sk-inner-circle" />
          </div>
        </section>
        <main>
          <NavigationBar />
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.About} element={<AboutUs />} />
            <Route path={Path.Products} element={<Products />} />
            <Route path={Path.Create} element={<Create />} />
            <Route path={Path.Faq} element={<Faq />} />
            <Route path={Path.Contact} element={<Contact />} />
            <Route path={Path.Register} element={<Register />} />
            <Route path={Path.Login} element={<Login />} />
            <Route path={Path.Logout} element={<Logout />} />
            <Route path="/products/:productId" element={<Details />} />
            {/* <Route path="*" element={<ErrorPage/>}/> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
