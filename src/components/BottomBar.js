import React from 'react'

import { Pagination } from './Pagination'
import { ProductsCount } from './ProductsCount'

export const BottomBar = () => {



  return (
    <div 
        className='border-b flex justify-between max-w-[1176px] mt-16 mx-auto pb-5'
    >
        <ProductsCount />
        <Pagination />
    </div>
  )
}
