import React from 'react'
import { ProductSingle } from './ProductSingle'

export const ProductGrid = ({ products }) => {
  console.log(products[0])
  return (
    <div className='container bg-light'>
      <div className='row mt-5 d-flex justify-content-between'>
        {products.map((product) => {
          return <ProductSingle key={product._id} product={product} />
        })}
      </div>
    </div>
  )
}
