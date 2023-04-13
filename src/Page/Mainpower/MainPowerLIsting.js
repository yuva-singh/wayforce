import React from "react";
import { Link } from "react-router-dom";
function MainPowerLIsting() {
  const category = [
    {
      id: 1,
      EmpName: "Amit kumar",
      Skill: "Carpenter",
      Location: "New Delhi",
      time: "Time",
      week: "Monday to Friday",
      salary: "20k-25k",
    },
    {
        id: 2,
        EmpName: "Amar",
        Skill: "Carpenter",
        Location: "Bihar",
        time: "Time",
        week: "Monday to saturday",
        salary: "20k-50k",
      },
      {
        id: 3,
        EmpName: "Sushil",
        Skill: "Fluter Developer",
        Location: "andaman and nicobar",
        time: "Time",
        week: "Monday to sunday",
        salary: "05k-10k",
      },
      {
        id: 4,
        EmpName: "Amit kumar",
        Skill: "Carpenter",
        Location: "New Delhi",
        time: "Time",
        week: "Monday to Friday",
        salary: "20k-25k",
      },
      {
        id: 5,
        EmpName: "Amar",
        Skill: "Carpenter",
        Location: "Bihar",
        time: "Time",
        week: "Monday to saturday",
        salary: "20k-50k",
      },
      {
        id: 6,
        EmpName: "Sushil",
        Skill: "Fluter Developer",
        Location: "andaman and nicobar",
        time: "Time",
        week: "Monday to sunday",
        salary: "05k-10k",
      },
  ];
  return (
    <>
      <div className="container-fluid my-4">
        <div className="row bg-light justify-content-center">
          <div className="col-lg-7 py-4">
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
        <div className="row justify-content-center my-5">
          <div className="col-lg-7">
            <h5>Carpenter</h5>
            {category.map((Data, Index) => {
              const { id, EmpName, week, time, salary, Skill, Location } = Data;
              return (
                <div className="p-3 border rounded-3 shadow-sm my-3" key={id}>
                  <div className="d-flex justify-content-between">
                    <div className="d-lg-flex">
                      <div>
                        {" "}
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt=""
                          className="rounded-2 me-2"
                          width={"50"}
                          height={"50"}
                        />{" "}
                      </div>
                      <div>
                        <span className="fw-bold">{EmpName}</span> <br />{" "}
                        <span> Skill : {Skill}</span>{" "}
                      </div>
                    </div>
                    <div>
                      <button className="button-style btn mx-2">View</button>
                      <button className="button-style btn mx-2">Apply</button>
                    </div>
                  </div>
                  <div>
                    <div className="row d-flex justify-content-end my-2">
                      <div className="col-lg-3 col-6">
                        <div>{Location}</div>
                      </div>
                      <div className="col-lg-2 col-6">
                        <div>{time}</div>
                      </div>
                      <div className="col-lg-3 col-6">
                        <div>{salary}</div>
                      </div>
                      <div className="col-lg-3 col-6">
                        <div>{week}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPowerLIsting;
