import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as productService from "../../services/productService";
import * as CommentService from "../../services/commentService";

export default function Details() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    productService.getOne(productId).then((data) => setProduct(data));
  }, [productId]);

  if (!product || Object.keys(product).length === 0) {
    return (
      <section className="preloader">
        <div className="spinner">
          <span className="sk-inner-circle" />
        </div>
      </section>
    );
  }

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await CommentService.create(
      productId,
      formData.get("username"),
      formData.get("comment")
    );
    console.log(newComment);
  };

  return (
    <main>
      <section className="product-detail section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="product-thumb">
                <img
                  src={product.imageUrl}
                  className="img-fluid product-image"
                  alt={product.name}
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="product-info d-flex">
                <div>
                  <h2 className="product-title mb-0">{product.name}</h2>
                  <p className="product-p">{product.brand}</p>
                </div>
                <small className="product-price text-muted ms-auto mt-auto mb-5">
                  ${product.price}
                </small>
              </div>
              <div className="product-description">
                <strong className="d-block mt-4 mb-2">Description</strong>
                <p className="lead mb-5">{product.description}</p>
              </div>
              <div className="product-description">
                <strong className="d-block mt-4 mb-2">Materials</strong>
                <p className="lead mb-5">{product.materials}</p>
              </div>
              <div className="product-cart-thumb row">
                {/* <div className="col-lg-6 col-12">
                  <select
                    className="form-select cart-form-select"
                    id="inputGroupSelect01"
                  >
                    <option selected="">Quantity</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div> */}
                <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                  <button type="submit" className="btn custom-btn cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
              {/* Add Comment */}
              <div className="product-cart-thumb row">
                <article className="col-lg-6 col-12 mt-4 mt-lg-0">
                  <strong className="d-block mt-4 mb-2">Add Comment:</strong>

                  <form onSubmit={addCommentHandler}>
                    <div className="form-floating">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="username"
                        required=""
                      />
                      <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating mb-4">
                      <textarea
                        type="text"
                        name="comment"
                        id="comment"
                        className="form-control"
                        placeholder="comment"
                        required=""
                        style={{ height: 80 }}
                      />
                      <label htmlFor="comment">Comment...</label>
                      <input
                        type="submit"
                        className="btn custom-btn cart-btn"
                      />
                    </div>
                  </form>
                </article>
              </div>
              {/* Add Comment */}
            </div>
          </div>
        </div>
        {/* All Comments */}
        <div>
          <h2 className="mb-4">
            Customer <span>Comments</span>
          </h2>
          <div className="slick-testimonial">
            <div className="slick-testimonial-caption">
              <p className="lead">
                Over three years in business, We’ve had the chance to work on a
                variety of projects, with companies Lorem ipsum dolor sit amet
              </p>
              <div className="slick-testimonial-client d-flex align-items-center mt-4">
                <span>Username : George</span>
              </div>
            </div>
          </div>
        </div>
        {/* All Comments */}
      </section>
      {/* <section className="related-product section-padding border-top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-5">You might also like</h3>
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
                  <span className="product-alert me-auto">New arrival</span>
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
                        Fashion set
                      </a>
                    </h5>
                    <p className="product-p">Costume package</p>
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
          </div>
        </div>
      </section> */}
    </main>
  );
}
