import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <h1 className='not-found'>This page does not exist. <Link to='/'>Go back Home!</Link></h1>
    )
}

export default NotFound;