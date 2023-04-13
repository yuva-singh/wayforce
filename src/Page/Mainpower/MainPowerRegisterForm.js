import React from "react";
import { Link } from "react-router-dom";

function MainPowerRegisterForm() {
  return (
    <div>
      <div className="container-fluid bg-light">
        <form action="">
          <div className="row justify-content-center py-3">
            {/* first */}
            <div className="col-lg-7 my-3">
              <h6 className="yellow">Basic Details</h6>
              <div className="rounded-2 shadow p-3 bg-white">
                <div className="row">
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Address*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="col-lg-12 my-2">
                    <label className="form-label">Work Location</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pickup Location"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Drop Location"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* second */}
            <div className="col-lg-7 my-3">
              <h6 className="yellow">Additional Job Details</h6>
              <div className="rounded-2 shadow p-3 bg-white">
                <div className="row">
                  <div className="col-lg-12 my-2">
                    <label className="form-label">Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="10th Pass"
                    />
                  </div>
                  <div className="col-lg-12 my-2">
                    <label className="form-label">Skill*</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter Skill"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            {/* third */}
            <div className="col-lg-7 my-3">
              <h6 className="yellow">About Your Company</h6>
              <div className="rounded-2 shadow p-3 bg-white">
                <div className="row">
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Upload image*</label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Upload Resume*</label>
                    <input type="file" className="form-control" />
                  </div>
                  {/* <div className="col-lg-6 my-2">
                    <label className="form-label">Phone Number*</label>
                    <div className="input-group">
                      <span className="input-group-text">91+</span>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Eg. Amit Kumar"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="my-2">
                <p style={{ fontSize: "13px" }}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="inputAccent"
                  />{" "}
                  I Accept{" "}
                  <span>
                    <Link to={"/"} className="yellow">
                      Terms & Condition
                    </Link>{" "}
                  </span>
                  And{" "}
                  <span>
                    <Link className="yellow" to={"/"}>
                      Privacy Policy*
                    </Link>
                  </span>
                </p>
                <div className="text-center">
                  <button className="btn button-style">Post</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MainPowerRegisterForm;
