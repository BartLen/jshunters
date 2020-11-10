import React, {useState} from "react";
import '../Opening_Candid/opening_candid.scss';
import {emailRegexp} from "../../helpers/regexp";
import firebase from "firebase";
import {v4} from 'uuid';


export default function Opening_Candid() {
    const [name, setName] = useState("");
    const [file, setFile] = useState();
    const [mail, setMail] = useState("");
    const [text, setText] = useState("");
    const [success, setSuccess] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [errorFile, setErrorFile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (name.length <= 3) {
            setErrorName('Podaj Pełne Imię i Nazwisko');
            isValid = false;
        }

        if (!emailRegexp.test(mail)) {
            setErrorMail("Zły format adresu email");
            isValid = false;
        }

        if (!file) {
            setErrorFile("Brak pliku");
            isValid = false;
        }

        if (isValid) {
            const storage = firebase.storage();
            const uui = v4();
            const fileRef = storage.ref(uui);
            fileRef.put(file)
            firebase.firestore().collection('candidates').doc().set({
                agreement: {
                    mail,
                    text,
                    filename: uui
                }
            }).then(() => {
                setSuccess("Wiadomość wysłana")
                setName('')
                setFile('')
                setMail('')
                setText('')
               const fileRef = document.querySelector('input[type="file"]');
                fileRef.value = '';

            }).catch(err => {
                console.log(err);
            })
        }


    };
    const fileInput = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            setFile(file);
        } else {
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
                            {success && <h2 className='list__form__success'>{success}</h2>}
                            <button className='list__form__btn' type="submit">Wyślij</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}