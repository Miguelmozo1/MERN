import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {

    return(
        <>
            <h2>Click to match a car to your client's likes!</h2>
            <Link to="/" className='btn' onClick={() => window.location.reload()}>Random Match</Link>
        </>
    )
}

export default Button;