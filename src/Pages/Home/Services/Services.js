import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setService] = useState([]);
    useEffect(() => {

        fetch('car.json')
            .then(res => res.json())
            .then(data => setService(data))


    }, [])
    return (
        <div className='mt-5'>
            <h2 className='services-title'>Our Services</h2>

            <div className='services-container'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}>
                </Service>)
            }
            </div>
        </div>
    );
};

export default Services;