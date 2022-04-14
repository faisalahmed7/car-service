import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{name, description, img, price}=service
    return (
        <div className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:  {price}</p>
            <p>{description}</p>
            <button className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;