import React, {useState} from "react";
import '../Registration/registration.scss';
import {emailRegexp} from './../../helpers/regexp';

import firebase from 'firebase';

export default function Registration(){
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [mail, setMail] = useState ('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [errorName, setErrorName] = useState("");
    const [errorSurname, setErrorSurname] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [errorLogin, setErrorLogin] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.length <= 2) {
            setErrorName('Podaj Imię');
            return;
        }

        if (!surname.length <= 2) {
            setErrorSurname('Podaj Nazwisko');
            return;
        }

        if (!emailRegexp.test(mail)) {
            setErrorMail("Zły format adresu email");
            return;
        }

        if (login.length <=4) {
            setErrorLogin('Login musi być > 4');
            return;
        }

        if (password.length <=4) {
            setErrorPassword('Hasło musi być > 4');
            return;
        }

        setErrorMail("");

        firebase.auth().createUserWithEmailAndPassword(mail, password)
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
                            {errorLogin && <h1 className='list__form__error'>{errorLogin}</h1>}
                            <input className='list__form__input' type="text" value={login} onChange={e => setLogin(e.target.value)} placeholder='Login'/>
                            {errorPassword && <h1 className='list__form__error'>{errorPassword}</h1>}
                            <input className='list__form__input' type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder='Hasło'/>
                            <button className='list__form__btn' type="submit" >Zarejestruj</button>
                        </form>
                    </div>
                    <div className='registration__right'>
                        <div className='list__title'>
                            Logowanie
                        </div>
                        <form className='list__form' onSubmit={handleSubmit}>
                            {errorLogin && <h1 className='list__form__error'>{errorLogin}</h1>}
                            <input className='list__form__input' type="text" value={login} onChange={e => setLogin(e.target.value)} placeholder='Login'/>
                            {errorPassword && <h1 className='list__form__error'>{errorPassword}</h1>}
                            <input className='list__form__input' type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder='Hasło'/>
                            <button className='list__form__btn' type="submit" >Zaloguj się</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}
