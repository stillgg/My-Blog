import {
    GET_ITEM_NEWS,
    GET_POSITION_NEWS,
    CHANGE_NEWS_PAGE_NEWS,
    CHANGE_INPUT_NEWS,
    CHANGE_FILTERED_DATA_NEWS,
    CHANGE_HOW_MANY_PAGES_NEWS,
    CONTENT_READY_NEWS
} from "../../types/theNewsTypes"


export function getDataTheNews(id){
    return {
        type : GET_ITEM_NEWS,
        payload : id
    }
}

export function getPositionTheNews(value) {

    if( isNaN(value) ){
        value = 0
    }

    return {
        type : GET_POSITION_NEWS,
        payload : value
    }

}

export function changeDataPageTheNews(id) {
    return {
        type: CHANGE_NEWS_PAGE_NEWS,
        payload: id
    }
}

export function changeInputTheNews(text){
    return{
        type: CHANGE_INPUT_NEWS,
        payload: text
    }
}

export function changeFilteredDataTheNews(data) {
    return{
        type: CHANGE_FILTERED_DATA_NEWS,
        payload: data
    }
}

export function changeHowManyPagesTheNews(howPage) {
    return{
        type : CHANGE_HOW_MANY_PAGES_NEWS,
        payload : howPage
    }
}

export function contentReadyTheNews() {
    return{
        type: CONTENT_READY_NEWS,
        payload: true
    }
}
