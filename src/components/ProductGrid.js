import React from 'react'

import { ProductSingle } from './ProductSingle'

export const ProductGrid = ({ products }) => {

  return (
    <div className='gap-6 justify-center max-w-[1176px] mx-auto flex flex-column flex-wrap'>
        {products.map((product) => {
          return <ProductSingle key={product._id} product={product} />
        })}
    
    </div>
  )
}
