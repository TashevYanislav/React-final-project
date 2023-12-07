import { useNavigate, useParams } from "react-router-dom";
import * as productService from "../../services/productService";
import useForm from "../../hooks/useForm";
import { useEffect, useState } from "react";

export default function Edit() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    materials: "",
    price: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    productService.getOne(productId).then((result) => setProduct(result));
  }, [productId]);

  const editProductHandler = async (values) => {
    try {
      await productService.edit(productId,values);

      navigate(`/products/${productId}`);
    } catch (error) {
      //Error notification
      console.log(error);
    }
  };

  const { values, onChange, onSubmit } = useForm(editProductHandler, product);

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">
              Let's <span>create</span>
            </h2>
            <form
              className="contact-form me-lg-5 pe-lg-3"
              role="form"
              onSubmit={onSubmit}
            >
              <div className="form-floating">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Product name"
                  required=""
                  onChange={onChange}
                  value={values.name}
                />
                <label htmlFor="name">Product name</label>
              </div>
              <div className="form-floating my-4">
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="form-control"
                  placeholder="Category"
                  required=""
                  onChange={onChange}
                  value={values.category}
                />
                <label htmlFor="category">Category</label>
              </div>
              <div className="form-floating my-4">
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="form-control"
                  placeholder="Brand name"
                  required=""
                  onChange={onChange}
                  value={values.brand}
                />
                <label htmlFor="brand">Brand name</label>
              </div>
              <div className="form-floating my-4">
                <input
                  type="text"
                  name="materials"
                  id="materials"
                  className="form-control"
                  placeholder="Materials"
                  required=""
                  onChange={onChange}
                  value={values.materials}
                />
                <label htmlFor="materials">Materials</label>
              </div>
              <div className="form-floating my-4">
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="form-control"
                  placeholder="Price"
                  required=""
                  onChange={onChange}
                  value={values.price}
                />
                <label htmlFor="price">Product price</label>
              </div>
              <div className="form-floating my-4">
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="form-control"
                  placeholder="imageUrl"
                  required=""
                  onChange={onChange}
                  value={values.imageUrl}
                />
                <label htmlFor="imageUrl">Image Url</label>
              </div>
              <div className="form-floating mb-4">
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  placeholder="description"
                  required=""
                  style={{ height: 160 }}
                  onChange={onChange}
                  value={values.description}
                />
                <label htmlFor="description">
                  Tell us about the product...
                </label>
              </div>

              <div className="col-lg-5 col-6">
                <button type="submit" className="form-control">
                  Create
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-12 mt-5 ms-auto">
            <img
              src="https://media.istockphoto.com/id/612263694/vector/kids-creativity-creation-symbols-vector-set.jpg?s=612x612&w=0&k=20&c=02NSrPOAdR_0jNnwrb2l0mg3kVIIs_-SvuWVkP23XOM="
              alt="Create"
            />
          </div>
        </div>
      </div>
    </section>
  );
}