import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header/header";
import Opening from "./components/Opening/opening";
import AboutUs from "./components/AboutUs/aboutus";
import Footer from "./components/Footer/footer";
import Companies from "./layouts/Companies/companies";
import Candidates from "./layouts/Candidates/candidates";
import Jobs from "./layouts/Jobs/jobs";
import Contact from "./layouts/Contact/contact";




function App() {
  return (
        <div className="App">
            <Router>
              <Header />
              <Opening />
              <AboutUs />
              <Footer />
              <Switch>
                <Route path="./Companies">
                  <Companies />
                </Route>
                <Route path="./Candidates">
                  <Candidates />
                </Route>
                <Route path="./Jobs">
                  <Jobs />
                </Route>
                <Route path="./Contact">
                  <Contact />
                </Route>
              </Switch>
            </Router>
        </div>
  );
}

export default App;
