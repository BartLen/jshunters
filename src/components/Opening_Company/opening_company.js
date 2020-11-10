import React, {useState} from "react";
import '../Opening_Company/opening_company.scss';
import {emailRegexp} from './../../helpers/regexp';

import firebase from 'firebase';

export default function Opening_Company(){
    const [company, setCompany] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [text, setText] = useState("");
    const [success, setSuccess] = useState("");
    const [errorCompany, setErrorCompany] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorMail, setErrorMail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (company.length <= 2) {
            setErrorCompany('Podaj Pełną Nazwę Firmy');
            isValid = false;
        }

        if (name.length <= 2) {
            setErrorName('Podaj Pełne Imię i Nazwisko');
            isValid = false;
        }

        if (!emailRegexp.test(mail)) {
            setErrorMail("Zły format adresu email");
            isValid = false;
        }
        if (isValid) {
            firebase.firestore().collection('companies').doc().set({
                company,
                offers: [],
                agreement: {
                    name,
                    mail,
                    text
                }
            }).then(() => {
                setSuccess("Wiadomość wysłana");
                setCompany('')
                setName('')
                setMail('')
                setText('')
                /*console.log('Added to firebase');*/
            }).catch(err => {
                console.log(err);
            })
        }}


    return (
        <>
            <div className="list">
                <div className='container'>
                    <div className='list__text'>
                        <div className='list__text__1'>Jak możemy Ci pomóc na konkurencyjnym rynku pracy?</div>
                        <div className='list__text__2'>Współpracujemy wyłącznie z programistami języka Javascript - ponad 3000 kandydatów w bazie danych</div>
                        <div className='list__text__2'>Szeroka siatka znajomych w branży IT pomagająca docierać szybko do nowych osób</div>
                        <div className='list__text__2'>Testujemy wiedzę merytoryczną i techniczną kandydatów - nasi Klienci oszczędzają do 80% czasu w ramach procesów rekrutacyjnych</div>
                        <div className='list__text__2'>Realizujemy zlecenia rekrutacyjne średnio w 3 tygodnie od daty przekazania tematu</div>
                    </div>
                    <div className='list__right'>
                        <div className='list__title'>
                            Wypełnij formularz
                        </div>
                        <form className='list__form' onSubmit={handleSubmit}>
                            {errorCompany && <h1 className='list__form__error'>{errorCompany}</h1>}
                            <input className='list__form__input' type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder='Nazwa Firmy'/>
                            {errorName && <h1 className='list__form__error'>{errorName}</h1>}
                            <input className='list__form__input' type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Imię i Nazwisko'/>
                            {errorMail && <h1 className='list__form__error'>{errorMail}</h1>}
                            <input className='list__form__input' type="text" value={mail} onChange={e => setMail(e.target.value)} placeholder='E-mail'/>
                            <textarea className='list__form__input' type="text" value={text} onChange={e =>setText(e.target.value)} placeholder='Wpisz wiadomość' rows='5'/>
                            {success && <h2 className='list__form__success'>{success}</h2>}
                            <button className='list__form__btn' type="submit" >Wyślij</button>
                        </form>
                    </div>
                </div>
            </div>
            </>
    )
}

