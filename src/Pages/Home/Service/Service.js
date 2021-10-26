import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    console.log({ service });
    const { _id, name, price, description, img } = service
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3 className="pt-3">{name}</h3>
            <h5>Price : {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="text-black btn btn-outline-success">Book {name}</button>
            </Link>
        </div>
    );
};

export default Service;