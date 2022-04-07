import React, { useContext, useMemo } from 'react'

import appContext from '../context/app-context';
import { ProductSingle } from './ProductSingle'

export const ProductGrid = ({ products }) => {

  const { currentPage, pageSize, order } = useContext(appContext)

  const sortedProducts = order === 'lowest'
    ? [...products].sort( (a, b) => a.cost - b.cost )
    : order === 'highest'
      ? [...products].sort( (a, b) => b.cost - a.cost )
      : products

      const currentProducts = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return sortedProducts.slice(firstPageIndex, lastPageIndex);
      }, [currentPage, sortedProducts])

  return (
    <div className='gap-6 justify-start max-w-[1176px] mx-auto flex flex-column flex-wrap'>
        {currentProducts.map((product) => {
          return <ProductSingle key={product._id} product={product} />
        })}
    
    </div>
  )
}
