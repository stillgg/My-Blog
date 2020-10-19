import React from 'react'
import {Route} from 'react-router-dom'
//Router, Switch

import StartPage from "./startPage/startPage"
import ReadArticle from "./articles/readArticle"
import Articles from "./articles/articles"

import {AboutMe} from "./aboutMe/aboutMe"

import TheNews from "./theNews/theNews"
import ReadNews from "./theNews/readNews"


export function Main() {
    return (
        <main className='Main'>
            <Route path='/startPage' component={StartPage}/>
            <Route path='/article' component={ReadArticle}/>
            <Route path='/articles' component={Articles}/>
            <Route path='/theNews' component={TheNews}/>
            <Route path='/news' component={ReadNews}/>
            <Route path='/aboutMe' render={AboutMe}/>
        </main>
    )
}