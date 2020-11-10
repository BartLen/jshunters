import React, {useEffect, useState} from "react";
import '../Offers/offers.scss';
import {Link} from 'react-router-dom';

import firebase from 'firebase';


export default function Offers({city, stack}) {
    const [offers, setOffers] = useState([])
    const [offersToDisplay, setOffersToDisplay] = useState([])

    useEffect(()=> {
        const companies = firebase.firestore().collection('companies');
        companies.get().then(snapshot=> {
            const dataArray = [];
            snapshot.forEach(snapshotRef => {
                const companyObj = snapshotRef.data();
                const offertsFromCompiany = companyObj.offers || [];
                const offersAfterAddCompanyName = offertsFromCompiany.map(offerObj => ({...offerObj, companyName: companyObj.company}))
                dataArray.push(...offersAfterAddCompanyName)
            })
            setOffers(dataArray);
        })
    })

    useEffect(()=> {
        let currentOffers = offers;

        if(city !== ''){
            currentOffers = currentOffers.filter(offer => {
                const cityValue = city.toLowerCase()
                const offerValue = offer.place.toLowerCase()
                return offerValue === cityValue
            });
        }

        if(stack !== ''){
            currentOffers = currentOffers.filter(offer => {
                const stackValue = stack.toLowerCase()
                const titleValue = offer.jobTitle.toLowerCase()
                return titleValue.indexOf(stackValue) > -1
            });
        }

        setOffersToDisplay(currentOffers)

    }, [offers, city, stack])

    return(
            <div className='offers'>
                <div className='container'>
                    {offersToDisplay.map((offer, index) => (
                        <div key={index} className='offers__example'>
                            <div className='offers__example__left'>
                                <span className='offers__example__title'>{offer.jobTitle}</span>
                                <span className='offers__example__town'>{offer.place}</span>
                                <span className='offers__example__time'>{offer.type}</span>
                            </div>
                            <div className='offers_example_right'>
                                <Link to={`/details/${offer.companyName}/${offer.offerId}`} className='offers__example__btn'>Szczegóły</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}