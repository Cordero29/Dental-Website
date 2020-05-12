import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card'

import image1 from "../images/Image-1.jpeg";
import image2 from "../images/Image-2.jpeg";
import image3 from "../images/Image-3.jpeg";
import image4 from "../images/Image-4.jpg";
import image5 from "../images/Image-5.jpeg";
import image6 from "../images/Image-6-Homepage-Hero-Image.jpg";
import image7 from "../images/Image-7.jpg";

const key =
  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJp4O4-e5YwokR8L3wUUm5oBs&key=AIzaSyBEalpz1JulLFte1q1lealTVjbHT3blXO4";

export default function DentalImplants() {
  return (
    <div id="dental-implants-page">
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
        <Carousel.Item>
          <img
            src={image7}
            width="100%"
            height="500px"
            alt="view of the dental office"
          />
        </Carousel.Item>
      </Carousel>
      <div id="dental-implants-content">
        <h2>Dental Implants</h2>
        <p>
          Dental implants are a professional remedy for replacing missing teeth.
          Instead of having removable partial or complete denturses, implants
          offer a fixed solution. Implants provide excellent support and
          stability for dental restorations.
        </p>
        <p>
          Dental implants are artificial roots and teeth (usually titanium) that
          are surgically placed into the upper or lower jaw bone by a dentist or
          Periodontist - a specialist of the gums and supporting bone. The teeth
          attached to implants are very natural looking and often enhance or
          restore a patient’s smile!
        </p>
        <p style={{ marginBottom: "3em" }}>
          Dental implants are very strong, stable, and durable and will last
          many years. On occasion, they may nweed to be re-tightened or replaced
          due to normal wear.
        </p>
        <h3>Reasons for dental implants:</h3>
        <ul>
          <li>
            Replace one or more missing teeth without affecting adjacent teeth
          </li>
          <li>
            Resolve joint pain or bite problems caused by teeth shifting into
            missing tooth space
          </li>
          <li>Restore a patient’s confident smile</li>
          <li>Restore chewing, speech, and digestion</li>
          <li>Restore or enhance facial tissues</li>
          <li>
            Support a bridge or denture, making them more secure and comfortable
          </li>
        </ul>
        <h3>What does getting dental implants involve?</h3>
        <p>
          X-rays and impressions (molds) are taken of the jaw and teeth to
          determine bone, gum tissue, and spacing available for an implant.
          While the area is numb, the implant will be surgically placed into the
          bone and allowed to heal and integrate itself onto the bone for up to
          six months. Depending on the type of implant, a second surgery may be
          required in order to place the “post” that will hold the artificial
          tooth in place. With other implants the post and anchor are already
          attached and placed at the same time.
        </p>
        <p>
          After several weeks of healing the artificial teeth are made and
          fitted to the post portion of the anchor. Because several fittings may
          be required, this step may take one to two months to complete. After a
          healing period, the artificial teeth are securely attached to the
          implant, providing excellent stability and comfort for the patient.
        </p>
        <p style={{ marginBottom: "6em" }}>
          You will receive care instructions when your treatment is completed.
          Good oral hygiene, eating habits, and regular dental visits will aid
          in the life of your new implant.
        </p>
        <div className="secondary-bar"></div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Composite Fillings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p style={{ marginBottom: '2em' }}>
                  Implant supported crowns are individual ceramic restorations
                  supported by a dental implant and used when a natural tooth is
                  lost due to trauma, infection or was congenitally missing. A
                  single implant crown is constructed and connected to an
                  implant as a unique restoration creating a natural aesthetic
                  look and feel.
                </p>
                <h3 style={{ marginBottom: 0 }}>
                  Call Today to Schedule an Appointment
                </h3>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Composite Fillings
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p style={{ marginBottom: '2em' }}>
                  A full arch replacement consists of a ceramic restoration
                  supported by multiple dental implants. When multiple teeth are
                  missing, a full arch replacement is the best choice of
                  treatment, because unlike a conventional bridge, adjacent
                  teeth do not have to be prepared. Distinct from a partial or
                  full denture, a full arch remplacement is not removable by the
                  patient. When the patient is completely edentulous, a full
                  arch implant supported restoration is the ideal course of
                  treatment. Compared with a removable denture, an implant
                  supported restoration offers the patient the appearance and
                  function of their own natural teeth.
                </p>
                <h3 style={{ marginBottom: 0 }}>
                  Call Today to Schedule an Appointment
                </h3>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
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
