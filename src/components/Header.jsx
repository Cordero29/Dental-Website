import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import phone from "../images/phone-logo.png";

export default function Header() {
  return (
    <>
      <Navbar id="main-navbar" expand="xl">
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
              <NavDropdown.Item>
                <Link className="links" to="/dentalexamsandcleaning">
                  Dental Exam + Cleaning
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/xray">
                  X-Rays
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/oralcancerexam">
                  Oral Cancer Exam
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hygiene">
              <NavDropdown.Item>
                <Link className="links" to="/cleaningandprevention">
                  Cleaning + Prevention
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/homecare">
                  Home Care
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Procedures">
              <NavDropdown.Item>
                <Link className="links" to="/restorations">
                  Restorations
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/dentalimplants">
                  Dental Implants
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/cosmeticdentistry">
                  Cosmetic Dentistry
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/teethwhitening">
                  Teeth Whitening
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/sealants">
                  Sealants
                </Link>
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
