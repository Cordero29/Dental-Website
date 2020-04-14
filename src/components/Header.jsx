import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import phone from "../images/phone-logo.png";

export default function Header() {
  return (
    <>
      <Navbar id="navbar" expand="xl">
        <Nav id="left-side-nav">
          <p>Dr. Kastenbaum</p>
          {/* <br/> */}
          <a href="tel:+1-212-319-8787">
            <img src={phone} width="24px" height="auto" alt="phone-link" />
            +1-212-319-8787
          </a>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="links" to="/">Our Practice</Link>
            <NavDropdown title="Diagnosis" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="links" to="/dentalexamsandcleaning">Dental Exam + Cleaning</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/xrays">X-Rays</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/oralcancerexams">Oral Cancer Exam</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hygiene">
              <NavDropdown.Item>
                <Link className="links" to="/cleaningandprevention">Cleaning + Prevention</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/homecare">Home Care</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Procedures">
              <NavDropdown.Item>
                <Link className="links" to="/restorations">Restorations</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/dentalimplants">Dental Implants</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/cosmeticdentistry">Cosmetic Dentistry</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/teethwhitening">Teeth Whitening</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="links" to="/seleants">Seleants</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="links" to="/newpatient">New Patient</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
