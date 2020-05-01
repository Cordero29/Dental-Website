import React from "react";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../images/Image-1.jpeg";
import image2 from "../images/Image-2.jpeg";
import image3 from "../images/Image-3.jpeg";
import image4 from "../images/Image-4.jpg";
import image5 from "../images/Image-5.jpeg";
import image6 from "../images/Image-6-Homepage-Hero-Image.jpg";
import image7 from "../images/Image-7.jpg";

const key =
  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJp4O4-e5YwokR8L3wUUm5oBs&key=AIzaSyBEalpz1JulLFte1q1lealTVjbHT3blXO4";

export default function DentalExamsCleaning() {
  return (
    <div id="dental-exams-cleaning">
      <div className="every-other-page-overlay">
        <h1>Fred Kastenbaum, D.M.D. - Prosthodontist</h1>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            src={image1}
            width="100%"
            height="450px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image2}
            width="100%"
            height="450px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image3}
            width="100%"
            height="450px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image4}
            width="100%"
            height="450px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image5}
            width="100%"
            height="450px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image6}
            width="100%"
            height="450px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image7}
            width="100%"
            height="450px"
            alt="view of the dental office"
          />
        </Carousel.Item>
      </Carousel>
      <div id="dental-exams-cleaning-content">
        <h2>Dental Exams & Cleaning</h2>

        <h3>Exam</h3>
        <p>
          A comprehensive dental exam will be performed by your dentist and
          hyiegnest at your initial dental visit.
        </p>
        <h3 id="exams-checklist">
          At regular check-up exams, your dentist and hygienist will perform the
          following:
        </h3>
        <ul>
          <li>
            <strong>Examination of diagnostic x-rays (radiographs):</strong>{" "}
            Essential for detection of decay, tumors, cysts, and bone loss.
            X-rays also help determine tooth and root positions.
          </li>
          <li>
            <strong>Oral cancer screening:</strong> Check the face, neck, lips,
            tongue, throat, tissues, and gums for any signs of oral cancer.
          </li>
          <li>
            <strong>Gum disease evaluation:</strong> Check the gums and bone
            around the teeth for any signs of periodontal disease.
          </li>
          <li>
            <strong>Examination of tooth decay:</strong> All tooth surfaces will
            be checked for decay with special dental instruments.
          </li>
          <li>
            <strong>Examination of existing restorations:</strong> Check current
            fillings, crowns, and bridges.
          </li>
          <li>
            <strong>Personal home care instruction:</strong> Explaination of
            tooth brushing and flosing.
          </li>
        </ul>
        <h3 style={{ fontStyle: "italic", marginBottom: "15em" }}>
          Call Today to Schedule an Appointment
        </h3>
        <div className="secondary-bar"></div>
      </div>
      <iframe
        title="Google Maps Location of Dental Office"
        width="100%"
        height="372"
        frameBorder="0"
        style={{ border: 0 }}
        src={key}
        allowFullScreen
      ></iframe>
    </div>
  );
}
