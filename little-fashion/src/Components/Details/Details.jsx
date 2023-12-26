import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as productService from "../../services/productService";
import * as CommentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import reducer from "./Commentreducer";
import Path from "../../paths";
import * as cartItemService from "../../services/cartItemService";
import * as LikeService from "../../services/likesService";

import "./buttons.css";
let currentLike = null;
export default function Details() {
  const { usermail, userId, isAuthenticated } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const [likes, setLikes] = useState([]);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    productService.getOne(productId).then(setProduct);

    CommentService.getAll(productId).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });

    LikeService.getAll(productId).then(...[setLikes]);
  }, [productId]);

  const addCommentHandler = async (values) => {
    const newComment = await CommentService.create(
      productId,
      values.commentText,
      usermail
    );

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });

    values.commentText = "";
  };

  const deleteCommentHandler = async (commentId) => {
    await CommentService.remove(commentId);

    dispatch({
      type: "DELETE_COMMENT",
      payload: commentId,
    });
  };

  const addCartItemHandler = async () => {
    await cartItemService.create(product.name, product.imageUrl, product.price);
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${product.name}`
    );

    if (hasConfirmed) {
      await productService.remove(productId);
      navigate(Path.Products);
    }
  };

  const onLike = async () => {
    if (!likes.some((like) => like._ownerId === userId)) {
      const newLike = await LikeService.create(productId, usermail);
      console.log(newLike);
      setLikes([...likes, newLike]);

      currentLike = newLike;
      console.log(likes);

      return newLike;
    } else {
      console.log(currentLike);
      LikeService.remove(currentLike._id);
      const updatedLikes = likes.filter((like) => like._id !== currentLike._id);
      setLikes(updatedLikes);
      currentLike = null;
    }
  };

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    commentText: "",
  });

  return (
    <main>
      <section className="product-detail section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="product-thumb">
                <div className="product-top d-flex">
                  <span className="product-alert me-auto">
                    {product.category}
                  </span>
                  {isAuthenticated && (
                    <div>
                      <a
                        type="submit"
                        onClick={onLike}
                        className={`bi-heart-fill ${
                          likes.some((like) => like._ownerId === userId)
                            ? "liked"
                            : ""
                        }`}
                      ></a>
                    </div>
                  )}
                  <p className="likes-p">{likes.length}</p>
                </div>
                <img
                  src={product.imageUrl}
                  className="img-fluid product-image"
                  alt={product.name}
                />
              </div>

              {userId === product._ownerId && (
                <div>
                  <Link
                    to={`/products/${productId}/edit`}
                    className="button delete-btn"
                  >
                    Edit
                  </Link>
                  <button
                    className="button delete-btn"
                    onClick={deleteButtonClickHandler}
                  >
                    Delete
                  </button>
                </div>
              )}
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
                {isAuthenticated && (
                  <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                    <button
                      type="submit"
                      className="btn custom-btn cart-btn"
                      onClick={addCartItemHandler}
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
              {isAuthenticated && (
                <div className="product-cart-thumb row">
                  <article className="col-lg-6 col-12 mt-4 mt-lg-0">
                    <strong className="d-block mt-4 mb-2">Add Comment:</strong>

                    <form onSubmit={onSubmit}>
                      <div className="form-floating mb-4">
                        <textarea
                          type="text"
                          name="commentText"
                          value={values.commentText}
                          onChange={onChange}
                          id="commentText"
                          className="form-control"
                          placeholder="commentText"
                          style={{ height: 100 }}
                        />
                        <label htmlFor="commentText">Comment...</label>
                        <input
                          type="submit"
                          className="btn custom-btn cart-btn"
                          value="Add Comment"
                        />
                      </div>
                    </form>
                  </article>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4">
            Customer <span>Comments</span>
          </h2>
        </div>
        {comments.map(({ _id, text, usermail, _ownerId }) => (
          <div key={_id} className="slick-testimonial-caption">
            <p className="lead">{text}</p>
            <div className="slick-testimonial-client d-flex align-items-center mt-4">
              <span>{usermail}</span>
            </div>
            {userId === _ownerId && (
              <button
                className="buttona delete-btn"
                onClick={() => deleteCommentHandler(_id)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
        {comments.length === 0 && <p>No comments yet...</p>}
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
