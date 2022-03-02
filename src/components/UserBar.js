import React from 'react';

import logo from '../images/aerolab-logo.svg'
import coin from '../images/icons/coin.svg'

export const UserBar = () => {
    return (
        <div className='bg-light container d-flex align-items-center justify-content-between pt-3 pb-3 w-100'>
            <img src={logo} alt='logo' />
            <div className='d-flex align-items-center'>
                <p className='m-0 me-3 fs-5'>Jhon Kitte</p>
                <div className='d-flex align-items-center bg-secondary rounded-pill ps-2'>
                    <p className='m-0 me-1 fs-5'>6000</p>
                    <img className='w-25 mt-1' src={coin} />
                </div>
            </div>
        </div>
    )
};
