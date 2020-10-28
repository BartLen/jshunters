import React from 'react';
import './login.scss';
import {BrowserRouter as Router} from "react-router-dom";
import Registration from "../../components/Registration/registration";


export default function Login() {
    return (
        <Router>
            <Registration />
        </Router>
    );
}