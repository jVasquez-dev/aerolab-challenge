import React from 'react'

export const ProductSingle = ({product}) => {
    
  return (
    <div className='shadow-[3px_3px_3px_0_rgba(0,0,0,0.15)] px-3 pt-3 pb-4 bg-white'>
      <div className='w-[252px] border-b'>
        <img src={product.img.url} />
      </div>
        <p className='mt-5 text-sm text-slate-400'>{product.category}</p>
        <p>{product.name}</p>
    </div>
  )
}
