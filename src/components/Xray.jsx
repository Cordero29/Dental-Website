import React from "react";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../images/Image-1.jpeg";
import image2 from "../images/Image-2.jpeg";
import image3 from "../images/Image-3.jpeg";
import image4 from "../images/Image-4.jpg";
import image5 from "../images/Image-5.jpeg";
import image6 from "../images/Image-6-Homepage-Hero-Image.jpg";
import image7 from "../images/Image-7.jpg";

export default function Xray() {
  return (
    <div id="xray-page">
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
      <div id="xray-content">
        <h2>X-rays</h2>
        <p>
          Digital radiography is the latest technology used to take dental
          X-rays. This technique uses an electronic sensor (instead of X-ray
          film) that captures and stores the digital image on a computer. This
          image can be instantly viewed and enlarged helping the dentist and
          dental hygienist easily detect problems. Digital X-rays reduce
          radiation 80-90% compared to the already low exposure of traditional
          dental X-rays. Dental X-rays are essential and preventative diagnostic
          tools that provide valuable information not visible during a regular
          dental exam. Dentists and dental hygienists use this information to
          safely and accurately detect hidden dental abnormalities and complete
          an accurate treatment plan. Without X-rays, problem areas may go
          undetected.
        </p>
        <h3 style={{ marginBottom: 45 }}>Dental X-rays may reveal:</h3>
        <ul>
          <li>Abscesses or cysts</li>
          <li>Bone loss</li>
          <li>Cancerous and non-cancerous tumors</li>
          <li>Decay between the teeth</li>
          <li>Developmental abnormalities</li>
          <li>Poor tooth and root positions</li>
          <li>Problems inside a tooth or below the gum line</li>
        </ul>
        <p className='after-list-italic' style={{ marginBottom: '3em' }}>
          Detecting and treating dental problems at an early stage may save you
          time, money, unnecessary discomfort, and your teeth!
        </p>
        <h3 style={{ marginBottom: '1em' }}>Are dental X-rays safe?</h3>
        <p>
          We are all exposed to natural radiation in our environment. Digital
          X-rays produce a significantly lower level of radiation compared to
          traditional dental X-rays. Not only are digital X-rays better for the
          health and safety of the patient, they are faster and more comfortable
          to take, which reduces your time in the dental office. Also, since the
          digital image is captured electronically, there is no need to develop
          the X-rays, thus eliminating the disposal of harmful waste and
          chemicals into the environment.
        </p>
        <p style={{ marginBottom: '4em' }}>
          Even though digital X-rays produce a low level of radiation and are
          considered very safe, dentists still take necessary precautions to
          limit the patient’s exposure to radiation. These precautions include
          only taking those X-rays that are necessary and using lead apron
          shields with a thyroid collar to protect your body.
        </p> 
        <h3 style={{ marginBottom: '1em' }} >How often should dental X-rays be taken?</h3>
        <p style={{ marginBottom: '10em' }}>
          The need for dental X-rays depends on each patient’s dental health
          needs. Your dentist and dental hygienist will recommend X-rays based
          upon the review of your medical and dental history, a dental exam,
          signs and symptoms, your age, and risk of disease. A full mouth series
          of dental X-rays is recommended for new patients and are typially
          retaken every two years depending upon on patients’ needs. Bite-wing
          X-rays (X-rays of top and bottom teeth biting together) are
          recommended once a year to detect new dental problems.
        </p>
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
