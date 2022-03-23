import React from 'react'

export const FiltersBar = () => {
  return (
    <div className='container bg-red-500'>
      <p>16 of 32 products</p>
      <p>Sort by:</p>
      <button>Most recent</button>
      <button>Lowest price</button>
      <button>Highest price</button>
    </div>
  )
}
