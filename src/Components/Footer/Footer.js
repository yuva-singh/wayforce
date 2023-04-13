import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center py-4">
        <div className="col-lg-3">
          <img
            src={require("../../img/logo/WayForce.jpg")}
            className="img-fluid"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui at
            rerum architecto ducimus officia omnis aliquid, excepturi eveniet
            suscipit eius!
          </p>
          <div className="d-flex">
            <i className="bi bi-facebook mx-1"></i>
            <i className="bi bi-linkedin mx-1"></i>
            <i className="bi bi-twitter mx-1"></i>
            <i className="bi bi-instagram mx-1"></i>
          </div>
        </div>
        <div className="col-lg-2">
          <h5>Our Company</h5>
          <p>
            <Link to={"/"}>Home</Link>
          </p>
          <p>
            <Link to={"/about"}>About</Link>
          </p>
          <p>
            <Link to={"/contact"}>Contact Us</Link>
          </p>
          <p>
            <Link to={"/contact"}>Contact Us</Link>
          </p>
          <p>
            <Link to={"/project"}>Project</Link>
          </p>
        </div>
        <div className="col-lg-2">
          <h5>Service</h5>
          <p>
            <Link to={"/mainPower"}>MainPower</Link>
          </p>
          <p>
            <Link to={"/employer"}>Employer</Link>
          </p>
          <p>
            <Link to={"/agent"}>Agent</Link>
          </p>
        </div>
        <div className="col-lg-2">
          <h5>Address</h5>
          <p>
            <Link to={"/mainPower"}>MainPower</Link>
          </p>
          <p>
            <Link to={"/employer"}>Employer</Link>
          </p>
          <p>
            <Link to={"/agent"}>Agent</Link>
          </p>
        </div>
        <div className="col-lg-2">
          <h5>Subscribe</h5>
          <div className="my-3">
            <label htmlFor="" className="">NewsLetter</label>
            <input type="email" className="form-control shadow" placeholder="Email" />
          </div>
          <div className="d-grid">
          <button className="btn button-style">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="row pt-2" style={{backgroundColor:"#F9AE08"}}>
        <p className="text-center">All Copy Right Reserved Wayforce design and development by <Link to={'/'}>Infinixsys</Link></p>
      </div>
    </div>
  );
}

export default Footer;
