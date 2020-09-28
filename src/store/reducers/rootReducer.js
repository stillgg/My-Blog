import {combineReducers} from 'redux'
import {articleReducer} from './articleReducer'
import {readArticleReducer} from './readArticleReducer'

export const rootReducer = combineReducers(
    {
        articles : articleReducer,
        readArticle : readArticleReducer
    }
)





