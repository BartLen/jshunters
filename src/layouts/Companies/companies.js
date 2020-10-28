import React from 'react';
import './companies.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Opening_Company from "../../components/Opening_Company/opening_company";
import ItWorks_Company from "../../components/ItWorks_Company/itworks_company";



export default function Companies() {
    return (
        <Router>
            <Opening_Company />
            <ItWorks_Company />
        </Router>
    );
}