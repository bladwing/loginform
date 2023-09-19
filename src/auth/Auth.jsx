import React from "react";
import SignIn from "./SignIn";

const Auth = () => {
    return (

        <section className="vh-100" style={{ backgroundColor: "#9e9e9e" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://i.pinimg.com/originals/67/c8/0e/67c80e84288363187d050efe51d28b90.jpg"
                                        alt="login form" className="img-fluid" style={{ borderRadius: " 1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <SignIn/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Auth;