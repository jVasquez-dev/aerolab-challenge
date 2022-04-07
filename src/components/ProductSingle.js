import React, { useContext, useState } from 'react'
import appContext from '../context/app-context';

import coin from '../images/icons/coin.svg'
import buyIcon from '../images/icons/buy-blue.svg' 
import { ProductRedeem } from './ProductRedeem';

export const ProductSingle = ({product}) => {

  const { points } = useContext(appContext)
  const [display, setDisplay] = useState(false)
  
  return (
    <div 
      className='shadow-[3px_3px_3px_0_rgba(0,0,0,0.15)] px-3 pt-3 pb-4 bg-white relative hover:-translate-y-2 transition-transform'
      onMouseEnter={ () => setDisplay(true) }
      onMouseLeave={ () => setDisplay(false)}
    >
      <div className='absolute top-3 right-3'> 
        { product.cost < points 
          ? <img alt='buy icon' src={buyIcon} /> 
          : <div className='flex bg-zinc-700/50 items-center justify-between px-5 py-2 rounded-full text-white'>
              <p className=''>You need {product.cost - points}</p>
              <img className='w-6 ml-1' src={coin} alt='coin' />
            </div>} 
      </div>
      <div className='w-[252px] border-b'>
        <img alt='product image' src={product.img.url} />
      </div>
        <p className='mt-5 text-sm text-slate-400'>{product.category}</p>
        <p>{product.name}</p>
        { display && <ProductRedeem /> }
    </div>
  )
}
