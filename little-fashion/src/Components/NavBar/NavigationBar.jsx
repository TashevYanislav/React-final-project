import { Link } from "react-router-dom";

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
        <Link className="navbar-brand" to="/">
          <strong>
            <span>Little</span> Fashion
          </strong>
        </Link>
        <div className="d-lg-none">
          <Link to="/register" className="bi-person custom-icon me-3" />
          <Link to="/details" className="bi-bag custom-icon" />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/story">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-none d-lg-block">
            <Link to="/register" className="bi-person custom-icon me-3" />
            <Link to="/cart" className="bi-bag custom-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}
