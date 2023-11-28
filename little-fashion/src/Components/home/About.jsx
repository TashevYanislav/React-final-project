import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-5">
              Get started with <span>Little</span> Fashion
            </h2>
          </div>
          <div className="col-lg-2 col-12 mt-auto mb-auto">
            <ul
              className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Introduction
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-youtube-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-youtube"
                  type="button"
                  role="tab"
                  aria-controls="pills-youtube"
                  aria-selected="true"
                >
                  How we work?
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-skill-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-skill"
                  type="button"
                  role="tab"
                  aria-controls="pills-skill"
                  aria-selected="false"
                >
                  Capabilites
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-10 col-12">
            <div className="tab-content mt-2" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row">
                  <div className="col-lg-7 col-12">
                    <img
                      src="images/pim-chu-z6NZ76_UTDI-unsplash.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-5 col-12">
                    <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                      <h4 className="mb-3">
                        Good <span>Design</span> <br />
                        Ideas for <span>your</span> fashion
                      </h4>
                      <p>
                        Little Fashion templates comes with{" "}
                        <Link to="/login">sign in</Link> /{" "}
                        <Link to="/register">sign up</Link> pages, product
                        listing / product detail, about, FAQs, and contact page.
                      </p>
                      <p>
                        Since this HTML template is based on Boostrap 5 CSS
                        library, you can feel free to add more components as you
                        need.
                      </p>
                      <div className="mt-2 mt-lg-auto">
                        <Link to="/about-us" className="custom-link mb-2">
                          Learn more about us
                          <i className="bi-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-youtube"
                role="tabpanel"
                aria-labelledby="pills-youtube-tab"
              >
                <div className="row">
                  <div className="col-lg-7 col-12">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/f_7JqPDWhfw?controls=0"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-12">
                    <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                      <h4 className="mb-3">Life at Studio</h4>
                      <p>
                        Over three years in business, We’ve had the chance to
                        work on Link variety of projects, with companies
                      </p>
                      <p>Custom work is branding, web design, UI/UX design</p>
                      <div className="mt-2 mt-lg-auto">
                        <Link to="/contact" className="custom-link mb-2">
                          Work with us
                          <i className="bi-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-skill"
                role="tabpanel"
                aria-labelledby="pills-skill-tab"
              >
                <div className="row">
                  <div className="col-lg-7 col-12">
                    <img
                      src="images/cody-lannom-G95AReIh_Ko-unsplash.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-5 col-12">
                    <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                      <h4 className="mb-3">What can help you?</h4>
                      <p>
                        Over three years in business, We’ve had the chance on
                        projects
                      </p>
                      <div className="skill-thumb mt-3">
                        <strong>Branding</strong>
                        <span className="float-end">90%</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "90%" }}
                          />
                        </div>
                        <strong>Design &amp; Stragety</strong>
                        <span className="float-end">70%</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary"
                            role="progressbar"
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "70%" }}
                          />
                        </div>
                        <strong>Online Platform</strong>
                        <span className="float-end">80%</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "80%" }}
                          />
                        </div>
                      </div>
                      <div className="mt-2 mt-lg-auto">
                        <Link to="/products" className="custom-link mb-2">
                          Explore products
                          <i className="bi-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
