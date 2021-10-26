import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return (
        <div>
            <h1>Details of {service?.name}</h1>
            <h1>this is booking {serviceId}</h1>
        </div>
    );
};

export default Booking;