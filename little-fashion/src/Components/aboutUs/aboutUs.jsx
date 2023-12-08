export default function AboutUs() {
  return (
    <>
      <main>
        <header className="site-header section-padding-img site-header-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 header-info">
                <h1>
                  <span className="d-block text-primary">Company</span>
                  <span className="d-block text-dark">Fashion</span>
                </h1>
              </div>
            </div>
          </div>
          <img
            src="images/header/businesspeople-meeting-office-working.jpg"
            className="header-image img-fluid"
            alt=""
          />
        </header>
        <section className="team section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-5">
                  Meet our <span>team</span>
                </h2>
              </div>
              <div className="col-lg-4 mb-4 col-12">
                <div className="team-thumb d-flex align-items-center">
                  <img
                    src="images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg"
                    className="img-fluid custom-circle-image team-image me-4"
                    alt=""
                  />
                  <div className="team-info">
                    <h5 className="mb-0">Don</h5>
                    <strong className="text-muted">Product, VP</strong>
                    
                    <button
                      type="button"
                      className="btn custom-modal-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#don"
                    >
                      <i className="bi-plus-circle-fill" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4 col-12">
                <div className="team-thumb d-flex align-items-center">
                  <img
                    src="images/people/portrait-british-woman.jpeg"
                    className="img-fluid custom-circle-image team-image me-4"
                    alt=""
                  />
                  <div className="team-info">
                    <h5 className="mb-0">Kelly</h5>
                    <strong className="text-muted">Marketing</strong>
                    
                    <button
                      type="button"
                      className="btn custom-modal-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#kelly"
                    >
                      <i className="bi-plus-circle-fill" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-lg-0 mb-4 col-12">
                <div className="team-thumb d-flex align-items-center">
                  <img
                    src="images/people/beautiful-woman-face-portrait-brown-background.jpeg"
                    className="img-fluid custom-circle-image team-image me-4"
                    alt=""
                  />
                  <div className="team-info">
                    <h5 className="mb-0">Marie</h5>
                    <strong className="text-muted">Founder</strong>
                    
                    <button
                      type="button"
                      className="btn custom-modal-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#marie"
                    >
                      <i className="bi-plus-circle-fill" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto col-11">
                <h2 className="text-center">
                  Customer love, <br /> <span>Little</span> Fashion
                </h2>
                <div className="slick-testimonial">
                  <div className="slick-testimonial-caption">
                    <p className="lead">
                      Over three years in business, We’ve had the chance to work
                      on a variety of projects, with companies Lorem ipsum dolor
                      sit amet
                    </p>
                    <div className="slick-testimonial-client d-flex align-items-center mt-4">
                      <img
                        src="images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg"
                        className="img-fluid custom-circle-image me-3"
                        alt=""
                      />
                      <span>
                        George,{" "}
                        <strong className="text-muted">
                          Digital Art Fashion
                        </strong>
                      </span>
                    </div>
                  </div>
                  <div className="slick-testimonial-caption">
                    <p className="lead">
                      Over three years in business, We’ve had the chance to work
                      on a variety of projects, with companies Lorem ipsum dolor
                      sit amet
                    </p>
                    <div className="slick-testimonial-client d-flex align-items-center mt-4">
                      <img
                        src="images/people/beautiful-woman-face-portrait-brown-background.jpeg"
                        className="img-fluid custom-circle-image me-3"
                        alt=""
                      />
                      <span>
                        Sandar,{" "}
                        <strong className="text-muted">
                          Zoom Fashion Idea
                        </strong>
                      </span>
                    </div>
                  </div>
                  <div className="slick-testimonial-caption">
                    <p className="lead">
                      Over three years in business, We’ve had the chance to work
                      on a variety of projects, with companies Lorem ipsum dolor
                      sit amet
                    </p>
                    <div className="slick-testimonial-client d-flex align-items-center mt-4">
                      <img
                        src="images/people/portrait-british-woman.jpeg"
                        className="img-fluid custom-circle-image me-3"
                        alt=""
                      />
                      <span>
                        Marie,{" "}
                        <strong className="text-muted">
                          Art Fashion Design
                        </strong>
                      </span>
                    </div>
                  </div>
                  <div className="slick-testimonial-caption">
                    <p className="lead">
                      Over three years in business, We’ve had the chance to work
                      on a variety of projects, with companies Lorem ipsum dolor
                      sit amet
                    </p>
                    <div className="slick-testimonial-client d-flex align-items-center mt-4">
                      <img
                        src="images/people/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg"
                        className="img-fluid custom-circle-image me-3"
                        alt=""
                      />
                      <span>
                        Catherine,{" "}
                        <strong className="text-muted">Dress Fashion</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
     
      <div
        className="modal fade"
        id="don"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0">
            <div className="modal-header flex-column">
              <h3 className="modal-title" id="exampleModalLabel">
                Don Haruko
              </h3>
              <h6 className="text-muted">Product, VP</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h5 className="mb-4">
                Over three years in business had the chance to work on variety
                of projects, with companies
              </h5>
              <div className="row mb-4">
                <div className="col-lg-6 col-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-lg-6 col-12">
                  <p>
                    Incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse commodo viverra.
                  </p>
                </div>
              </div>
              <ul className="social-icon">
                <li className="me-3">
                  <strong>Where to find?</strong>
                </li>
                <li>
                  <a href="#" className="social-icon-link bi-youtube" />
                </li>
                <li>
                  <a href="#" className="social-icon-link bi-whatsapp" />
                </li>
                <li>
                  <a href="#" className="social-icon-link bi-instagram" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     
      <div
        className="modal fade"
        id="kelly"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0">
            <div className="modal-header flex-column">
              <h3 className="modal-title" id="exampleModalLabel">
                Kelly Lisa
              </h3>
              <h6 className="text-muted">Global, Head of Marketing</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h5 className="mb-4">
                Over three years in business had the chance to work on variety
                of projects, with companies
              </h5>
              <div className="row mb-4">
                <div className="col-lg-6 col-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-lg-6 col-12">
                  <p>
                    Incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse commodo viverra.
                  </p>
                </div>
              </div>
              <ul className="social-icon">
                <li className="me-3">
                  <strong>Where to find?</strong>
                </li>
                <li>
                  <a href="#" className="social-icon-link bi-facebook" />
                </li>
                <li>
                  <a href="#" className="social-icon-link bi-instagram" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   
      <div
        className="modal fade"
        id="marie"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0">
            <div className="modal-header flex-column">
              <h3 className="modal-title" id="exampleModalLabel">
                Marie Sam
              </h3>
              <h6 className="text-muted">Founder &amp; CEO</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h5 className="mb-4">
                Over three years in business had the chance to work on variety
                of projects, with companies
              </h5>
              <div className="row mb-4">
                <div className="col-lg-6 col-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-lg-6 col-12">
                  <p>
                    Incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse commodo viverra.
                  </p>
                </div>
              </div>
              <ul className="social-icon">
                <li className="me-3">
                  <strong>Where to find?</strong>
                </li>
                <li>
                  <a href="#" className="social-icon-link bi-twitter" />
                </li>
                <li>
                  <a href="#" className="social-icon-link bi-linkedin" />
                </li>
                <li>
                  <a href="#" className="social-icon-link bi-envelope" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
