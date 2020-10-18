import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header/header";
import Opening from "./components/Opening/opening";
import Home from "./components/Home/home";
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
              <Switch>
                <Route exact path='/home'>
                  <Opening />
                  <Home />
                </Route>
                <Route path="/companies">
                  <Companies />
                  </Route>
                <Route path="/candidates">
                  <Candidates />
                </Route>
                <Route path="/jobs">
                  <Jobs />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
              <Footer />
            </Router>
        </div>
  );
}

export default App;
