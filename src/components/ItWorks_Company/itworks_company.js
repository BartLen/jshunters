import React from "react";
import '../ItWorks_Company/itworks_company.scss';
import file from "../../images/itworks.png";
import file1 from "../../images/arrow.png";

export default function ItWorks_Company() {
    return (
        <>
            <div className='itworks'>
                <div className='container'>
                    <div className='itworks__left'>
                        <h1 className='itworks__left__title'>Jak wygląda proces?</h1>
                        <div className='itworks__left__text'><span>Kontakt</span>Spotkanie FtF, wideokonferencja, rozmowa telefoniczna</div>
                        <img src={file1} className='itworks__left__logo'/>
                        <div className='itworks__left__text'><span>Zasady współpracy</span>Zaufanie i dialog - fundament dobrej współpracy</div>
                        <img src={file1} className='itworks__left__logo'/>
                        <div className='itworks__left__text'><span>Direct search</span></div>
                        <img src={file1} className='itworks__left__logo'/>
                        <div className='itworks__left__text'><span>Prezentacja kandydatów</span></div>
                        <img src={file1} className='itworks__left__logo'/>
                        <div className='itworks__left__text'><span>Przedstawienie oferty</span></div>
                        <img src={file1} className='itworks__left__logo'/>
                        <div className='itworks__left__text'><span>The End</span></div>
                    </div>
                    <div className='itworks__right'>
                        <img src={file} className='itworks__right__logo'/>
                    </div>
                </div>
            </div>
        </>
    )
}