import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import Companies from "./layouts/Companies/companies";
import Candidates from "./layouts/Candidates/candidates";
import Jobs from "./layouts/Jobs/jobs";
import Login from "./layouts/Login/login";
import Details from "./layouts/Details/details";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path="/companies">
                        <Companies/>
                    </Route>
                    <Route path="/candidates">
                        <Candidates/>
                    </Route>
                    <Route path="/jobs">
                        <Jobs/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/details">
                        <Details/>
                    </Route>
                    <Route path="*">
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
