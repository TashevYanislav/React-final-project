export default function FeaturedProducts() {
  return (
    <section className="featured-product section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-5">Latest Products</h2>
          </div>
          <div className="col-lg-4 col-12 mb-3">
            <div className="product-thumb">
              <a href="product-detail.html">
                <img
                  src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg"
                  className="img-fluid product-image"
                  alt=""
                />
              </a>
              <div className="product-top d-flex">
                <span className="product-alert me-auto">New Arrival</span>
                <a href="#" className="bi-heart-fill product-icon" />
              </div>
              <div className="product-info d-flex">
                <div>
                  <h5 className="product-title mb-0">
                    <a
                      href="product-detail.html"
                      className="product-title-link"
                    >
                      Tree pot
                    </a>
                  </h5>
                  <p className="product-p">
                    Original package design from house
                  </p>
                </div>
                <small className="product-price text-muted ms-auto mt-auto mb-5">
                  $25
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mb-3">
            <div className="product-thumb">
              <a href="product-detail.html">
                <img
                  src="images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg"
                  className="img-fluid product-image"
                  alt=""
                />
              </a>
              <div className="product-top d-flex">
                <span className="product-alert">Low Price</span>
                <a href="#" className="bi-heart-fill product-icon ms-auto" />
              </div>
              <div className="product-info d-flex">
                <div>
                  <h5 className="product-title mb-0">
                    <a
                      href="product-detail.html"
                      className="product-title-link"
                    >
                      Fashion Set
                    </a>
                  </h5>
                  <p className="product-p">Costume Package</p>
                </div>
                <small className="product-price text-muted ms-auto mt-auto mb-5">
                  $35
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="product-thumb">
              <a href="product-detail.html">
                <img
                  src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg"
                  className="img-fluid product-image"
                  alt=""
                />
              </a>
              <div className="product-top d-flex">
                <a href="#" className="bi-heart-fill product-icon ms-auto" />
              </div>
              <div className="product-info d-flex">
                <div>
                  <h5 className="product-title mb-0">
                    <a
                      href="product-detail.html"
                      className="product-title-link"
                    >
                      Juice Drinks
                    </a>
                  </h5>
                  <p className="product-p">Nature made another world</p>
                </div>
                <small className="product-price text-muted ms-auto mt-auto mb-5">
                  $45
                </small>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <a href="products.html" className="view-all">
              View All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
