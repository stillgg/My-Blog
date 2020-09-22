import React from "react"

import {connect} from "react-redux";

const ReadArticle = ({articles}) => {

    const id = articles.id
    const article = articles.data[id-1]

    return (
        <div className='readArticle'>
            <h2>{article.title}</h2>
            <p>{article.text}</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return state
}

export default connect(mapStateToProps,null)(ReadArticle)