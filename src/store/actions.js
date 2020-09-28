import {GET_ITEM,GET_POSITION} from "./types"

export function getArticle(id){
    return {
        type : GET_ITEM,
        payload : id
    }
}

export function getPosition(value) {

    if( isNaN(value) ){
        value = 0
    }

    return {
        type : GET_POSITION,
        payload : value
    }
}