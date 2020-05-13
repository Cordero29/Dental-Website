import React, { Fragment } from "react";
// import Collapse from 'react-bootstrap/Collapse'

import phone from "../images/phone.svg";

export default function Header() {
  return (
    <Fragment>
      <nav className="navbar sticky-top navbar-expand-xl navbar-light">
        <nav id="left-side-nav">
          <h1 className="navbar-brand" href="#">
            Dr. Kastenbaum
          </h1>
          <a href="tel:+1-212-319-8787">
            <img src={phone} width="24px" height="auto" alt="phone-link" />
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
          <div className="navbar-nav">
            <a id="outside-links" className="nav-link" href="/">
              Our Practice
            </a>
            <div className="dropdown ">
              <p className="btn dropdown-toggle" data-toggle="dropdown">
                Diagnosis
              </p>
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

            <div className="dropdown">
              <p className="btn dropdown-toggle" data-toggle="dropdown">
                Hygiene
              </p>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/cleaningandprevention">
                  Cleaning + Prevention
                </a>
                <a className="dropdown-item" href="/homecare">
                  Home Care
                </a>
              </div>
            </div>
            <div className="dropdown">
              <p className="btn dropdown-toggle" data-toggle="dropdown">
                Procedures
              </p>
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
            <a style={{ marginLeft: "2em" }} id="outside-links" className="nav-link" href="/newpatient">
              New Patient
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
