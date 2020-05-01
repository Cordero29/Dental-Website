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

export default function OralCancerExam() {
  return (
    <div id="oral-cancer-exam-page">
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
      <div id="oral-cancer-exam-content">
        <h2>Oral Cancer Exam</h2>
        <p>
          According to research conducted by the American Cancer Society, more
          than 30,000 cases of oral cancer are diagnosed each year. More than
          7,000 of these cases result in death. Most oral cancers can easily be
          diagnosed during an annual oral cancer exam and effectively treated
          when caught in the disease’s earliest stages.
        </p>
        <p>
          Oral cancer is a pathologic process that begins asymptomatically
          during which the usual cancer signs may not be readily noticeable.
          This makes the oral cancer examinations performed by the dentist and
          hyiegnist critically important. Oral cancers can be of varied
          histologic types such as teratoma, adenocarcinoma and melanoma. The
          most common type of oral cancer is the malignant squamous cell
          carcinoma. This oral cancer type usually originates in lip and mouth
          tissues.
        </p>

        <p>
          There are many different places in the oral cavity and maxillofacial
          region in which oral cancers commonly occur including:
        </p>
        <ul>
          <li>Lips</li>
          <li>Mouth</li>
          <li>Tongue</li>
          <li>Salivary Glands</li>
          <li>Oropharyngeal Region (throat)</li>
          <li>Gums</li>
          <li>Face</li>
        </ul>
        <h3>Reasons for oral cancer examinations</h3>
        <p>
          It is important to note that around 75% of oral cancers are linked
          with modifiable behaviors such as smoking, tobacco use and excessive
          alcohol consumption.
        </p>
        <p>
          When oral cancer is diagnosed in its earliest stages, treatment is
          generally very effective. Any noticeable abnormalities in the tongue,
          gums, mouth or surrounding area should be evaluated by a health
          professional as quickly as possible. During the oral cancer exam, the
          dentist and dental hygienist will be scrutinizing the maxillofacial
          and oral regions carefully for signs of pathologic changes.
        </p>
        <p>
          The following signs will be investigated during a routine oral cancer
          exam:
        </p>
        <p>
          <strong>Red patches and sores </strong>- Red patches on the floor of
          the mouth, the front and sides of the tongue, white or pink patches
          which fail to heal and slow healing sores that bleed easily can be
          indicative of pathologic (cancerous) changes.
        </p>
        <p>
          <strong>Leukoplakia </strong>- This is a hardened white or gray,
          slightly raised lesion that can appear anywhere inside the mouth.
          Leukoplakia can be cancerous or may become cancerous if treatment is
          not sought.
        </p>
        <p style={{ marginBottom: "5em" }}>
          <strong>Lumps </strong>- Soreness, lumps or the general thickening of
          tissue anywhere in the throat or mouth can signal pathological
          problems.
        </p>
        <h3>Oral cancer exams, diagnosis and treatment</h3>
        <p>
          The oral cancer examination is a completely painless process. During
          the visual part of the examination, the dentist will look for
          abnormalities and feel the face, glands and neck for unusual bumps.
          Lasers which can highlight pathologic changes are also an effective
          tool for oral cancer checks. The laser can visualize below the surface
          for abnormal signs and lesions which would be invisible to the naked
          eye.
        </p>
        <p>
          If abnormalities, lesions, leukoplakia or lumps are apparent, the
          dentist will implement a treatment plan. In the event that the initial
          treatment plan is ineffective, a biopsy of the area will be performed.
          The biopsy is a clinical procedure which will identify the precise
          stage and grade of the oral lesion.
        </p>
        <p style={{ marginBottom: "4em" }}>
          Oral cancer is deemed to be present when the basement membrane of the
          epithelium has been broken. Malignant types of cancer can readily
          spread to other places in the oral and maxillofacial regions, posing
          additional secondary threats. Treatment methods vary according to the
          precise diagnosis but may include excision, radiation therapy and
          chemotherapy.
        </p>
        <h3 style={{ marginBottom: "10em", fontStyle: "italic" }}>
          If you have any questions or concerns about oral cancer, please
          consult with your dentist or dental hygienist.
        </h3>
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
