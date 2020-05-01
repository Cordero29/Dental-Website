import React from "react";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../images/Image-1.jpeg";
import image2 from "../images/Image-2.jpeg";
import image3 from "../images/Image-3.jpeg";
import image4 from "../images/Image-4.jpg";
import image5 from "../images/Image-5.jpeg";
import image6 from "../images/Image-6-Homepage-Hero-Image.jpg";
import image7 from "../images/Image-7.jpg";

export default function Restorations() {
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
      <div id="restorations-content">
        <h2>Restorations</h2>
        <p style={{ marginBottom: '3em' }} >
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
        <div class="secondary-bar"></div>
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
