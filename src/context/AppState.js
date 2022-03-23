import React, { useReducer }  from 'react'

import AppContext from './app-context'
import { appReducer } from './app-reducer'
import { types } from './app-types'

export const AppState = (props) => {

    const initialState = {
        uid: '',
        userName: '',
        points: 0,
        loading: true,
        products: [],
    }

    const [state, dispatch] = useReducer(appReducer, initialState)

     const wrapAsync = (dispatch) => {
        return (action) => {
            if (action instanceof Function) {
                return action(dispatch);
            }
            return dispatch(action);
        };
    }

    const asyncDispatch = wrapAsync(dispatch)

    const startLoadingProducts = async(dispatch) => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWY3MWUyODM4NDA4NzAwMWE3NjIyMjIiLCJpYXQiOjE2NDM1ODUwNjR9.pw_ysueUouPw1sUguOxzkttBNMi4onX7EM50wIY-irQ'
            }
            const response = await fetch('https://coding-challenge-api.aerolab.co/products', { headers })
            const data = await response.json()
            dispatch({
                type: types.productLoadAll,
                payload: data
            })
    }

    const startLoadingUser = async(dispatch) => {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWY3MWUyODM4NDA4NzAwMWE3NjIyMjIiLCJpYXQiOjE2NDM1ODUwNjR9.pw_ysueUouPw1sUguOxzkttBNMi4onX7EM50wIY-irQ'
        }
        const response = await fetch('https://coding-challenge-api.aerolab.co/user/me', { headers })
        const data = await response.json()
        dispatch({
            type: types.userLoad,
            payload: data
        })
    }
    

  return (
    <AppContext.Provider
        value={{
            dispatch: asyncDispatch,
            loading: state.loading,
            startLoadingProducts,
            points: state.points,
            products: state.products,
            startLoadingUser,
            uid: state.uid,
            userName: state.userName
        }}
    >
        { props.children }
    </AppContext.Provider>
  )
}
