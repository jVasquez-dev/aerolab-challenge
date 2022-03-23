import { types } from "./app-types"

export const appReducer = (state, action) => {
    switch (action.type) {
        case types.testChangeOn:
            return {...state, isOn: !state.isOn}

        case types.productLoadAll:
            return {...state, products:[...action.payload]}

        case types.userLoad:
            return {...state, uid: action.payload._id, userName: action.payload.name, points: action.payload.points}

        default:
            return state;
    }
}