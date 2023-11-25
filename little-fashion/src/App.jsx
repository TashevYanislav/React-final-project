import Home from "./Components/home/Home";
import Footer from "./Components/Footer/Footer";
import NavigationBar from "./Components/NavBar/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Story from "./Components/Story/Story";
import Contact from "./Components/Contact/Contact";
import Faq from "./Components/Faq/Faq";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

function App() {
  return (
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
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
