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

export default function OurPractice() {
  return (
    <div id="our-practice-page">
      <div className="homepage-image-overlay">
        <h1>Fred Kastenbaum, D.M.D. - Prosthodontist</h1>
      </div>
      <Carousel className="carousel" interval="3000">
        <Carousel.Item>
          <img
            src={image1}
            width="100%"
            height="700px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image2}
            width="100%"
            height="700px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image3}
            width="100%"
            height="700px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image4}
            width="100%"
            height="700px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image5}
            width="100%"
            height="700px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image6}
            width="100%"
            height="700px"
            alt="view of the dental office"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={image7}
            width="100%"
            height="700px"
            alt="view of the dental office"
          />
        </Carousel.Item>
      </Carousel>
      <div id="our-practice-content">
        <h3>Our Practice</h3>
        <div className="dr-fred">
          <div className="dr-fred-portrait"></div>
          <div className="dr-fred-bio">
            <h2>Dr. Fred Kastenbaum</h2>
            <p className="dr-fred-p1">
              Dr. Kastenbaum is a New York based prosthodontist who is devoted
              to restoring and enhancing the natural beauty of your smile. Using
              conservative, state-of-the-art dental procedures, his practice
              offers aesthetic (“cosmetic”), implant, prosthetic, restorative,
              preventive and maintenance services to meet your dental needs in a
              modern, warm and comfortable setting. The objective is to provide
              patients with the highest level of healthcare, creating ideal
              function and generating smiles that will last a lifetime.
            </p>
            <p className="dr-fred-p2">
              Since 1982, Dr. Kastenbaum has been among the earliest clinicians
              to offer implant dentistry to patients and continues to be on the
              cutting edge of technology in the field. As an early researcher
              with Professor Branemark (father of modern implants), Dr.
              Kastenbaum designed the EstheticCone abutment which revolutionized
              implant dentistry and is used by dentists throughout the world.
            </p>
          </div>
        </div>
        <div className="paula">
          <div className="paula-portrait"></div>
          <div className="paula-bio">
            <h2>Paula Brandao</h2>
            <p>
              Paula is a certified dental hygienist and has been a welcome
              addition to the practice for the past 9 years. She believes in the
              importance of customized treatments for patient well-being with
              the highest standards. When she is not practicing, Paula loves to
              run, workout and spend time with family.
            </p>
          </div>
        </div>
        <div className="felix">
          <div className="felix-portrait"></div>
          <div className="felix-bio">
            <h2>Felix Vasquez</h2>
            <p>
              Felix is a certified dental assistant and has been a valuable
              member of the team for over 10 years anticipating every need of
              our patients. He emphasizes the comfort of the patients to ensure
              they are at ease and relaxed throughout any procedure. When he is
              not in the office, Felix appreciates spending time with his wife
              and family.
            </p>
          </div>
        </div>
        <div className="lauren">
          <div className="lauren-portrait"></div>
          <div className="lauren-bio">
            <h2>Lauren Stramiello</h2>
            <p>
              Lauren is our receptionist who always greets patients with a warm
              and welcoming smile. She is tenacious in helping the needs of the
              patients, always ensuring their appointments and requests. Outside
              of work, she enjoys teaching and playing the guitar, hiking and
              spending time with her friends.
            </p>
          </div>
        </div>
        <div className="our-practice-bar"></div>
      </div>
      <div className="dental-treatment-content">
        <h3>Dental Treatments</h3>
        <div className="dental-treatment-sections">
          <div className="dt-diagnosis">
            <div className="dt-diagnosis-img"></div>
            <h4>Diagnosis</h4>
            <p>
              Our dental exams and cleanings are recommended three times a year.
              X-rays and oral cancer screenings are performed during
              appointments.
            </p>
          </div>
          <div className="dt-restorative-procedures">
            <div className="dt-restorative-procedures-img"></div>
            <h4>Restorative Procedures</h4>
            <p>
              We offer a variety of services including crowns, bridges, dental
              implants, teeth whitening, partial & full dentures, and sealants.
            </p>
          </div>
          <div className="dt-hygiene">
            <div className="dt-hygiene-img"></div>
            <h4>Hygiene</h4>
            <p>
              The best way to keep your smile looking happy and healthy is to
              brush twice a day and floss each evening.
            </p>
          </div>
        </div>
        <a id="our-practice-cta" href="tel:+1-212-319-8787">
          Schedule Appointment
        </a>
        <div className="second our-practice-bar"></div>
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
