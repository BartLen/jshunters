import React from "react";
import './aboutus.scss';
import file1 from '../../images/array.jpg';
import file2 from '../../images/shoot.jpg';



export default function AboutUs() {
    return (
    <>
        <div className='aboutus'>
            <div className='aboutus__text'>
                Wreszcie możesz liczyć na kandydatów zweryfikowanych technicznie
            </div>
            <div className='container'>
                <div className='aboutus__step1'>
                    <img src={file1} className='logo1'/>
                    <div className='text1'>Dobierz test do poziomu stanowiska</div>
                </div>
                <div className='aboutus__step1'>
                    <img src={file2} className='logo2'/>
                    <div className='text1'>Oszczędź do 80% czasu dzięki profesjonalnej weryfikacji technicznej</div>
                </div>
                <div className='aboutus__step1'>
                    <img src={file1} className='logo1'/>
                    <div className='text1'>Model współpracy dopasowany w 100% do Twoich potrzeb</div>
                </div>
                <div className='aboutus__step1'>
                    <img src={file2} className='logo2'/>
                    <div className='text1'>Zatrudniaj średnio w trzy tygodnie od startu!</div>
                </div>
            </div>
        </div>
        </>
    )
}