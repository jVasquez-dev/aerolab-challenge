import React, { useContext } from 'react'

import appContext from '../context/app-context';
import { types } from '../context/app-types'

import rigthArrow from '../images/icons/arrow-right.svg'
import leftArrow from '../images/icons/arrow-left.svg'

export const Pagination = () => {

    const {dispatch, currentPage, pageSize, totalProducts} = useContext(appContext)

    const firstPageIndex = 1
    const lastPageIndex = Math.ceil( totalProducts/pageSize )

    const handlePageChange = ( pageNumber ) => {

        if(pageNumber > lastPageIndex) {
            console.log('here')
            return
        }

        dispatch({
            type: types.paginationChange,
            payload: pageNumber
        })
    }

  return (
    <div className='flex'>
        { currentPage === firstPageIndex || 
            <img 
                src={leftArrow} 
                alt="previous page" 
                className='cursor-pointer mr-3'
                onClick={() => handlePageChange( currentPage - 1 ) } 
            /> 
        }
        <img 
            src={rigthArrow} 
            alt="next page"
            className={`${currentPage < lastPageIndex && 'cursor-pointer'}`} 
            onClick={ () => handlePageChange( currentPage + 1 ) } 
        />
    </div>
  )
}
