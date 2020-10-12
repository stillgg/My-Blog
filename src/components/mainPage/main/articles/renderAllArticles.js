import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import {
    changeFilteredDataArticle, getDataArticle, contentReadyArticle
} from "../../../../store/actions/article/articleAction"

import {NotReadyData} from "./notReadyData"


class RenderAllArticle extends React.Component{

    componentDidMount() {
        fetch("http://localhost:3000/articles")
            .then(response => {
                 this.contentReady = setInterval(() => {
                     this.props.contentReadyArticle()
                }, 500)
            })
    }

    componentWillUnmount() {
        clearInterval(this.contentReady)
    }

    render() {
        const howPage = this.props.articles.howPage

        const text = this.props.articles.text

        const contentReady = this.props.articles.contentReady

        const getDataByHowPage = (data,howPage) => {
                const id = howPage * 6
                return data.slice(id-6,id)
        }

        const data = getDataByHowPage( this.props.articles.data, howPage )
        const filteredData = getDataByHowPage( this.props.articles.filteredData,howPage)

        if(text){

            if(filteredData.length === 0){
                return <p className='message'>Articles is Not defined</p>
            }

            switch (contentReady){
                case true:
                    return (
                        <div className='articles'>
                            {
                                filteredData.map(i => {
                                    return (
                                        <div className="article" key={i.id}>
                                            <h2>{i.title}</h2>

                                            <div className="img" style={{
                                                background: `url(image/articles/${i.id}.jpg)`,
                                                backgroundSize: "cover"
                                            }}></div>

                                            <div className='read-btn-wrapper'>
                                                <Link onClick={() => this.props.getDataArticle(i.id)} to='/article' className='read-btn'>
                                                    read
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )

                default:
                    return (
                        <div className='articles'>
                            {
                                filteredData.map(i => {
                                    return (
                                        <div className="article" key={i.id}>
                                            <h2>{i.title}</h2>

                                            <NotReadyData/>

                                            <div className='read-btn-wrapper'>
                                                <Link onClick={() => this.props.getDataArticle(i.id)} to='/article' className='read-btn'>
                                                    read
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
            }

        }

        switch (contentReady){

            case true:
                return (
                    <div className='articles'>
                        {
                            data.map(i => {
                                return (
                                    <div className="article" key={i.id}>
                                        <h2>{i.title}</h2>


                                        <div className="img" style={{
                                            background: `url(image/articles/${i.id}.jpg)`,
                                            backgroundSize: "cover"
                                        }}></div>

                                        <div className="read-btn-wrapper">
                                            <Link onClick={() => this.props.getDataArticle(i.id)} to='/article' className='read-btn'>
                                                read
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )

            default:
                return (
                    <div className='articles'>
                        {
                            data.map(i => {
                                return (
                                    <div className="article" key={i.id}>
                                        <h2>{i.title}</h2>

                                        <NotReadyData/>

                                        <div className="read-btn-wrapper">
                                            <Link onClick={() => this.props.getDataArticle(i.id)} to='/article' className='read-btn'>
                                                read
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
        }
    }
}

const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = {
    getDataArticle,
    changeFilteredDataArticle,
    contentReadyArticle
}


export default connect(mapStateToProps,mapDispatchToProps)(RenderAllArticle)