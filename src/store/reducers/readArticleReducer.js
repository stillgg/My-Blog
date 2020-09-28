import {GET_POSITION} from '../types'

const initionalState = {
    value : 0
}

export const readArticleReducer = (state = initionalState , action)=>{
    switch (action.type) {

        case GET_POSITION:
            return {...state, value: action.payload}

        default :
            return initionalState

    }
}