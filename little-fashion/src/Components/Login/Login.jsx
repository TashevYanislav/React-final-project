import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

const loginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login({ loginSubmitHandler }) {
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [loginFormKeys.Email]: "",
    [loginFormKeys.Password]: "",
  });

  return (
    <main>
      <section className="sign-in-form section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto col-12">
              <h1 className="hero-title text-center mb-5">Sign In</h1>
              <div className="row">
                <div className="col-lg-8 col-11 mx-auto">
                  <form role="form" method="post" onSubmit={onSubmit}>
                    <div className="form-floating mb-4 p-0">
                      <input
                        type="email"
                        name={loginFormKeys.Email}
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Email address"
                        required=""
                        onChange={onChange}
                        value={values[loginFormKeys.Email]}
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating p-0">
                      <input
                        type="password"
                        name={loginFormKeys.Password}
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required=""
                        onChange={onChange}
                        value={values[loginFormKeys.Password]}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <button
                      type="submit"
                      className="btn custom-btn form-control mt-4 mb-3"
                    >
                      Sign in
                    </button>
                    <p className="text-center">
                      Don’t have an account?{" "}
                      <Link to="/register">Create One</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
