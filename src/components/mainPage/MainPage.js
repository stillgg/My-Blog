import React from 'react'
import './mainPage.scss'
import {Nav} from "./nav/Nav"
import {Main} from "./main/Main"
import {BrowserRouter} from "react-router-dom"

export function MainPage() {
    return(
        <BrowserRouter>
            <div className='MainPage'>
                <Nav/>
                <Main/>
            </div>
        </BrowserRouter>
    )
}