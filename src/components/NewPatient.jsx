import React from "react";
import Carousel from "react-bootstrap/Carousel";

import image6 from "../images/Image-1.jpeg";
import image2 from "../images/Image-2.jpeg";
import image3 from "../images/Image-3.jpeg";
import image4 from "../images/Image-4.jpg";
import image5 from "../images/Image-5.jpeg";
import image1 from "../images/Image-6-Homepage-Hero-Image.jpg";

import pdf1 from "../images/Medical-History-Form.pdf";
import pdf2 from "../images/Informed-Consent.pdf";
import pdf3 from "../images/Notice-Of-Privacy-Practices.pdf";
import pdf4 from "../images/HIPPA.pdf";

const key =
  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJp4O4-e5YwokR8L3wUUm5oBs&key=AIzaSyBEalpz1JulLFte1q1lealTVjbHT3blXO4";

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
            height="500px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image2}
            width="100%"
            height="500px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image3}
            width="100%"
            height="500px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image4}
            width="100%"
            height="500px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image5}
            width="100%"
            height="500px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image6}
            width="100%"
            height="500px"
            alt="view of the dental office"
          />
        </Carousel.Item>
      </Carousel>
      <div id="new-patient-content">
        <h2>New Patient Forms</h2>
        <p>
          Prior to your first appointment, please download the forms below. Upon
          completion, please email them to&nbsp;
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
          <a href={pdf1} download>
            Medical History Form
          </a>
          <a href={pdf2} download>
            Informed Consent
          </a>
          <a href={pdf3} download>
            Notice Of Privacy Practices
          </a>
          <a href={pdf4} download>
            HIPPA
          </a>
        </div>
        <a id="new-patient-cta" href="tel:+1-212-319-8787">
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
        src={key}
        allowFullScreen
      ></iframe>
    </div>
  );
}
