import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import {changeFilteredData, getArticle} from "../../../../store/actions"


class RenderAllArticle extends React.Component{

    render() {
        const howPage = this.props.articles.howPage

        const getDataByHowPage = (data,howPage) => {
                const id = howPage * 6
                return data.slice(id-6,id)
        }

        const data = getDataByHowPage( this.props.articles.data, howPage )
        const filteredData = getDataByHowPage( this.props.articles.filteredData,howPage)


        if( this.props.articles.text ){

            if(filteredData.length === 0){
                return <p className='message'>Articles is Not defined</p>
            }

            return (
                <div className='articles'>
                    {
                        filteredData.map(i => {
                            return (
                                <div className="article" key={i.id}>
                                    <h2>{i.title}</h2>

                                    <div className='read-btn-wrapper'>
                                        <Link onClick={() => this.props.getArticle(i.id)} to='/article' className='read-btn'>
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

        return (
            <div className='articles'>
                {
                    data.map(i => {
                        return (
                            <div className="article" key={i.id}>
                                <h2>{i.title}</h2>

                                <div className='read-btn-wrapper'>
                                    <Link onClick={() => this.props.getArticle(i.id)} to='/article' className='read-btn'>
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


const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = {
    getArticle,
    changeFilteredData
}


export default connect(mapStateToProps,mapDispatchToProps)(RenderAllArticle)