import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HomePageCategory from "./HomePageCategory";
import Popup from "../../Components/Popup/Popup";
import Faq from "./Faq";

function Home() {
  return (
    <>
     <Popup/>
      <div className="container-fluid py-5 bg-light">
        <div className="row justify-content-center py-3">
          <div className="col-xl-7 ">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-sm-12 my-1">
                <Link to={"/newHome"} className="d-grid">
                  <button className="btn btn-style">Employer</button>
                </Link>
              </div>
              <div className="col-xl-3 col-sm-12 my-1">
                <Link to={"/"} className="d-grid">
                  <button className="btn btn-style">Agent</button>
                </Link>
              </div>
              <div className="col-xl-3 col-sm-12 my-1">
                <Link to={"/"} className="d-grid">
                  <button className="btn btn-style">Manpower</button>
                </Link>
              </div>
            </div>
            {/* tag line */}
            <div className="py-5">
              {" "}
              <h2 className="text-center">
                Manpower And Jobs AnyTime AnyWhere
              </h2>
              <h5 className="text-secondary text-center">
                Thousand of Jobs Waiting For You.{" "}
              </h5>
            </div>
            {/* form */}
            <form action="">
              <div className="row shadow rounded-3 p-3 bg-white justify-content-center">
                <div className="col-lg-12 my-2">
                  <div>
                    <label htmlFor="" className="fw-bold text-secondary">
                      Search
                    </label>
                    <select name="" id="" className="form-control">
                      <option value="1">Search Employer or Job Post</option>
                      <option value="1">carpenter</option>
                      <option value="1">carpenter</option>
                      <option value="1">carpenter</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 my-2">
                  <label htmlFor="">Enter Skill</label>
                  <select name="" id="" className="form-control">
                    <option value="1">Search Employer or Job Post</option>
                    <option value="1">carpenter</option>
                    <option value="1">carpenter</option>
                    <option value="1">carpenter</option>
                  </select>
                </div>
                <div className="col-lg-6 my-2">
                  <label htmlFor="">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Location"
                  />
                </div>
                <div className="col-lg-3 my-2">
                  <button className="btn button-style">
                    <i className="bi bi-search"></i> Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <HomePageCategory />
      <div className="container-fluid">
        <div className="row justify-content-center py-5 background-color">
          <div className="col-lg-10">
            <h4>Whats Makes Way force better?</h4>
            <div className="row">
              <div className="col-lg-4 my-3">
                <div className="text-center">
                  <img src={require("../../img/IMG1.png")} alt="" />
                  <h5>Simple Hiring</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, eveniet.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 my-3">
                <div className="text-center">
                  <img src={require("../../img/IMG2.png")} alt="" />
                  <h5>Intelligent Recommendations</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, eveniet.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 my-3">
                <div className="text-center">
                  <img src={require("../../img/IMG3.png")} alt="" />
                  <h5>Priority customer support</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, eveniet.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-outline-dark">Post Free Job</button>
            </div>
          </div>
        </div>
      </div>
      <Faq/>
    </>
  );
}

export default Home;
