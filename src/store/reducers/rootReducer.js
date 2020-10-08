import {combineReducers} from "redux"

import {articleReducer} from "./article/articleReducer"
import {readArticleReducer} from "./article/readArticleReducer"

import {theNewsReducer} from "./theNews/theNewsReducer"
import {readNewsReducer} from "./theNews/readNewsReducer"

export const rootReducer = combineReducers(
    {
        articles : articleReducer,
        readArticle : readArticleReducer,

        theNews : theNewsReducer,
        readNews : readNewsReducer,
    }
)





