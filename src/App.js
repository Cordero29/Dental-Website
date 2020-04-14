import React, { Component } from "react";
import "./styles/App.css";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DentalExamsCleaning from "./components/DentalExamsCleaning";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route
          path="/dentalexamsandcleaning"
          render={() => <DentalExamsCleaning />}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
