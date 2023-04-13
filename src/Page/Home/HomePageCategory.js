import React from "react";
import { Link } from "react-router-dom";

function HomePageCategory() {
  const category = [
    {
      id: 1,
      CompanyName: "Company or Employer Name",
      ViewPageLink: "",
      Skill: "Carpenter",
      Location: "New Delhi",
      AvailableVacancy: "130",
    },
    {
      id: 2,
      CompanyName: "Company or Employer Name",
      ViewPageLink: "",
      Skill: "Carpenter",
      Location: "New Delhi",
      AvailableVacancy: "130",
    },
    {
      id: 3,
      CompanyName: "Company or Employer Name",
      ViewPageLink: "",
      Skill: "Carpenter",
      Location: "New Delhi",
      AvailableVacancy: "130",
    },
    {
      id: 4,
      CompanyName: "Company or Employer Name",
      ViewPageLink: "",
      Skill: "Carpenter",
      Location: "New Delhi",
      AvailableVacancy: "130",
    },
    {
      id: 5,
      CompanyName: "Company or Employer Name",
      ViewPageLink: "",
      Skill: "Carpenter",
      Location: "New Delhi",
      AvailableVacancy: "130",
    },
  ];
  return (
    <>
      <div className="container-fluid my-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h5>Category</h5>
            {category.map((Data, Index) => {
              const {
                id,
                CompanyName,
                ViewPageLink,
                Skill,
                Location,
                AvailableVacancy,
              } = Data;
              return(
              <div className="p-3 border rounded-3 shadow-sm my-3" key={id}>
                <div className="d-flex justify-content-between">
                  <h6 className="fw-bold">{CompanyName}</h6>
                  <h6>
                    <Link to={`/mainPowerListing`} className="yellow">
                      View All
                    </Link>
                  </h6>
                </div>
                <div>
                  <div className="row d-flex justify-content-between my-2">
                    <div className="col-lg-4">
                      <h6>Required Skill : {Skill}</h6>
                    </div>
                    <div className="col-lg-4">
                      <h6>Location : {Location}</h6>
                    </div>
                    <div className="col-lg-4">
                      <h6>Available Vacancy : {AvailableVacancy}</h6>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default HomePageCategory;
