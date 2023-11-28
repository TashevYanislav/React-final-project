import { Link } from "react-router-dom";


export default function SlideShow() {
  return (
    <section className="slick-slideshow">
      <div className="slick-custom">
        <img
          src="images/slideshow/medium-shot-business-women-high-five.jpeg"
          className="img-fluid"
          alt=""
        />
        <div className="slick-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-10">
                <h1 className="slick-title">Cool Fashion</h1>
                <p className="lead text-white mt-lg-3 mb-lg-5">
                  Little fashion template comes with total 8 HTML pages provided
                  by Tooplate website.
                </p>
                <Link to="/about-us" className="btn custom-btn">
                  Learn more about us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slick-custom">
        <img
          src="images/slideshow/team-meeting-renewable-energy-project.jpeg"
          className="img-fluid"
          alt=""
        />
        <div className="slick-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-10">
                <h1 className="slick-title">New Design</h1>
                <p className="lead text-white mt-lg-3 mb-lg-5">
                  Please share this Little Fashion template to your friends.
                  Thank you for supporting us.
                </p>
                <Link to="/products" className="btn custom-btn">
                  Explore products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slick-custom">
        <img
          src="images/slideshow/two-business-partners-working-together-office-computer.jpeg"
          className="img-fluid"
          alt=""
        />
        <div className="slick-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-10">
                <h1 className="slick-title">Talk to us</h1>
                <p className="lead text-white mt-lg-3 mb-lg-5">
                  Tooplate is one of the best HTML CSS template websites for
                  everyone.
                </p>
                <Link to="/contacts" className="btn custom-btn">
                  Work with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
