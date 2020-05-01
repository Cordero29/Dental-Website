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

export default function HomeCare() {
  return (
    <div id="home-care-page">
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
      <div id="home-care-content">
        <h2>Home Care</h2>

        <p>
          A beautiful and healthy smile that lasts a lifetime is our ultimate
          goal when treating patients. Your personal home care plays an
          important role in achieving that goal. Your personal home care starts
          by eating balanced meals, limiting the number of sugary snacks you
          eat, and correctly using the various dental aids that help reduce
          disease causing plaque and bacteria.
        </p>

        <p>
          <strong>Tooth brushing</strong> – Brush your teeth at least twice a
          day (especially before going to bed at night) with an ADA approved
          soft bristle brush and toothpaste.
        </p>

        <p>
          Place the brush at a 45 degree angle to the gums and gently brush
          using a small, circular motion, ensuring that you always feel the
          bristles on the gums. <br /> Brush the outer, inner, and biting
          surfaces of each tooth.
          <br /> Use the tip of the brush to clean the inside of the front
          teeth.
          <br /> Brush your tongue to remove bacteria and freshen your breath.
        </p>

        <p>
          Electric toothbrushes are also recommended. They are easy to use and
          can remove plaque efficiently. Simply place the bristles of the
          electric brush on your gums and teeth and allow the brush to do its
          job, several teeth at a time.
        </p>

        <p>
          <strong>Flossing</strong> – Daily flossing is the best way to clean
          between the teeth and under the gumline. Flossing not only helps clean
          these spaces, it disrupts plaque colonies from building up, preventing
          damage to the gums, teeth, and bone. Every night you should properly
          floss your teeth prior to brushing.
        </p>

        <p>
          Take 12-16 inches (30-40cm) of dental floss and wrap it around your
          middle fingers, leaving about 2 inches (5cm) of floss between the
          hands.
          <br /> Using your thumbs and forefingers to guide the floss, gently
          insert the floss between teeth using a sawing motion.
          <br /> Curve the floss into a “C” shape around each tooth and under
          the gumline. Gently move the floss up and down, cleaning the side of
          each tooth.
        </p>

        <p>
          Floss holders are recommended if you have difficulty using
          conventional floss.
        </p>

        <p>
          <strong>Rinsing</strong> – It is important to rinse your mouth with
          water after brushing and also after meals if you are unable to brush.
          If you are using an over-the-counter product for rinsing, it’s a good
          idea to consult with your dentist or dental hygienist on its
          appropriateness for you.
        </p>

        <p>
          Use other dental aids as recommended by your dentist or dental
          hygienist: interdental brushes, rubber tip stimulators, tongue
          cleaners, irrigation devices, fluoride, medicated rinses, can all
          contribute to good dental home care.
        </p>
        <div id="home-care-bar"></div>
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
