import React, {useState} from "react";
import '../Registration/registration.scss';
import {emailRegexp} from './../../helpers/regexp';

import firebase from 'firebase';

export default function Registration(){
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [mail, setMail] = useState ('');
    const [login1, setLogin1] = useState('');
    const [password1, setPassword1] = useState('');
    const [login2, setLogin2] = useState('');
    const [password2, setPassword2] = useState('');

    const [errorName, setErrorName] = useState("");
    const [errorSurname, setErrorSurname] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [errorLogin1, setErrorLogin1] = useState('');
    const [errorPassword1, setErrorPassword1] = useState('');
    const [errorLogin2, setErrorLogin2] = useState('');
    const [errorPassword2, setErrorPassword2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length <= 2) {
            setErrorName('Podaj Imię');
        }

        if (surname.length <= 2) {
            setErrorSurname('Podaj Nazwisko');
        }

        if (!emailRegexp.test(mail)) {
            setErrorMail("Zły format adresu email");
        }

        if (login1.length <=6) {
            setErrorLogin1('Login musi mieć min. 7 znaków');
        }

        if (password1.length <=6) {
            setErrorPassword1('Hasło musi mieć min. 7 znaków');
        }

        if (login2.length <=6) {
            setErrorLogin2('Login musi mieć min. 7 znaków');
        }

        if (password2.length <=6) {
            setErrorPassword2('Hasło musi mieć min. 7 znaków');
        }

        setErrorMail("");

        firebase.auth().createUserWithEmailAndPassword(mail, password1)
            .then(()=> {
            console.log('Added to firebase');
        }).catch(err => {
            console.log(err);
        })
    };

    return(
            <div className='registration'>
                <div className='container'>
                    <div className='registration__left'>
                        <div className='list__title'>
                            Rejestracja
                        </div>
                        <form className='list__form' onSubmit={handleSubmit}>
                            {errorName && <h1 className='list__form__error'>{errorName}</h1>}
                            <input className='list__form__input' type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Imię'/>
                            {errorSurname && <h1 className='list__form__error'>{errorSurname}</h1>}
                            <input className='list__form__input' type="text" value={surname} onChange={e => setSurname(e.target.value)} placeholder='Nazwisko'/>
                            {errorMail && <h1 className='list__form__error'>{errorMail}</h1>}
                            <input className='list__form__input' type="text" value={mail} onChange={e => setMail(e.target.value)} placeholder='E-mail'/>
                            {errorLogin1 && <h1 className='list__form__error'>{errorLogin1}</h1>}
                            <input className='list__form__input' type="text" value={login1} onChange={e => setLogin1(e.target.value)} placeholder='Login'/>
                            {errorPassword1 && <h1 className='list__form__error'>{errorPassword1}</h1>}
                            <input className='list__form__input' type="text" value={password1} onChange={e => setPassword1(e.target.value)} placeholder='Hasło'/>
                            <button className='list__form__btn' type="submit" >Zarejestruj się</button>
                        </form>
                    </div>
                    <div className='registration__right'>
                        <div className='list__title'>
                            Logowanie
                        </div>
                        <form className='list__form' onSubmit={handleSubmit}>
                            {errorLogin2 && <h1 className='list__form__error'>{errorLogin2}</h1>}
                            <input className='list__form__input' type="text" value={login2} onChange={e => setLogin2(e.target.value)} placeholder='Login'/>
                            {errorPassword2 && <h1 className='list__form__error'>{errorPassword2}</h1>}
                            <input className='list__form__input' type="text" value={password2} onChange={e => setPassword2(e.target.value)} placeholder='Hasło'/>
                            <button className='list__form__btn' type="submit" >Zaloguj się</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}
