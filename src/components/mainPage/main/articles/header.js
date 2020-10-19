import React from "react"
import {connect} from "react-redux"
import {
    changeDataPageArticle,
    changeFilteredDataArticle,
    changeInputArticle,
    changeHowManyPagesArticle
} from "../../../../store/actions/article/articleAction"


const Header = (props)=>{
    const data = props.articles.data
    const text = props.articles.text

    return(
        <div className="header">
            <h1>Articles</h1>

            <div className="container">
                <input type="text" placeholder="Search article"
                       onChange={(e) => {
                           props.changeInputArticle(e.target.value)


                           const filteredData = data.filter( item => {
                               const compareValue = item.title.toLowerCase().replace(/\s/g, '')
                               const valueInState = e.target.value.toLowerCase().replace(/\s/g, '')

                               if (compareValue.includes(valueInState)) {
                                   return item
                               }

                               return false
                           })

                           props.changeFilteredDataArticle(filteredData)

                           const howManyPages = Math.round(filteredData.length/6)
                           props.changeHowManyPagesArticle(howManyPages)

                           props.changeDataPageArticle(1)
                       }}
                       value={text}
                       maxLength="18"
                       className="searchInput"
                />
                <div className="search"></div>
            </div>
        </div>
    )
}

const mapStateToProps = (props) => props

const mapDispatchToProps = {
    changeInputArticle,
    changeFilteredDataArticle,
    changeDataPageArticle,
    changeHowManyPagesArticle
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)