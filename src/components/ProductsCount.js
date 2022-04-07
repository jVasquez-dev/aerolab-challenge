import React, { useContext } from 'react'

import appContext from '../context/app-context';

export const ProductsCount = () => {

    const { currentPage, totalProducts, pageSize } = useContext(appContext)

    const lastPageIndex = Math.ceil( totalProducts/pageSize )


  return (
    <div>
        <p>
            <span>
                { currentPage !== lastPageIndex ? currentPage * pageSize : totalProducts}
            </span> of
            <span> {totalProducts} 
            </span> products
        </p>
    </div>
  )
}
