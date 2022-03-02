import React from 'react'

export const ProductSingle = ({product}) => {
    console.log(product)
  return (
    <div className='col-3 bg-light ps-2 pe-2 d-flex justify-content-center mb-4'>
        <img src={product.img.url} />
    </div>
  )
}
