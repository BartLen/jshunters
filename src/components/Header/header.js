import React from "react";
import './header.scss';
import {Link} from 'react-router-dom';

import file from '../../images/java-script-logo.png';

export default function Header() {
    return (
        <div className='header_container container'>
            <div className='header_logo'>
                <img src={file} className='logo'/>
            </div>
            <ul>
                <li>
                    <a href='#' className='aboutUs'>O nas</a>
                </li>
                <li>
                    <Link to="./Companies">Dla Firm</Link>
                </li>
                <li>
                    <Link to="./Candidates">Dla Kandydatów</Link>
                </li>
                <li>
                    <Link to='./Jobs'>Oferty pracy</Link>
                </li>
                <li>
                    <Link to='./Contact'>Kontakt</Link>
                </li>
            </ul>
        </div>
    );
}