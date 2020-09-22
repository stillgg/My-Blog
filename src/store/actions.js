import {GET_ITEM} from "./types"

export function getArticle(id){
    return {
        type : GET_ITEM,
        payload : id
    }
}