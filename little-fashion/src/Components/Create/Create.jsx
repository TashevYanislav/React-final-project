import { create } from "../../services/productService";

export default function Create() {
  const createProductHandler = async (e) => {
    e.preventDefault();

    const productData = Object.fromEntries(new FormData(e.currentTarget));
    console.log(productData);

    const result = await create(productData);
    console.log(result);
  };

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
              onSubmit={createProductHandler}
            >
              <div className="form-floating">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Full name"
                  required=""
                />
                <label htmlFor="name">Product name</label>
              </div>
              <div className="form-floating my-4">
                <input
                  type="category"
                  name="category"
                  id="category"
                  className="form-control"
                  placeholder="Category"
                  required=""
                />
                <label htmlFor="email">Category</label>
              </div>
              <div className="form-floating my-4">
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="form-control"
                  placeholder="Price"
                  required=""
                />
                <label htmlFor="subject">Product price</label>
              </div>
              <div className="form-floating my-4">
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="form-control"
                  placeholder="imageUrl"
                  required=""
                />
                <label htmlFor="subject">Image Url</label>
              </div>
              <div className="form-floating mb-4">
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  placeholder="description"
                  required=""
                  style={{ height: 160 }}
                  defaultValue={""}
                />
                <label htmlFor="message">Tell us about the product...</label>
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
