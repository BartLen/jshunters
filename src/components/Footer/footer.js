import React from "react";
import './footer.scss';
import file from "../../images/logo_2.png";

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <img src={file} className='logo'/>
                    <div className='info'>
                        <div className='contact'>
                            <span>Skontaktuj się z nami:</span>
                            <span>Bartłomiej Skura</span>
                            <span>Tel: +48 600 236 370</span>
                            <span> E-mail: bskura@octopus-partners.com</span>
                        </div>
                        <div className='rodo'>
                            <a href="#">Polityka prywatności</a>
                            <a href="#">RODO</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}