import React from "react";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../images/Image-1.jpeg";
import image2 from "../images/Image-2.jpeg";
import image3 from "../images/Image-3.jpeg";
import image4 from "../images/Image-4.jpg";
import image5 from "../images/Image-5.jpeg";
import image6 from "../images/Image-6-Homepage-Hero-Image.jpg";
import image7 from "../images/Image-7.jpg";

import file1 from "../images/Notice-Of-Privacy-Practies.pdf";
import file2 from "../images/Medical-History-Form.pdf";
import file3 from "../images/Informed-Consent.pdf";
import file4 from "../images/HIPPA-signature-pg.pdf";

export default function NewPatient() {
  return (
    <div id="new-patient-page">
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
      <div id="new-patient-content">
        <h2>New Patient Forms</h2>

        <p>
          Prior to your first appointment, please download the forms below. Upon
          completion, please email them to{" "}
          <a
            href="mailto:info@kastenbaumpros.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@kastenbaumpros.com
          </a>
          .
        </p>
        <div id="new-patient-files">
          <a href={file1} target="_blank" rel="noopener noreferrer">
            Notice Of Privacy Practices
          </a>
          <a href={file2} target="_blank" rel="noopener noreferrer">
            Medical History Form
          </a>
          <a href={file3} target="_blank" rel="noopener noreferrer">
            Informed Consent
          </a>
          <a href={file4} target="_blank" rel="noopener noreferrer">
            HIPPA
          </a>
        </div>
        <a id="new-patient-cta" href="/">
          Contact Us
        </a>
        <div id="new-patient-bar"></div>
      </div>
      <iframe
        title="Google Maps Location of Dental Office"
        width="100%"
        height="372"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJp4O4-e5YwokR8L3wUUm5oBs&key=AIzaSyBEalpz1JulLFte1q1lealTVjbHT3blXO4"
        allowFullScreen
      ></iframe>
    </div>
  );
}
