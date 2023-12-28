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
import LatestProduct from "../home/latestProduct/LatestProduct";
let currentLike = null;
export default function Details() {
  const { usermail, userId, isAuthenticated } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const [likes, setLikes] = useState([]);
  const [similarProduct, setSimilar] = useState([]);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await productService.getOne(productId);
        setProduct(productData);

        productService
          .getSimilar(productData.category, productId)
          .then((res) => setSimilar(res));

        const commentResult = await CommentService.getAll(productId);
        dispatch({
          type: "GET_ALL_COMMENTS",
          payload: commentResult,
        });

        const likeResult = await LikeService.getAll(productId);
        setLikes(likeResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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

      // LikeService.update(userId);

      currentLike = newLike;
      console.log(currentLike);
      return newLike;
    } else {
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

        <section className="related-product section-padding border-top">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-4">
                  Other items in that <span>Category</span>
                </h2>
              </div>

              {similarProduct.map((product) => (
                <LatestProduct key={product._id} {...product} />
              ))}
              {!similarProduct.length && <p>No similar products yet...</p>}
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
          </div>
        </section>
      </section>
    </main>
  );
}
