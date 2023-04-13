import {React,useState} from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [, setShow] = useState("");
  let navbarHandler = () => {
    let navbarSupportedContent = document.getElementById(
      "navbarSupportedContent"
    );
    setShow(navbarSupportedContent.classList.remove("show"));
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container-fluid mx-3">
        <Link className="navbar-brand" to="/">
          <img src={require("../../img/logo/WayForce.jpg")} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/"}
                onClick={navbarHandler}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us"  onClick={navbarHandler}>
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact-us"  onClick={navbarHandler}>
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-project"  onClick={navbarHandler}>
                My Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/find-manpower"  onClick={navbarHandler}>
                Find Manpower
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/agent-leads"  onClick={navbarHandler}>
                Agent Leads
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <button className="btn btn-warning shadow-sm" type="submit">
              Hire Now
            </button> */}
            <div>
              <Link to={'/login'}>
                <i className="bi bi-person fs-3 mx-3 text-dark"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
