import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm_password",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });

  return (
    <main>
      <section className="sign-in-form section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto col-12">
              <h1 className="hero-title text-center mb-5">Sign Up</h1>
              <div className="row">
                <div className="col-lg-8 col-11 mx-auto">
                  <form role="form" method="post" onSubmit={onSubmit}>
                    <div className="form-floating">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Email address"
                        required=""
                        onChange={onChange}
                        value={values[RegisterFormKeys.Email]}
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating my-4">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        pattern="[0-9a-zA-Z]{4,10}"
                        className="form-control"
                        placeholder="Password"
                        required=""
                        onChange={onChange}
                        value={values[RegisterFormKeys.Password]}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        pattern="[0-9a-zA-Z]{4,10}"
                        className="form-control"
                        placeholder="Password"
                        required=""
                        onChange={onChange}
                        value={values[RegisterFormKeys.ConfirmPassword]}
                      />
                      <label htmlFor="confirm_password">
                        Password Confirmation
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn custom-btn form-control mt-4 mb-3"
                    >
                      Create account
                    </button>
                    <p className="text-center">
                      Already have an account? Please{" "}
                      <Link to="/login">Sign In</Link>
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
