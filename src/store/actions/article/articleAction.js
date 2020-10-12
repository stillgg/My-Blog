import {
    GET_ITEM,
    GET_POSITION,
    CHANGE_ARTICLES_PAGE,
    CHANGE_INPUT_ARTICLE,
    CHANGE_FILTERED_DATA,
    CHANGE_HOW_MANY_PAGES,
    CONTENT_READY_ARTICLES
} from "../../types/articleTypes"

export function getDataArticle(id){
    return {
        type : GET_ITEM,
        payload : id
    }
}

export function getPositionArticle(value) {

    if( isNaN(value) ){
        value = 0
    }

    return {
        type : GET_POSITION,
        payload : value
    }

}

export function changeDataPageArticle(id) {
    return {
        type: CHANGE_ARTICLES_PAGE,
        payload: id
    }
}

export function changeInputArticle(text){
    return{
        type: CHANGE_INPUT_ARTICLE,
        payload: text
    }
}

export function changeFilteredDataArticle(data) {
    return{
        type: CHANGE_FILTERED_DATA,
        payload: data
    }
}

export function changeHowManyPagesArticle(howPage) {
    return{
        type : CHANGE_HOW_MANY_PAGES,
        payload : howPage
    }
}

export function contentReadyArticle() {
    return{
        type: CONTENT_READY_ARTICLES,
        payload: true
    }
}