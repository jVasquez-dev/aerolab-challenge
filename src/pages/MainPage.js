import React, { useEffect, useState } from 'react';
import { HeaderImage } from '../components/HeaderImage';
import { ProductGrid } from '../components/ProductGrid';
import { UserBar } from '../components/UserBar';

export const MainPage = () => {

    const [products, setProducts] = useState('')

    useEffect(() => {

        const getData = async () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWY3MWUyODM4NDA4NzAwMWE3NjIyMjIiLCJpYXQiOjE2NDM1ODUwNjR9.pw_ysueUouPw1sUguOxzkttBNMi4onX7EM50wIY-irQ'
            }
            const response = await fetch('https://coding-challenge-api.aerolab.co/products', { headers })
            const data = await response.json()
            setProducts(data)
        }

        getData()
    }, [])


    return (
        <div className='bg-light'>
            <UserBar />
            <HeaderImage />
            { products ? <ProductGrid products={products} /> : <p>load</p>}
        </div>
    )
};
