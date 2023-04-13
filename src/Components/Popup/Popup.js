import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Popup.css";
function Popup() {
  const BorderClass = {
    border: "2px solid #F9AE08",
    borderRadius: "20px",
    cursor: "pointer",
  };
  const [popup, setPop] = useState("d-none");
  window.addEventListener("load", () => {
    setPop("");
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className={`col-lg-8 col-11 display my-5 p-5 shadow rounded-3 ${popup}`}
        >
          <div className="d-flex justify-content-between">
            <div>
              <h4>
                <span className="yellowDark">Way</span>{" "}
                <span className="Green">Force</span>
              </h4>
            </div>
            <div>
              <i className="bi bi-x-lg fs-5" style={{ cursor: "pointer" }} onClick={()=>{setPop("d-none dismissed")}}></i>
            </div>
          </div>
          <h6>Get Going</h6>
          <div className="row justify-content-between">
            <h2>I Am ?</h2>
            <div className="col-lg-3 text-center my-3">
              <Link to={"/employerCreateAccount"}>
                {" "}
                <div style={BorderClass}>
                  {" "}
                  <i className="bi bi-person-fill fs-1 yellowDark"></i>
                  <h4 className="text-dark">Employer</h4>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 text-center my-3">
              <div style={BorderClass}>
                {" "}
                <i className="bi bi-person-circle fs-1 yellowDark"></i>
                <h4>Agent</h4>
              </div>
            </div>
           <div className="col-lg-3 text-center my-3">
           <Link to={"/login"}><div style={BorderClass}>
                {" "}
                <i className="bi bi-people-fill fs-1 yellowDark"></i>
                <h4 className="text-dark">ManPower</h4>
              </div></Link>
            </div>
            <h6 className="text-center my-3">
              I am Already a Member,{" "}
              <Link to={"/login"} className="yellowDark">
                Click Here
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
