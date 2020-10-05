import React from "react"
import {connect} from "react-redux"
import {
    changeArticlePage,
    changeFilteredData,
    changeInput,
    changeHowManyPages
} from "../../../../store/actions"


const Header = (props)=>{
    const data = props.articles.data
    // const filteredData = this.props.articles.filteredData

    return(
        <div className="header">
            <h1>Articles</h1>

            <div className="container">
                <input type="text" placeholder="Search article"
                       onChange={(e) => {
                           props.changeInput(e.target.value)

                           const filteredData = data.filter(item => {
                               const compareValue = item.title.toLowerCase().replace(/\s/g, '')
                               const valueInState = e.target.value.toLowerCase().replace(/\s/g, '')

                               if (compareValue.includes(valueInState)) {
                                   return item
                               }
                           })

                           props.changeFilteredData(filteredData)

                           const howManyPages = Math.round(filteredData.length/6)
                           props.changeHowManyPages(howManyPages)

                           props.changeArticlePage(1)
                       }}
                       value={props.articles.text}
                       maxLength="18"/>
                <div className="search"></div>
            </div>
        </div>
    )
}

const mapStateToProps = (props) => props

const mapDispatchToProps = {
    changeInput,
    changeFilteredData,
    changeArticlePage,
    changeHowManyPages
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)