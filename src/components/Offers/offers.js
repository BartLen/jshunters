import React from "react";
import '../Offers/offers.scss';
import {Link} from 'react-router-dom';


export default function Offers() {
    return(
            <div className='offers'>
                <div className='container'>
                    <div className='offers__example'>
                        <div className='offers__example__left'>
                            <span className='offers__example__title'>Senior Javascript Developer</span>
                            <span className='offers__example__town'>Katowice</span>
                            <span className='offers__example__time'>Remote</span>
                        </div>
                        <div className='offers_example_right'>
                            <Link to='/details'>Szczegóły</Link>
                        </div>
                    </div>
                    <div className='offers__example'>
                        <div className='offers__example__left'>
                            <span className='offers__example__title'>Senior Javascript Developer</span>
                            <span className='offers__example__town'>Katowice</span>
                            <span className='offers__example__time'>Remote</span>
                        </div>
                        <div className='offers_example_right'>
                            <Link to='/details'><button className='offers__example__btn'>Szczegóły</button></Link>
                        </div>
                    </div>
                    <div className='offers__example'>
                        <div className='offers__example__left'>
                            <span className='offers__example__title'>Senior Javascript Developer</span>
                            <span className='offers__example__town'>Katowice</span>
                            <span className='offers__example__time'>Remote</span>
                        </div>
                        <div className='offers_example_right'>
                            <Link to='/details'><button className='offers__example__btn'>Szczegóły</button></Link>
                        </div>
                    </div>
                    <div className='offers__example'>
                        <div className='offers__example__left'>
                            <span className='offers__example__title'>Senior Javascript Developer</span>
                            <span className='offers__example__town'>Katowice</span>
                            <span className='offers__example__time'>Remote</span>
                        </div>
                        <div className='offers_example_right'>
                            <Link to='/details'><button className='offers__example__btn'>Szczegóły</button></Link>
                        </div>
                    </div>
                    <div className='offers__example'>
                        <div className='offers__example__left'>
                            <span className='offers__example__title'>Senior Javascript Developer</span>
                            <span className='offers__example__town'>Katowice</span>
                            <span className='offers__example__time'>Remote</span>
                        </div>
                        <div className='offers_example_right'>
                            <Link to='/details'><button className='offers__example__btn'>Szczegóły</button></Link>
                        </div>
                    </div>
                    <div className='offers__example'>
                        <div className='offers__example__left'>
                            <span className='offers__example__title'>Senior Javascript Developer</span>
                            <span className='offers__example__town'>Katowice</span>
                            <span className='offers__example__time'>Remote</span>
                        </div>
                        <div className='offers_example_right'>
                            <Link to='/details'><button className='offers__example__btn'>Szczegóły</button></Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}