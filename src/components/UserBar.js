import React, { useContext } from 'react';
import appContext from '../context/app-context';

import logo from '../images/aerolab-logo.svg'
import coin from '../images/icons/coin.svg'

export const UserBar = () => {

    const {points, userName} = useContext(appContext)
    console.log(userName)

    return (
        <div className='container flex justify-between px-4 py-5'>
            <img src={logo} alt='logo' />
            <div className='flex text-xl items-center justify-between w-56'>
                <p>{userName}</p>
                <div className='flex bg-gray-200 items-center justify-between px-5 py-2 rounded-full w-28'>
                    <p className=''>{points}</p>
                    <img className='w-6' src={coin} alt='coin' />
                </div>
            </div>
        </div>
    )
};
