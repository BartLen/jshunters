import React from "react";
import './header.scss';
import {Link} from 'react-router-dom';

import file from '../../images/logo_2.png';
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
                             <Link to='/home' className='nav__link'>Home</Link>
                            </li>
                             <li className='nav__element'>
                                <Link to="/companies"><span className='nav__link'>Dla Firm</span></Link>
                            </li>
                            <li className='nav__element'>
                                <Link to="/candidates"><span className='nav__link'>Dla Kandydatów</span></Link>
                            </li>
                            <li className='nav__element'>
                                <Link to='/jobs'><span className='nav__link'>Oferty pracy</span></Link>
                            </li>
                            <li className='nav__element'>
                                <Link to='/contact'><span className='nav__link'>Kontakt</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}