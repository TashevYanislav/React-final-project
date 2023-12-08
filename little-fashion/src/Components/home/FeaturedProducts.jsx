import { Link } from "react-router-dom";
import * as productService from "../../services/productService";
import { useEffect, useState } from "react";
import LatestProduct from "./latestProduct/LatestProduct";

export default function FeaturedProducts() {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    productService.getLatest().then((result) => setLatestProducts(result));
  }, []);

  return (
    <section className="featured-product section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-5">Latest Products</h2>
          </div>

          {latestProducts.map((product) => (
            <LatestProduct key={product._id} {...product} />
          ))}
          {!latestProducts.length && <h2 className="mb-5">Latest Products</h2>}

          <div className="col-12 text-center">
            <Link to="/products" className="view-all">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
