import React, { Component } from "react";
import "./styles/App.css";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import OurPractice from "./components/OurPractice";
import Footer from "./components/Footer";

import DentalExamsCleaning from "./components/DentalExamsCleaning";
import Xray from "./components/Xray";
import OralCancerExam from "./components/OralCancerExam";

import CleaningPrevention from "./components/CleaningPrevention";
import HomeCare from "./components/HomeCare";

import Restorations from "./components/Restorations";
import DentalImpants from "./components/DentalImplants";
import CosmeticDentistry from "./components/CosmeticDentistry";
import TeethWhitening from "./components/TeethWhitening";
import Sealants from "./components/Sealants";

import NewPatient from "./components/NewPatient";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Route exact path="/" render={() => <OurPractice />} />

        <Route
          path="/dentalexamsandcleaning"
          render={() => <DentalExamsCleaning />}
        />
        <Route path="/xray" render={() => <Xray />} />
        <Route path="/oralcancerexam" render={() => <OralCancerExam />} />

        <Route
          path="/cleaningandprevention"
          render={() => <CleaningPrevention />}
        />
        <Route path="/homecare" render={() => <HomeCare />} />

        <Route path="/restorations" render={() => <Restorations />} />
        <Route path="/dentalimplants" render={() => <DentalImpants />} />
        <Route path="/cosmeticdentistry" render={() => <CosmeticDentistry />} />
        <Route path="/teethwhitening" render={() => <TeethWhitening />} />
        <Route path="/sealants" render={() => <Sealants />} />

        <Route path="/newpatient" render={() => <NewPatient />} />
        <Footer />
      </div>
    );
  }
}

export default App;
