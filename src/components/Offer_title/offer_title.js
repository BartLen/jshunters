import React, {useState} from "react";
import './/offer_title.scss';

export default function Offer_title() {
    return(
        <>
            <div className='title'>
                <div className='container'>
                    <div className='title__info'>
                        <div className='title__info__name'>Javascript Developer</div>
                        <div className='title__info__town'>Katowice</div>
                    </div>
                    <a href='#apply' className='title__btn'>Aplikuj teraz</a>
                </div>
            </div>
        </>
    )
}