import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-10 me-auto mb-4">
            <h4 className="text-white mb-3">
              <Link to="/">Little</Link> Fashion
            </h4>
            <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">
              Copyright © 2022 <strong>Little Fashion</strong>
            </p>
            <br />
            <p className="copyright-text">
              Designed by{" "}
              <Link to="https://www.tooplate.com/" target="_blank">
                Tooplate
              </Link>
            </p>
          </div>
          <div className="col-lg-5 col-8">
            <h5 className="text-white mb-3">Sitemap</h5>
            <ul className="footer-menu d-flex flex-wrap">
              <li className="footer-menu-item">
                <Link to="/story" className="footer-menu-link">
                  Story
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/products" className="footer-menu-link">
                  Products
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/faq" className="footer-menu-link">
                  FAQs
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/contact" className="footer-menu-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-4">
            <h5 className="text-white mb-3">Social</h5>
            <ul className="social-icon">
              <li>
                <Link to="#" className="social-icon-link bi-youtube" />
              </li>
              <li>
                <Link to="#" className="social-icon-link bi-whatsapp" />
              </li>
              <li>
                <Link to="#" className="social-icon-link bi-instagram" />
              </li>
              <li>
                <Link to="#" className="social-icon-link bi-skype" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
