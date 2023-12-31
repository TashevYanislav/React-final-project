import { Routes, Route } from "react-router-dom";

import Path from "./paths";
import { AuthProvider } from "./contexts/authContext";
import ErrorBoundary from "./Components/ErrorBaundary";
import AuthGuard from "./Components/Guards/authGuard";

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
import Edit from "./Components/Edit/Edit";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
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
              <Route path={Path.Faq} element={<Faq />} />
              <Route path={Path.Contact} element={<Contact />} />
              <Route path={Path.Register} element={<Register />} />
              <Route path={Path.Login} element={<Login />} />
              <Route path={Path.Details} element={<Details />} />
              <Route element={<AuthGuard />}>
                <Route path={Path.Create} element={<Create />} />
                <Route path={Path.Logout} element={<Logout />} />
                <Route path={Path.Edit} element={<Edit />} />
                <Route path={Path.Cart} element={<Cart />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
