import React, { useContext } from 'react'

import appContext from '../context/app-context';
import { types } from '../context/app-types'
import { Pagination } from './Pagination';
import { ProductsCount } from './ProductsCount';

export const FiltersBar = () => {

  const {dispatch, order} = useContext(appContext)

  const handleSortBy = (order) => {
    dispatch({
      type: types.productSortBy,
      payload: order
    })
  }

  return (
    <div className='border-b flex justify-between mb-7 max-w-[1176px] mt-16 mx-auto pb-5'>
      <div className='flex items-center'>
        <ProductsCount />
        <div className='border-l flex items-center ml-3 pl-3'>
          <p className='text-slate-400'>Sort by:</p>
          <button 
            className={`bg-zinc-200 ml-3 px-3 rounded-full text-gray-400 py-1 ${order === 'date' && 'bg-cyan-400 text-white'}`}
            onClick={() => handleSortBy('date')}
          >
            Most recent
          </button>
          <button 
            className={`bg-zinc-200 ml-3 px-3 rounded-full text-gray-400 py-1 ${order === 'lowest' && 'bg-cyan-400 text-white'}`}
            onClick={() => handleSortBy('lowest')}
          >
            Lowest price
          </button>
          <button 
            className={`bg-zinc-200 ml-3 px-3 rounded-full text-gray-400 py-1 ${order === 'highest' && 'bg-cyan-400 text-white'}`}
            onClick={() => handleSortBy('highest')}
          >
            Highest price
          </button>
        </div>
      </div>
      <Pagination />
    </div>
  )
}
