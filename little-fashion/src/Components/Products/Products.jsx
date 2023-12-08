import { useEffect, useState } from "react";
import * as productService from "../../services/productService";
import ProductListItem from "./productListItem/ProductListItem";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((result) => setProducts(result));
  }, []);

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
            {products.map((product) => (
              <ProductListItem key={product._id} {...product} />
            ))}
            {products.length === 0 && (
              <h1 className="hero-title text-center mb-5">No products yet</h1>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
