import React from "react"
import {connect} from "react-redux"

import HeaderTheNews from "./header"
import RenderAllNews from "./renderAllNews"
import RenderAllBtns from "./renderAllBtns"


const TheNews = () =>{
    return(
        <div className="articlesWrapper">
            <HeaderTheNews/>
            <RenderAllNews/>
            <RenderAllBtns />
        </div>
    )
}


export default connect(null, null)(TheNews)