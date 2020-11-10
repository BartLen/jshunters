import React from 'react';
import './details.scss';
import Offer_title from "../../components/Offer_title/offer_title";
import Offer_details from "../../components/Offer_details/offer_details";
import Offer_form from "../../components/Offer_form/offer_form";

const Details = (params) =>  {
    return (
       <>
           <Offer_title />
           <Offer_details />
           <Offer_form />
       </>
    )
}

export default  Details