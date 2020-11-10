import React from "react";
import '../Filter/filter.scss';


const Filter = ({setCity, setStack, city, stack}) => {

    const handleCity = (event) => {
        setCity(event.target.value)
    }

    const handleStack = (event) => {
        setStack(event.target.value)
    }

    return (
        <div className='filter'>
            <div className='container'>
                <div className='filter__title'>Aktualne oferty pracy</div>
                <form className='filter__select'>
                    <label>
                        Wybierz lokalizację:
                        <select className='filter__select__town' value={city} onChange={handleCity}>
                            <option value="" >Wybierz miasto</option>
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
                            <option value="" >Wybierz stack</option>
                            <option value="javascript">Javascript</option>
                            <option value="react">React</option>
                            <option value="vue.js">Vue.js</option>
                            <option value="node.js">Node.js</option>
                            <option value="angular">Angular</option>
                        </select>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Filter;

