import React from "react"

import Article from './article'


export function Articles() {

    return(
        <div>
            <div className="header">
                <h1>Articles</h1>

                <div className="container">
                    <input type="text" placeholder="Search article" maxLength="18"/>
                    <div className="search"></div>
                </div>
            </div>

            <div className="articles">
                <Article />
            </div>
        </div>
    )
}