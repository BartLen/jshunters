import React, {useState} from "react";
import '../Filter/filter.scss';


const Filter = () => {

    const [city, setCity] = useState('')
    const [stack, setStack] = useState('')

    const handleCity = (event) => {
        setCity(event.target.value)
    }

    const handleStack = (event) => {
        setStack(event.target.value)
    }

    const handleSubmit = (event) => {
        /*alert('Twoja lokalizacja: ' + this.state.value);*/
        event.preventDefault();
    }

    return (
        <div className='filter'>
            <div className='container'>
                <div className='filter__title'>Aktualne oferty pracy</div>
                <form onSubmit={handleSubmit} className='filter__select'>
                    <label>
                        Wybierz lokalizację:
                        <select className='filter__select__town' value={city} onChange={handleCity}>
                            <option value="kraków">Kraków</option>
                            <option value="wrocław">Wrocław</option>
                            <option value="poznań">Poznań</option>
                            <option value="warszawa">Warszawa</option>
                            <option value="katowice">Katowice</option>
                        </select>
                    </label>
                    <label>
                        Wybierz stack technologiczny:
                        <select className='filter__select__stack' value={stack} onChange={handleStack}>
                            <option value="javascript">Javascript</option>
                            <option value="react">React</option>
                            <option value="vue.js">Vue.js</option>
                            <option value="node.js">Node.js</option>
                            <option value="angular">Angular</option>
                        </select>
                    </label>
                    <input className='filter__select__btn' type="submit" value="Szukaj"/>
                </form>
            </div>
        </div>
    );
}

export default Filter;

/*
export default function Filter() {
    return (
        <>
            <div className='filter'>
                <div className='container'>
                    <div className='filter__title'>Aktualne oferty pracy</div>
                    <div className='filter__select'>
                        <select className='filter__select__town'>
                            <option value='Kraków'>Kraków</option>
                            <option value='Wrocław'>Wrocław</option>
                            <option value='Katowice'>Katowice</option>
                            <option value='Poznań'>Poznań</option>
                        </select>
                        <select className='filter__select__stack'>
                            <option value='Javascript'>Javascript</option>
                            <option value='React'>React</option>
                            <option value='Vue.js'>Vue.js</option>
                            <option value='Node.js'>Node.js</option>
                        </select>
                    </div>
                    <button onSubmit={handleSubmit}>Szukaj</button>
                </div>
            </div>
        </>
    )
}*/
