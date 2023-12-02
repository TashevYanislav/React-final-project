import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import Path from "./paths";

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
import AuthContext from "./contexts/authContext";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    navigate(Path.Home);
  };

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <div>
        <section className="preloader">
          <div className="spinner">
            <span className="sk-inner-circle" />
          </div>
        </section>
        <main>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/create" element={<Create />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="/products/:productId" element={<Details />} />
            {/* <Route path="*" element={<ErrorPage/>}/> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
