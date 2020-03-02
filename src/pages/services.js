import React from 'react';

import { ServicesList } from '../components';

import { services } from '../data';

const Services = () => {
    return (
        <div className="container">
            <br/>
            <ServicesList data={services}/>
            <p>Overall, all types of communication and branding supports are provided with the top-notch quality.</p>
        </div>
    )
}

export default Services;