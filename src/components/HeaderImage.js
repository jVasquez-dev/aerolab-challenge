import React from 'react'

import img from '../images/header-x1.png' 

export const HeaderImage = () => {
  return (
    <div>
        <img className='h-96 w-full object-cover' src={img} />
    </div>
  )
}
