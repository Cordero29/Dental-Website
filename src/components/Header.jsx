import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

import phone from "../images/phone-logo.png";

export default function Header() {
  return (
    <Fragment>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <nav id="left-side-nav">
          <h1 className="navbar-brand" href="#">
            Dr. Kastenbaum
          </h1>
          <a href="tel:+1-212-319-8787">
            <img src={phone} width="26px" height="auto" alt="phone-link" />
            212-319-8787
          </a>
        </nav>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a id="outside-links" className="nav-link" href="/">
                Our Practice
              </a>
            </li>
            <li className="nav-item">
              <div className="dropdown ">
                <a href="/" className="btn dropdown-toggle" data-toggle="dropdown">
                  Diagnosis
                </a>
                <div
                  className="dropdown-menu "
                  aria-labelledby="dropdownMenuReference"
                >
                  <a className="dropdown-item" href="/dentalexamsandcleaning">
                    Dental Exam + Cleaning
                  </a>
                  <a className="dropdown-item" href="/xray">
                    X-Rays
                  </a>
                  <a className="dropdown-item" href="/oralcancerexam">
                    Oral Cancer Exam
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a href="/" className="btn dropdown-toggle" data-toggle="dropdown">
                  Hygiene
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/cleaningandprevention">
                    Cleaning + Prevention
                  </a>
                  <a className="dropdown-item" href="/homecare">
                    Home Care
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a href="/" className="btn dropdown-toggle" data-toggle="dropdown">
                  Procedures
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/restorations">
                    Restorations
                  </a>
                  <a className="dropdown-item" href="/dentalimplants">
                    Dental Implants
                  </a>
                  <a className="dropdown-item" href="/cosmeticdentistry">
                    Cosmetic Dentistry
                  </a>
                  <a className="dropdown-item" href="/teethwhitening">
                    Teeth Whitening
                  </a>
                  <a className="dropdown-item" href="/sealants">
                    Sealants
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item active">
              <a id="outside-links" className="nav-link" href="/newpatient">
                New Patient
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
