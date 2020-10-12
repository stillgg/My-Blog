import React from "react"

import {connect} from "react-redux"

import {getPositionTheNews} from "../../../../store/actions/theNews/theNewsAction"


class ReadNews extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.getPosition = setInterval(()=>{
            const x = (window.pageYOffset * 100) / (document.body.scrollHeight - document.documentElement.clientHeight)
            return this.props.getPositionTheNews(Math.round(x))
        },100)
    }

    componentWillUnmount() {
        clearInterval(this.getPosition)
    }

    render(){
        const id = this.props.theNews.id
        const article = this.props.theNews.data[id-1]
        const value = this.props.readNews.value

        console.log(this.props.theNews)

        return (
            <div className='readArticle'>
                <div className="wrapper">
                    <div className="title">
                        <h2>{article.title}</h2>
                        <div className='contentLine'>
                            <span className='value'>{value}%</span>

                            <div className='lineWrapper'></div>
                            <div className='line' style={{ width: value + '%' }}></div>
                        </div>
                    </div>

                    <p className='articleText'>{article.text}</p>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = {
    getPositionTheNews
}

export default connect(mapStateToProps,mapDispatchToProps)(ReadNews)