import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container-fluid bg-light vh-100">
        <div className="row justify-content-center">
          <div
            className="col-lg-8 bg-white py-5 px-3 rounded-3 shadow-sm my-5"
          >
            <div className="row justify-content-evenly">
              <div className="col-lg-5">
                <img
                  src={require("../../img/Illustration.jpg")}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-5">
                <div className="rounded-3 p-3">
                  <h4>Login</h4>
                  <div className="my-4">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="+91 8700282172"
                    />
                  </div>
                  <div className="my-4">
                    <label className="form-label">OTP</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="my-4 d-grid">
                   <Link to={"/mainPowerRegisterForm"}><button className="btn button-style">Proceed</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
