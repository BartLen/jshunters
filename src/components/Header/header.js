import React from "react";
import './header.scss';
import {Link} from 'react-router-dom';

import file from '../../images/java-script-logo-poziom.png';
import file_1 from '../../images/header.jpg'

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__container'>
                    <div className='header__logo'>
                        <img src={file} className='logo'/>
                    </div>
                    <nav>
                        <input type="checkbox" className="menu__btn" id="menu__btn"/>
                            <label for="menu__btn" className="menu__toggle">
                                <span className='invisible'></span>
                                <span className='invisible'></span>
                                <span className='invisible'></span>
                            </label>
                        <ul className='header__nav'>
                            <li className='nav__element'>
                             <a href='#' className='nav__link'>O nas</a>
                            </li>
                             <li className='nav__element'>
                                <Link to="./Companies"><span className='nav__link'>Dla Firm</span></Link>
                            </li>
                            <li className='nav__element'>
                                <Link to="./Candidates"><span className='nav__link'>Dla Kandydatów</span></Link>
                            </li>
                            <li className='nav__element'>
                                <Link to='./Jobs'><span className='nav__link'>Oferty pracy</span></Link>
                            </li>
                            <li className='nav__element'>
                                <Link to='./Contact'><span className='nav__link'>Kontakt</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}