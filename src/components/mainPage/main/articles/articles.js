import React from "react"
import {connect} from "react-redux"



import Header from "./header"
import RenderAllArticles from "./renderAllArticles"
import RenderAllBtns from "./renderAllBtns"




const Articles = () =>{
    return(
        <div className="articlesWrapper">
            <Header />
            <RenderAllArticles/>
            <RenderAllBtns />
        </div>
    )
}


export default connect(null, null)(Articles)