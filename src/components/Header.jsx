import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import phone from "../images/phone-logo.png";

export default function Header() {
  return (
    <>
      <Navbar id="main-navbar" expand="lg">
        <Nav id="left-side-nav">
          <h1>Dr. Kastenbaum</h1>
          <a href="tel:+1-212-319-8787">
            <img
              src={phone}
              width="26px"
              height="auto"
              style={{ marginRight: 5, marginBottom: 5 }}
              alt="phone-link"
            />
            212-319-8787
          </a>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="outside-links" to="/">
              Our Practice
            </Link>
            <NavDropdown title="Diagnosis" id="basic-nav-dropdown">
              <NavDropdown.Item href='/dentalexamsandcleaning'> 
                  Dental Exam + Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item href='/xray'>
                  X-Rays
              </NavDropdown.Item>
              <NavDropdown.Item href='/oralcancerexam'>
                  Oral Cancer Exam
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hygiene">
              <NavDropdown.Item href='/cleaningandprevention' >
                  Cleaning + Prevention
              </NavDropdown.Item>
              <NavDropdown.Item href='/homecare'>
                  Home Care
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Procedures">
              <NavDropdown.Item href='/restorations'>
                  Restorations
              </NavDropdown.Item>
              <NavDropdown.Item href='/dentalimplants'>
                  Dental Implants
              </NavDropdown.Item>
              <NavDropdown.Item href='/cosmeticdentistry'>
                  Cosmetic Dentistry
              </NavDropdown.Item>
              <NavDropdown.Item href='/teethwhitening'>
                  Teeth Whitening
              </NavDropdown.Item>
              <NavDropdown.Item href='/sealants'>
                  Sealants
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="outside-links" to="/newpatient">
              New Patient
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
