import React from "react"
import {connect} from "react-redux"

import {
    changeDataPageTheNews,
    changeFilteredDataTheNews,
    changeInputTheNews,
    changeHowManyPagesTheNews
} from "../../../../store/actions/theNews/theNewsAction"


const HeaderTheNews = (props)=>{
    const data = props.theNews.data
    const text = props.theNews.text
    return(
        <div className="header">
            <h1>The NEWS</h1>

            <div className="container">
                <input type="text" placeholder="Search the news" value={text}
                       onChange={(e) => {
                           props.changeInputTheNews(e.target.value)

                           const filteredData = data.filter(item => {
                               const compareValue = item.title.toLowerCase().replace(/\s/g, '')
                               const valueInState = e.target.value.toLowerCase().replace(/\s/g, '')

                               if (compareValue.includes(valueInState)) {
                                   return item
                               }
                               return false
                           })

                           props.changeFilteredDataTheNews(filteredData)

                           const howManyPages = Math.round(filteredData.length/6)
                           props.changeHowManyPagesTheNews(howManyPages)
                           props.changeDataPageTheNews(1)
                       }}

                       maxLength="18"/>
                <div className="search"></div>
            </div>
        </div>
    )
}

const mapStateToProps = (props) => props

const mapDispatchToProps = {
    changeInputTheNews,
    changeFilteredDataTheNews,
    changeDataPageTheNews,
    changeHowManyPagesTheNews
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderTheNews)