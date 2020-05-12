import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import image1 from "../images/Image-1.jpeg";
import image2 from "../images/Image-2.jpeg";
import image3 from "../images/Image-3.jpeg";
import image4 from "../images/Image-4.jpg";
import image5 from "../images/Image-5.jpeg";
import image6 from "../images/Image-6-Homepage-Hero-Image.jpg";
import image7 from "../images/Image-7.jpg";

const key =
  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJp4O4-e5YwokR8L3wUUm5oBs&key=AIzaSyBEalpz1JulLFte1q1lealTVjbHT3blXO4";

export default function TeethWhitening() {
  return (
    <div id="teeth-whitening-page">
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
      <div id="teeth-whitening-content">
        <h2>Teeth Whitening</h2>
        <p style={{ marginBottom: "3em" }}>
          Teeth whitening is an excellent means for an individual to brighten
          their yellowing or dull gray appearing teeth in a short painless
          procedure in the office or with a take home kit. Not only is teeth
          whitening effective, but it can also drastically change your smile and
          improve your self-esteem at the same time.
        </p>
        <h3>Reasons for tooth whitening:</h3>
        <ul>
          <li>Fluorosis (excessive fluoridation during tooth development)</li>
          <li>Normal wear of outer tooth layer</li>
          <li>Stained teeth due to medications (e.g. tetracycline)</li>
          <li>Yellow, brown stained teeth</li>
        </ul>
        <div className="secondary-bar"></div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Zoom!®
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p style={{ marginBottom: "2em" }}>
                  A pearly-white smile is beautiful to look at and can greatly
                  improve self-confidence. Many people are opting for the Zoom!®
                  Chairside Whitening System (Zoom!®) for fast, safe and
                  effective teeth whitening. Zoom!® combines the newest advances
                  in dental technology with proven chemical formulas.This
                  ensures that the bleaching experience is painless and with
                  results that are excellent.
                </p>
                <p>
                  There are many reasons why teeth become stained or discolored,
                  including tobacco use and drinking dark liquids such as red
                  wine, coffee, tea and cola. Aging and prescription medication
                  use can also cause yellowing and graying of teeth.
                </p>
                <p>
                  Many over-the counter whitening treatments exist in the
                  marketplace but they are traditionally less effective and may
                  not elicit the desired results.
                </p>
                <h3>
                  Zoom!® has many advantages over these other treatments,
                  including:
                </h3>
                <ul style={{ marginBottom: '2em' }}>
                  <li>All teeth treated simultaneously</li>
                  <li>Faster treatment times</li>
                  <li>Longer lasting results</li>
                  <li>Reduced sensitivity</li>
                  <li>
                    Removal of stains on crowns, veneers and other restorations
                  </li>
                  <li>Safe procedure and treatment</li>
                  <li>Treatments are performed by an experienced hygienist</li>
                </ul>
                <p style={{ marginBottom: '3em', fontStyle: 'italic' }}>
                  It is important to seek advice from a dentist prior to
                  beginning a bleaching regime. Women who are pregnant or
                  lactating should not seek bleaching treatment.
                </p>
                <h3>How does Zoom!® whiten the teeth?</h3>
                <p>
                  Zoom!® is a bleaching process that lightens the dentin and
                  enamel of the teeth. Zoom!® contains a hydrogen peroxide
                  component (25%), which is the active ingredient in the gel.
                  When hydrogen peroxide is applied to the teeth, the peroxide
                  component breaks down into tiny oxygen bubbles. It is these
                  bubbles that eliminate yellowing and staining.
                </p>
                <p>
                  A mercury metal halide light is used to activate the gel and
                  expedite the whitening process. This specialized light
                  contains a unique infrared filter that works to reduce the
                  amount of heat (and therefore sensitivity) on the surface of
                  the teeth during the procedure. The internal structure of the
                  teeth remains completely healthy and intact during and after
                  the treatment.
                </p>
                <p>
                  As with any whitening system, the post-treatment results can
                  vary according to the degree of staining and the condition of
                  the teeth. A consultation with the dentist and/or hygienist
                  prior to treatment will provide information as to what kind of
                  results Zoom!® can provide in specific instances. Zoom!® is
                  only applied to healthy teeth and gums. If tooth decay or gum
                  disease is an issue, these need to be controlled before the
                  bleaching treatment is performed.
                </p>
                <h3 style={{ marginBottom: '2em' }}>How is the Zoom!® treatment performed?</h3>
                <h3>Brief overview of the Zoom!® procedure:</h3>
                <ul style={{ marginBottom: '3em' }}>
                  <li>
                    Cheek retractors will be placed to expose the entire surface
                    of the teeth
                  </li>
                  <li>
                    The gums will be painted or covered to reduce sensitivity
                  </li>
                  <li>
                    The dentist or hygienist will apply the whitening gel to the
                    teeth
                  </li>
                  <li>
                    The halide light will then be applied to activate the gel.
                    This specialized Zoom!® light can be positioned to work on
                    all the teeth simultaneously
                  </li>
                  <li>
                    After 15 minutes, gel will be removed from the teeth and the
                    mouth will be rinsed
                  </li>
                  <li>More gel will be applied for another 15 minutes</li>
                  <li>
                    Again, the gel will be removed and the mouth will be
                    thoroughly cleansed
                  </li>
                  <li>
                    The final treatment of gel will be applied for 15 minutes
                  </li>
                  <li>The gel will be removed for the final time</li>
                </ul>
                <h3>What happens after treatment?</h3>
                <p style={{ marginBottom: '2em' }}>
                  The dentist and hygienist recommend flossing once a day and
                  thorough cleaning with anti-sensitivity toothpaste twice a
                  day,. These post-treatment measures will ensure that your
                  smile stays its whitest for a long time.
                </p>
                <h3 style={{ fontStyle: 'italic', marginBottom: '3em' }}>If you have questions about the Zoom!® Chairside System, please consult with your dentist or hygenist.</h3>
                <h3 style={{ marginBottom: 0 }}>
                  Call Today to Schedule an Appointment
                </h3>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Take Home
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p style={{ marginBottom: "2em" }}>
                  Take home teeth whitening: We recommend Opal Go which contains
                  pre-filled whitening trays filled with a professional strength
                  teeth whitening gel with unrivaled convenience. The trays
                  easily conform to any smile and are ready to use out of the
                  box. It is fast, simple and effective. With 15-20 minutes of
                  15% hydrogen peroxide concentration you can expect a brilliant
                  smile in 5-10 days.
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
