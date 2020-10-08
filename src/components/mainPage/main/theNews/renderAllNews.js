import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import {changeFilteredDataTheNews, getDataTheNews} from "../../../../store/actions/theNews/theNewsAction"


class RenderAllNews extends React.Component{
    render() {
        const howPage = this.props.theNews.howPage

        const getDataByHowPage = (data,howPage) => {
            const id = howPage * 6
            return data.slice(id-6,id)
        }

        const data = getDataByHowPage( this.props.theNews.data, howPage )
        const filteredData = getDataByHowPage( this.props.theNews.filteredData,howPage)
        const text = this.props.theNews.text

        if(text){
            if(filteredData.length === 0){
                return <p className='message'>the News is Not defined</p>
            }

            return (
                <div className='articles'>
                    {
                        filteredData.map(i => {
                            return (
                                <div className="article" key={i.id}>
                                    <h2>{i.title}</h2>

                                    <div className='read-btn-wrapper'>
                                        <Link onClick={() => this.props.getDataTheNews(i.id)} to='/news' className='read-btn'>
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
                                    <Link onClick={() => this.props.getDataTheNews(i.id)} to='/news' className='read-btn'>
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
    getDataTheNews,
    changeFilteredDataTheNews
}


export default connect(mapStateToProps,mapDispatchToProps)(RenderAllNews)