import React from "react"

import {connect} from "react-redux"

import {getPosition} from "../../../../store/actions"




class ReadArticle extends React.Component{
    constructor(props) {
        super(props)

        // this.state = {
        //     value : this.getTarget()
        // }
        //
        // this.getTarget = this.getTarget.bind(this)
    }

    // getTarget (){
        // const startValue =  window.pageYOffset + document.documentElement.clientHeight

        // console.log(this)
        // console.log( Math.round(x).toString() )
        // console.log( document.body.scrollHeight)
        // console.log( document.documentElement.scrollHeight )
    // }

    componentDidMount() {
        this.getPosition = setInterval(()=>{
                const x = (window.pageYOffset * 100) / (document.body.scrollHeight - document.documentElement.clientHeight)
                return this.props.getPosition(Math.round(x))
            },100)
    }

    componentWillUnmount() {
        clearInterval(this.getPosition)
    }

    render(){
        const id = this.props.articles.id
        const article = this.props.articles.data[id-1]
        const value = this.props.readArticle.value

        //console.log(this.props.articles.id)

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
    getPosition
}

export default connect(mapStateToProps,mapDispatchToProps)(ReadArticle)