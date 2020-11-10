import React, {useState} from 'react';
import './jobs.scss';
import Opening_Jobs from "../../components/Opening_Jobs/opening_jobs";
import Filter from "../../components/Filter/filter";
import Offers from "../../components/Offers/offers";

export default function Jobs() {
    const [city, setCity] = useState('')
    const [stack, setStack] = useState('')


    return (
        <>
            <Opening_Jobs />
            <Filter city={city} setCity={setCity} stack={stack} setStack={setStack}  />
            <Offers city={city} stack={stack}  />
        </>
    );
}