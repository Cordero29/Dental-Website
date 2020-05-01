import React from "react";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../images/Image-1.jpeg";
import image2 from "../images/Image-2.jpeg";
import image3 from "../images/Image-3.jpeg";
import image4 from "../images/Image-4.jpg";
import image5 from "../images/Image-5.jpeg";
import image6 from "../images/Image-6-Homepage-Hero-Image.jpg";
import image7 from "../images/Image-7.jpg";

export default function CosmeticDentistry() {
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
      <div id="cosmetic-dentistry-content">
        <h2>Cosmetic Dentistry</h2>
        <p style={{ marginBottom: '3em' }}>
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
        <h3 style={{ fontStyle: 'italic', marginBottom: '6em' }}>Remember, your smile speaks before you even say a word!</h3>
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
