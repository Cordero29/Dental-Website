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

export default function Sealants() {
  return (
    <div id="sealants-page">
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
      <div id="sealants-content">
        <h2>Sealants</h2>
        <p>
          A sealant is a thin, plastic coating applied to the chewing surface of
          molars, premolars and any deep grooves (called pits and fissures) of
          teeth. More than 75% of dental decay begins in these deep grooves.
          Teeth with these conditions are hard to clean and are very susceptible
          to decay. A sealant protects the tooth by sealing deep grooves and
          creating a smooth, easy to clean surface.
        </p>
        <p>
          Sealants can protect teeth from decay for many years but need to be
          checked for wear and chipping at regular dental visits.
        </p>
        <h3>Reasons for sealants:</h3>
        <p>
          Children and teenagers – As soon as the six-year molars (the first
          permanent back teeth) appear or any time throughout the cavity prone
          years of 6-16
        </p>
        <p>
          Adults – Tooth surfaces without decay that have deep grooves or
          depressions
        </p>
        <p style={{ marginBottom: "2em" }}>
          Baby teeth – Occasionally done if teeth have deep grooves or
          depressions and a child is cavity prone
        </p>
        <h3>What do sealants involve?</h3>
        <p>
          Sealants are easily applied by your dentist or dental hygienist and
          the process takes only a couple of minutes per tooth.
        </p>
        <p>
          To be sealed teeth are thoroughly cleaned and then surrounded with
          cotton to keep the area dry. A special solution is applied to the
          enamel surface to help the sealant bond to the teeth. The teeth are
          then rinsed and dried. Sealant material is carefully painted onto the
          enamel surface to cover the deep grooves or depressions and activiated
          with a special curing light.
        </p>
        <p style={{ marginBottom: "10em" }}>
          Proper home care, a balanced diet, and regular dental visits will aid
          in the life of your new sealants.
        </p>
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
