import React from "react"
import {NotReadyData} from "./articles/notReadyData"
import {Link} from "react-router-dom"

import {connect} from "react-redux"

import {
    getDataTheNews
} from "../../../store/actions/theNews/theNewsAction"

import {
    getDataArticle
} from "../../../store/actions/article/articleAction"


const Card = (props)=>{
    const key = props.key
    const id = props.id
    const routTo = props.routTo
    const title = props.title
    const urlImg = props.urlImg
    const className = props.className

    let img
    let link

    if (!urlImg){
        img = <NotReadyData/>
    }
    else{
        img = <div className="img" style={{
            background: urlImg,
            backgroundSize: "cover"
        }}></div>
    }

    switch (className) {
        case "theNewsCard":
            link =
                <Link onClick={() => props.getDataTheNews(id)} to={routTo} className='read-btn'>
                    read
                </Link>
            break

        case "articleCard":
            link =
                <Link onClick={() => props.getDataArticle(id)} to={routTo} className='read-btn'>
                    read
                </Link>
            break

        default :
            link =
                <div className='read-btn'>
                    read
                </div>
    }

    return(
        <div className={className} key={key}>
            <h2>{title}</h2>
            {img}
            <div className='read-btn-wrapper'>
                {link}
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = {
    getDataTheNews,
    getDataArticle
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)