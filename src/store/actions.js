import {
    GET_ITEM,
    GET_POSITION,
    CHANGE_ARTICLES_PAGE,
    CHANGE_INPUT,
    CHANGE_FILTERED_DATA,
    CHANGE_HOW_MANY_PAGES
} from "./types"

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

export function changeArticlePage(id) {
    return {
        type: CHANGE_ARTICLES_PAGE,
        payload: id
    }
}

export function changeInput(text){
    return{
        type: CHANGE_INPUT,
        payload: text
    }
}

export function changeFilteredData(data) {
    return{
        type: CHANGE_FILTERED_DATA,
        payload: data
    }
}

export function changeHowManyPages(howPage) {
    return{
        type : CHANGE_HOW_MANY_PAGES,
        payload : howPage
    }
}