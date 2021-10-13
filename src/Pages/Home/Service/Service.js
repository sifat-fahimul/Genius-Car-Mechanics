import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img } = service
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3 className="pt-3">{name}</h3>
            <h5>Price : {price}</h5>
            <p className="px-3">{description}</p>
            <button className="btn btn-outline-secondary">Book {name.toLowerCase()}</button>
        </div>
    );
};

export default Service;