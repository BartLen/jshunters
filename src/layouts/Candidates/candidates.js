import React from 'react';
import './candidates.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Opening_Candid from "../../components/Opening_Candid/opening_candid";
import ItWorks_Candidates from "../../components/ItWorks_Candidates/itworks_candidates";

export default function Candidates() {
    return (
        <Router>
            <Opening_Candid />
            <ItWorks_Candidates />
        </Router>
    );
}