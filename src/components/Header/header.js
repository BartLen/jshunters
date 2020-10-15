import React from "react";
import './header.scss';
import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <div className='header_container container'>
            <div className='header_logo'>
                <img src='' className='logo'/>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}