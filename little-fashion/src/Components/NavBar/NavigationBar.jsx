import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <NavLink className="navbar-brand" to="/">
          <strong>
            <span>Little</span> Fashion
          </strong>
        </NavLink>
        <div className="d-lg-none">
          <NavLink to="/register" className="bi-person custom-icon me-3" />
          <NavLink to="/details" className="bi-bag custom-icon" />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto" >
            <li className="nav-item">
              <NavLink className="nav-link" to="/" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/faq">
                FAQs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-none d-lg-block">
            <NavLink to="/register" className="bi-person custom-icon me-3" />
            <NavLink to="/cart" className="bi-bag custom-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}
