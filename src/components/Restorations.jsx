import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card'

import image6 from "../images/Image-1.jpeg";
import image2 from "../images/Image-2.jpeg";
import image3 from "../images/Image-3.jpeg";
import image4 from "../images/Image-4.jpg";
import image5 from "../images/Image-5.jpeg";
import image1 from "../images/Image-6-Homepage-Hero-Image.jpg";

const key =
  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJp4O4-e5YwokR8L3wUUm5oBs&key=AIzaSyBEalpz1JulLFte1q1lealTVjbHT3blXO4";

export default function Restorations() {

  const [arrow1, setArrow1] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [arrow3, setArrow3] = useState(false);

  return (
    <div id="restorations-page">
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
      <div id="restorations-content">
        <h2>Restorations</h2>
        <p style={{ marginBottom: "3em" }}>
          The incidence of tooth decay has significantly diminished over the
          years due to the usage of fluorides and an increase in patient
          awareness. However, teeth are still susceptible to decay, infection,
          and breakage and will need to be restored. Through improved techniques
          and modern technology, we are now able to offer more options for
          restoring a tooth back to its normal shape, appearance and function.
        </p>
        <h3>Reasons for restorative dentistry:</h3>
        <ul>
          <li>Enhance your smile</li>
          <li>Fill in unattractive spaces between teeth</li>
          <li>Improve or correct an improper bite</li>
          <li>Prevent the loss of a tooth</li>
          <li>Relieve dental pain</li>
          <li>Repair damaged and decayed teeth</li>
          <li>Replace missing teeth</li>
          <li>Replace old, unattractive dental restorations</li>
          <li>Restore normal eating and chewing</li>
        </ul>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0" onClick={() => setArrow1(!arrow1)}>
              Composite Fillings
              <p>{ arrow1 ? "▲" : "▼" }</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <p>
            A composite (tooth colored) filling is used to repair a tooth that
            is affected by decay, cracks, fractures, etc. The decayed or
            affected portion of the tooth will be removed and then filled with a
            composite filling, because composite fillings are tooth colored,
            they can be closely matched to the color of existing teeth, and are
            more aesthetically suited for use in front teeth or the more visible
            areas of the mouth. As with most dental restorations, composite
            fillings are not permanent and may someday have to be replaced, but
            they are very durable, and will last many years, giving you a long
            lasting, beautiful smile.
          </p>
          <h3>Reasons for composite fillings:</h3>
          <ul style={{ marginBottom: '1.5em' }} >
            <li>Chipped teeth</li>
            <li>Closing space between two teeth</li>
            <li>Cracked or broken teeth</li>
            <li>Decayed teeth</li>
            <li>Worn teeth</li>
          </ul>
          <h3>How are composite fillings placed?</h3>
          <p>
            Composite fillings are usually placed in one appointment. While the
            tooth is numb, your dentist will remove decay as necessary. The
            space will then be thoroughly cleaned and carefully prepared before
            the new filling is placed. If the decay was near the nerve of the
            tooth, a special medication will be applied for added protection.
            The composite filling will then be precisely placed, shaped, and
            polished, restoring your tooth to its original shape and function.
            It is normal to experience sensitivity to hot and cold when
            composite fillings are first placed, however this will subside
            shortly after your tooth acclimates to the new filling.
          </p>
          <p style={{ marginBottom: '2em' }} >
            You will be given care instructions at the conclusion of your
            treatment. Good oral hygiene practices, eating habits, and regular
            dental visits will aid in the life of your new fillings.
          </p>
          <h3 style={{ marginBottom: 0 }}>Call Today to Schedule an Appointment</h3>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1" onClick={() => setArrow2(!arrow2)}>
              Ceramic Inlays/Onlays
              <p>{ arrow2 ? "▲" : "▼" }</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              <p style={{ marginBottom: '2em' }}>
            Ceramic Inlays/Onlays can be utilized to conservatively repair teeth
            that have large defective fillings or have been damaged by decay or
            trauma. Onlays are essentially identical to inlays with the
            exception that one or more of the chewing cusps have also been
            affected and need to be included in the restoration.
          </p>
          <h3 style={{ marginBottom: 0 }}>Call Today to Schedule an Appointment</h3>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2" onClick={() => setArrow3(!arrow3)}>
              Ceramic Crowns
              <p>{ arrow3 ? "▲" : "▼" }</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
              <p style={{ marginBottom: '2em' }}>
            Ceramic crowns are ideal restorations for anterior teeth as they are
            more translucent, allowing for the light reflection of the natural
            tooth to come through. With the use of these materials we are able
            to fabricate an extremely aesthetic restoration that is strong,
            pleasing and biocompatible.
          </p>
          <h3 style={{ marginBottom: 0 }}>Call Today to Schedule an Appointment</h3>
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
