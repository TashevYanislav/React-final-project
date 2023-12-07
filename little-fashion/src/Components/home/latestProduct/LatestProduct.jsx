import { Link } from "react-router-dom";

export default function LatestProduct({
  _id,
  imageUrl,
  name,
  category,
  brand,
  price,
}) {
  return (
    <div className="col-lg-4 col-12 mb-3">
      <div className="product-thumb">
        <Link to={`/products/${_id}`}>
          <img src={imageUrl} className="img-fluid product-image" alt={name} />
        </Link>
        <div className="product-top d-flex">
          <span className="product-alert me-auto">{category}</span>
          <Link to="#" className="bi-heart-fill product-icon" />
        </div>
        <div className="product-info d-flex">
          <div>
            <h5 className="product-title mb-0">
              <Link to={`/products/${_id}`} className="product-title-link">
                {name}
              </Link>
            </h5>
            <p className="product-p">{brand}</p>
          </div>
          <small className="product-price text-muted ms-auto mt-auto mb-5">
            ${price}
          </small>
        </div>
      </div>
    </div>
  );
}
