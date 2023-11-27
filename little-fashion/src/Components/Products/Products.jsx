import { useEffect, useState } from "react";
import * as productService from "../../services/productService";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((result) => setProducts(result));
  }, []);
  
  console.log(products);

  return (
    <main>
      <header className="site-header section-padding d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12">
              <h1>
                <span className="d-block text-primary">Choose your</span>
                <span className="d-block text-dark">favorite stuffs</span>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section className="products section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-5">New Arrivals</h2>
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
                  <small className="product-price text-muted ms-auto">
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
                  <span className="product-alert">Discounted Price</span>
                  <a href="#" className="bi-heart-fill product-icon ms-auto" />
                </div>
                <div className="product-info d-flex">
                  <div>
                    <h5 className="product-title mb-0">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        Fashion set
                      </a>
                    </h5>
                    <p className="product-p">Costume package</p>
                  </div>
                  <small className="product-price text-muted ms-auto">
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
                  <small className="product-price text-muted ms-auto">
                    $45
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h2 className="mb-5">Popular</h2>
            </div>
            <div className="col-lg-4 col-12 mb-3">
              <div className="product-thumb">
                <a href="product-detail.html">
                  <img
                    src="images/product/team-fredi-8HRKoay8VJE-unsplash.jpeg"
                    className="img-fluid product-image"
                    alt=""
                  />
                </a>
                <div className="product-top d-flex">
                  <span className="product-alert">Trending</span>
                  <a href="#" className="bi-heart-fill product-icon ms-auto" />
                </div>
                <div className="product-info d-flex">
                  <div>
                    <h5 className="product-title mb-0">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        Package
                      </a>
                    </h5>
                    <p className="product-p">
                      Original package design from house
                    </p>
                  </div>
                  <small className="product-price text-muted ms-auto">
                    $50
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mb-3">
              <div className="product-thumb">
                <a href="product-detail.html">
                  <img
                    src="images/product/quokkabottles-kFc1_G1GvKA-unsplash.jpeg"
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
                        Bottle
                      </a>
                    </h5>
                    <p className="product-p">Package design</p>
                  </div>
                  <small className="product-price text-muted ms-auto">
                    $100
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mb-3">
              <div className="product-thumb">
                <a href="product-detail.html">
                  <img
                    src="images/product/anis-m-WnVrO-DvxcE-unsplash.jpeg"
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
                        Medicine
                      </a>
                    </h5>
                    <p className="product-p">Original design from house</p>
                  </div>
                  <small className="product-price text-muted ms-auto">
                    $200
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
