import {GET_POSITION_NEWS} from '../../types/theNewsTypes'

const initionalState = {
    value : 0
}

export const readNewsReducer = (state = initionalState , action)=>{
    switch (action.type) {

        case GET_POSITION_NEWS:
            return {...state, value: action.payload}

        default :
            return initionalState
    }
}