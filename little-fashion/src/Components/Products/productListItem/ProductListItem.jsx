export default function ProductListItem({ name, category, price, imageUrl ,brand}) {
  return (
    <div className="col-lg-4 col-12 mb-3">
      <div className="product-thumb">
        <a href="product-detail.html">
          <img src={imageUrl} className="img-fluid product-image" alt={name} />
        </a>
        <div className="product-top d-flex">
          <span className="product-alert me-auto">{category}</span>
          <a href="#" className="bi-heart-fill product-icon" />
        </div>
        <div className="product-info d-flex">
          <div>
            <h5 className="product-title mb-0">
              <a href="product-detail.html" className="product-title-link">
                {name}
              </a>
            </h5>
            <p className="product-p">{brand}</p>
          </div>
          <small className="product-price text-muted ms-auto">${price}</small>
        </div>
      </div>
    </div>
  );
}
