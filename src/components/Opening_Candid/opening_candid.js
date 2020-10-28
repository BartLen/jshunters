import React, {useState} from "react";
import '../Opening_Candid/opening_candid.scss';
import {emailRegexp} from "../../helpers/regexp";
import firebase from "firebase";


export default function Opening_Candid() {
    const [company, setCompany] = useState("");
    const [name, setName] = useState("");
    const [file, setFile] = useState();
    const [mail, setMail] = useState("");
    const [text, setText] = useState("");
    const [errorCompany, setErrorCompany] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [errorFile, setErrorFile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (company.length <= 3) {
            setErrorCompany('Podaj Pełną Nazwę Firmy');
            isValid = false;
        }

        if (name.length <= 3) {
            setErrorName('Podaj Pełne Imię i Nazwisko');
            isValid = false;
        }

        if (!emailRegexp.test(mail)) {
            setErrorMail("Zły format adresu email");
            isValid = false;
        }

        if(!file){
            setErrorFile("Brak pliku");
            isValid = false;
        }

        if(isValid){
            firebase.firestore().collection('companies').doc(company).set({
                agreement: {
                    name,
                    mail,
                    text
                }
            }).then(() => {
                console.log('Added to firebase');
            }).catch(err => {
                console.log(err);
            })
        }


    };
    const fileInput = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if(file){
            setFile(file);
        }else {
            setFile();
        }

        alert(`Wybrany plik - ${file.name}`);
    }


    return (
        <>
            <div className="list">
                <div className='container'>
                    <div className='list__text'>
                        <div className='list__text__1'>Dlaczego warto z nami współpracować?</div>
                        <div className='list__text__2'>Posiadamy unikalne oferty w 100% dedykowane wyłącznie
                            programistom języka Javascript
                        </div>
                        <div className='list__text__2'>Współpracujemy ze zweryfikowanymi przez nas Klientami, dzięki
                            czemu unikasz nawiązania współpracy z tzw "przypadkową firmą"
                        </div>
                        <div className='list__text__2'>Testujemy Twoją wiedzę techniczną- teoretyczną i praktyczną-
                            dostaniesz jasną informację nt. swoich mocnych stron i tych nad którymi warto popracować
                        </div>
                        <div className='list__text__2'>Masz pewność, że nie tracisz czasu - rekomendujemy Cię tylko na
                            interesujące Cię oferty, które są zgodne z Twoim doświadczeniem i wiedzą
                        </div>
                    </div>
                    <div className='list__right'>
                        <div className='list__title'>
                            Wypełnij formularz
                        </div>
                        <form className='list__form' onSubmit={handleSubmit}>
                            {errorCompany && <h1 className='list__form__error'>{errorCompany}</h1>}
                            <input className='list__form__input' type="text" value={company}
                                   onChange={e => setCompany(e.target.value)} placeholder='Nazwa Firmy'/>
                            {errorName && <h1 className='list__form__error'>{errorName}</h1>}
                            <input className='list__form__input' type="text" value={name}
                                   onChange={e => setName(e.target.value)} placeholder='Imię i Nazwisko'/>
                            {errorMail && <h1 className='list__form__error'>{errorMail}</h1>}
                            <input className='list__form__input' type="text" value={mail}
                                   onChange={e => setMail(e.target.value)} placeholder='E-mail'/>
                            <textarea className='list__form__input' type="text" value={text}
                                      onChange={e => setText(e.target.value)} placeholder='Wpisz wiadomość' rows='5'/>
                            <label>
                                Dodaj CV:
                                <input className='list__form__input' type="file" onChange={fileInput}/>
                                {errorFile && <h1 className='list__form__error'>{errorFile}</h1>}
                            </label>
                            <button className='list__form__btn' type="submit">Wyślij</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}