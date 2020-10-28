import React from 'react';
import './jobs.scss';
import Opening_Jobs from "../../components/Opening_Jobs/opening_jobs";
import Filter from "../../components/Filter/filter";
import Offers from "../../components/Offers/offers";

export default function Jobs() {
    return (
        <>
            <Opening_Jobs />
            <Filter />
            <Offers />
        </>
    );
}