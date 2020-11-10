import React from "react";
import './home.scss';
import file1 from '../../images/test.png';
import file2 from '../../images/stats.png';
import file3 from '../../images/monitor.png';
import file4 from '../../images/array.jpg';
import file5 from '../../images/graphic.jpg'
import Opening from "../Opening/opening";

export default function Home() {
    return (
    <>
        <Opening/>
        <div className='aboutus_img'>
            <img src={file5} className='logo0'/>
        </div>
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
                    <img src={file2} className='logo1'/>
                    <div className='text1'>Oszczędź do 80% czasu dzięki profesjonalnej weryfikacji technicznej</div>
                </div>
                <div className='aboutus__step1'>
                    <img src={file3} className='logo1'/>
                    <div className='text1'>Model współpracy dopasowany w 100% do Twoich potrzeb</div>
                </div>
                <div className='aboutus__step1'>
                    <img src={file4} className='logo1'/>
                    <div className='text1'>Zatrudniaj średnio w trzy tygodnie od startu!</div>
                </div>
            </div>
        </div>
        </>
    )
}