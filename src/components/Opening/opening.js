import React from "react";
import './opening.scss';
import file from '../../images/frontend_poziom.png';



export default function Opening() {
    return (
        <>
            <div className='opening'>
                <div className='container'>
                <div className='opening1'>
                    <div className='opening1__title1'>Jesteśmy pierwszą agencją rekrutacyjną IT</div>
                    <div className='opening1__title2'><span className='opening__title2__fat1'>100%</span> skupioną na rekrutacjach programistów</div>
                    <div className='opening1__title3'><span className='opening__title2__fat2'>Javascript</span></div>
                </div>
                    <div className='opening2'>
                        <div className='opening2__title1'>Rekrutujemy wyłącznie osoby programujące w:</div>
                        <div className='header__logo'>
                            <img src={file} className='logo'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}