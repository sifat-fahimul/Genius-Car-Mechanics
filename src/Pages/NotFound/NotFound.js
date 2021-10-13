import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className='w-100 ' src={notFound} alt="" />
            <Link to='/'>
                <button className='px-5 text-white btn btn-outline-primary not-found-btn'>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;