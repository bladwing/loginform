import React from "react";
import Nav from "./Nav";
import "./auth.scss";

const Auth = () => {
  return (
    <section className="vh-200">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://i.pinimg.com/originals/67/c8/0e/67c80e84288363187d050efe51d28b90.jpg"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <Nav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
