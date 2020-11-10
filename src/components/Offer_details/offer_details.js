import React, {useEffect, useState} from "react";
import './/offer_details.scss';
import {
    useParams
} from "react-router-dom";
import firebase from 'firebase';

export default function Offer_details() {
    let { companyName, contentId } = useParams();
    const companie = firebase.firestore().collection('companies').where('company', '==', companyName);
    const [details, setDetails] = useState([])

    useEffect(()=> {
        companie.get().then(snapshot=> {
            const dataArray = [];
            snapshot.forEach(snapshotRef => {
                const offertsFromCompianie = snapshotRef.data().offers;
                dataArray.push(...offertsFromCompianie)
            })
            setDetails(dataArray.find(offer => offer.offerId === contentId ));
        })
    }, [])
    console.log(contentId)
    return (
        <>
            <div className='details'>
                <div className='container'>
                    <div className='details__info'>
                        <p>{details.details}</p>

                        {/*<div className='details__info__description'>Our customer is a multinational company operating in the design of new developments, architectures, and digital experiences sectors. In one of their offices, in Valencia, Spain, they support different cloud projects.</div>*/}
                        {/*<div className='details__info__title'>Wymagania:</div>*/}
                        {/*<ul className='details__info__requirements'>*/}
                        {/*    <li>At least 2 years of experience in maintaining and managing large scale SaaS applications in at least one major platform (GCP, AWS, Azure)</li>*/}
                        {/*    <li>Microservices and container orchestration with Docker and Kubernetes</li>*/}
                        {/*    <li>At least 2 years of experience with Linux operating system</li>*/}
                        {/*    <li>Great skills in one major programming language</li>*/}
                        {/*    <li>English B2</li>*/}
                        {/*</ul>*/}
                        {/*<div className='details__info__title'>Obowiązki:</div>*/}
                        {/*<ul className='details__info__responsibilities'>*/}
                        {/*    <li>Responsible for architectural design and infrastructure availability.</li>*/}
                        {/*    <li>Continuous improvement of our deployment chain.</li>*/}
                        {/*    <li>Ensure security and audit controls are implemented and updated with the latest IT standards.</li>*/}
                        {/*    <li>Troubleshooting incidents by being informed upfront with monitoring, logs and metrics.</li>*/}
                        {/*    <li>Optimize public cloud computing costs.</li>*/}
                        {/*</ul>*/}
                        {/*<div className='details__info__title'>Dodatkowe umiejętności:</div>*/}
                        {/*<ul className='details__info__skills'>*/}
                        {/*    <li>Service mesh (such as Istio)</li>*/}
                        {/*    <li>Declarative configuration management and provisioning (Ansible, Puppet or Chef)</li>*/}
                        {/*    <li>CDN, DNS, cache, redirects in platforms such as Akamai or CloudFlare</li>*/}
                        {/*</ul>*/}
                        {/*<div className='details__info__title'>Co oferuje nasz Klient:</div>*/}
                        {/*<ul className='details__info__skills'>*/}
                        {/*    <li>Great terms and conditions</li>*/}
                        {/*    <li>MacBook Pro</li>*/}
                        {/*    <li>23 work days of vacations,</li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </div>
        </>
    )
}