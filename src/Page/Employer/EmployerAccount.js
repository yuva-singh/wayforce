import React from "react";
import { Link } from "react-router-dom";

function EmployerCreateAccount() {
  return (
    <>
      <div className="container-fluid bg-light">
        <form action="">
          <div className="row justify-content-center py-3">
            {/* first */}
            <div className="col-lg-7 my-3">
              <h6 className="yellow">Basic Job Details</h6>
              <div className="rounded-2 shadow p-3 bg-white">
                <div className="row">
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Work Title*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Work Title"
                    />
                  </div>
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Numbers Of Opening</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Ex 2"
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
                    <label className="form-label">
                      Monthly In-Hand Salary*
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Eg 1000$"
                      />
                      <span className="input-group-text">To</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Eg 1500$"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 my-2">
                    <label className="form-label">
                      Work Info /Work Description
                    </label>
                    <textarea className="form-control"></textarea>
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
                    <label className="form-label">Company Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eg. Google"
                    />
                  </div>
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Contact Person Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eg. Amit Kumar"
                    />
                  </div>
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Phone Number*</label>
                    <div className="input-group">
                      <span className="input-group-text">91+</span>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Eg. Amit Kumar"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Email Id*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eg. ak7280032@gmail.com"
                    />
                  </div>
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Contact Person Profile</label>
                    <select className="form-control">
                      <option value="Select Option">Select Option</option>
                      <option value="HR/Owner">HR/Owner</option>
                    </select>
                  </div>
                  <div className="col-lg-6 my-2">
                    <label className="form-label">Company address</label>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
            {/* fourth*/}
            <div className="col-lg-7 my-3">
              <h6 className="yellow">Required Manpower</h6>
              <div className="rounded-2 shadow p-3 bg-white">
                <form action="">
                  <div className="row">
                    <div className="col-lg-6 my-2">
                      <label className="form-label">Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Eg. Amar"
                      />
                    </div>
                    <div className="col-lg-6 my-2">
                      <label className="form-label">Skill*</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Eg. Carpenter"
                      />
                    </div>
                    <div className="text-end">
                      <button className="btn-style-form">Add</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row my-3">
                <div className="col-lg-6 my-2">
                  <div className="rounded-2 shadow p-3 bg-white d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="mt-2">
                        <i className="bi bi-1-circle fs-5"></i>
                      </div>
                      <i className="bi bi-person-circle fs-3 mx-3"></i>
                      <div>
                        <h6>
                          amit Kumar <br />{" "}
                          <span style={{ fontSize: "13px" }}>
                            Skill : Carpenter
                          </span>{" "}
                        </h6>
                      </div>
                    </div>
                    <div className="mt-2" style={{cursor:"pointer"}}>
                      <i className="bi bi-x-lg"></i>
                    </div>
                  </div>
                </div>
              </div>
              <p style={{fontSize:"13px"}}><input type="checkbox" name="" id="" className="inputAccent"/>{" "}I Accept <span><Link to={"/"} className="yellow">Terms & Condition</Link> </span>And <span ><Link  className="yellow" to={"/"}>Privacy Policy*</Link></span></p>
              <div className="text-center">
            <button className="btn button-style">Post</button>
          </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EmployerCreateAccount;
