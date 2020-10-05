import React from 'react'
import {Route} from 'react-router-dom'


import StartPage from './startPage/startPage'
import ReadArticle from './articles/readArticle'
import Articles from './articles/articles'

import {AboutMe} from './aboutMe/aboutMe'
import {TheNews} from './theNews/theNews'


export function Main() {
    return (
        <main className='Main'>
            <Route path='/startPage' component={StartPage}/>
            <Route path='/article' component={ReadArticle}/>
            <Route path='/articles' component={Articles}/>
            <Route path='/theNews' render={TheNews}/>
            <Route path='/aboutMe' render={AboutMe}/>
        </main>
    )
}