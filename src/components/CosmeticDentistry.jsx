import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import image1 from "../images/Image-1.jpeg";
import image2 from "../images/Image-2.jpeg";
import image3 from "../images/Image-3.jpeg";
import image4 from "../images/Image-4.jpg";
import image5 from "../images/Image-5.jpeg";
import image6 from "../images/Image-6-Homepage-Hero-Image.jpg";

const key =
  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJp4O4-e5YwokR8L3wUUm5oBs&key=AIzaSyBEalpz1JulLFte1q1lealTVjbHT3blXO4";

export default function CosmeticDentistry() {

  const [arrow, setArrow] = useState(false);

  return (
    <div id="cosmetic-dentistry-page">
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
      <div id="cosmetic-dentistry-content">
        <h2>Cosmetic Dentistry</h2>
        <p style={{ marginBottom: "3em" }}>
          In the past decade there has been a dramatic interest in cosmetic
          dentistry. We all realize that having a healthy, bright, beautiful
          smile enhances our appearance and allows us to smile with confidence.
          Thanks to the advances in modern cosmetic dentistry, we are able to
          improve our teeth and our smiles quickly and painlessly.
        </p>
        <h3>Cosmetic dental treatments can:</h3>
        <ul>
          <li>Change the size, shape, and alignment of teeth</li>
          <li>Fill in unattractive spaces between teeth</li>
          <li>Improve or correct bites</li>
          <li>Lighten or brighten the color of teeth</li>
          <li>Repair decayed, broken, cracked, or chipped teeth</li>
          <li>Replace missing teeth</li>
          <li>Replace old, unattractive dental restorations</li>
        </ul>
        <h3 style={{ fontStyle: "italic", marginBottom: "6em" }}>
          Remember, your smile speaks before you even say a word!
        </h3>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => setArrow(!arrow)}>
              Veneers
              <p>{ arrow ? "▲" : "▼" }</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p style={{ marginBottom: "2em" }}>
                Veneers are thin ceramic restorations that are uniquely
                fabricated to replace the enamel portion of the tooth. With a
                veneer the clinician can re-create a patient’s smile in a
                conservative manner. Change of size, shape, shade and/or
                alignment can be achieved overcoming many aesthetic issues.
              </p>
              <h3 style={{ marginBottom: 0 }}>
                Call Today to Schedule an Appointment
              </h3>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1" onClick={() => setArrow(!arrow)}>
              Ceramic Inlays/Onlays
              <p>{ arrow ? "▲" : "▼" }</p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p style={{ marginBottom: "2em" }}>
                Ceramic Inlays /Onlays can be utilized to conservatively repair
                teeth that have large defective fillings or have been damaged by
                decay or trauma. Onlays are essentially identical to inlays with
                the exception that one or more of the chewing cusps have also
                been affected and need to be included in the restoration.
              </p>
              <h3 style={{ marginBottom: 0 }}>
                Call Today to Schedule an Appointment
              </h3>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
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
