import React, { useContext, useEffect, useState } from 'react';
import { BottomBar } from '../components/BottomBar';

import { FiltersBar } from '../components/FiltersBar';
import { HeaderImage } from '../components/HeaderImage';
import { ProductGrid } from '../components/ProductGrid';
import { UserBar } from '../components/UserBar';
import appContext from '../context/app-context';

export const MainPage = () => {

    const {dispatch, products, startLoadingProducts, startLoadingUser} = useContext(appContext)

    useEffect(() => {

        dispatch(startLoadingProducts)
        dispatch(startLoadingUser)
        
    }, [])

    return (
        
        <div className='bg-slate-50 pb-7'>
            <UserBar />
            <HeaderImage />
            <FiltersBar />
            { products.length == 0 ? <p>load</p> : <ProductGrid products={products} />}
            <BottomBar />
        </div>
    )
};
