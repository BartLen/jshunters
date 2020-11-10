import React from "react";
import '../ItWorks_Candidates/itworks_candidates.scss';
import file from "../../images/itworks.png";
import file1 from "../../images/arrow.png";

export default function ItWorks_Candidates() {
    return (
        <>
            <div className='itworks'>
                <div className='container'>
                    <div className='itworks__left'>
                        <h1 className='itworks__left__title'>Jak wygląda proces?</h1>
                        <div className='itworks__left__text'><span>Kontakt</span>Wyślij swoją aplikację</div>
                        <img src={file1} className='itworks__left__logo'/>
                        <div className='itworks__left__text'><span>Wstępna rozmowa telefoniczna</span>Max 20 min. - Twoje hobby, osiągnięcia etc.</div>
                        <img src={file1} className='itworks__left__logo'/>
                        <div className='itworks__left__text'><span>Weryfikacja techniczna</span>Test lub zadanie do wykonania</div>
                        <img src={file1} className='itworks__left__logo'/>
                        <div className='itworks__left__text'><span>Weryfikacja u klienta</span></div>
                        <img src={file1} className='itworks__left__logo'/>
                        <div className='itworks__left__text1'><span>Podpisanie kontraktu/umowy</span></div>
                    </div>
                    <div className='itworks__right'>
                        <img src={file} className='itworks__right__logo'/>
                    </div>
                </div>
            </div>
        </>
    )
}