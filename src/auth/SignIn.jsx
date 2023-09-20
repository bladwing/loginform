import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="col-md-6 col-lg-7 d-flex align-items-center">
      <div className="card-body p-4 p-lg-5 text-black">
        <form>
          <div className="d-flex align-items-center mb-3 pb-1">
            <span className="h1 fw-bold mb-0">Logo</span>
          </div>

          <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
            Sign into your account
          </h5>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example17"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form2Example17">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example27"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form2Example27">
              Password
            </label>
          </div>

          <div className="pt-1 mb-4">
            <button className="btn btn-dark btn-lg btn-block" type="button">
              Login
            </button>
          </div>

          <a className="small text-muted" href="#!">
            Forgot password?
          </a>
          <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
            Don't have an account?{" "}
            <Link to="/registration" style={{ color: "#393f81" }}>
              Register here
            </Link>
          </p>
          <Link to="/terms" className="small text-muted">
            Terms of use.
          </Link>
          <Link to="/policy" className="small text-muted ms-2">
            Privacy policy
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
