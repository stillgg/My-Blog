import React from "react"
import {connect} from "react-redux"

import {
    changeFilteredDataTheNews,
    getDataTheNews,
    contentReadyTheNews
} from "../../../../store/actions/theNews/theNewsAction"

import Card from "../card"


class RenderAllNews extends React.Component{

    componentDidMount() {
        fetch("http://localhost:3000/theNews")
            .then( response => {
                this.contentReady = setInterval(() => this.props.contentReadyTheNews()
                ,500)
            } )
    }

    componentWillUnmount() {
        clearInterval(this.contentReady)
    }

    render() {
        const howPage = this.props.theNews.howPage
        const text = this.props.theNews.text
        const contentReady = this.props.theNews.contentReady

        const getDataByHowPage = (data,howPage) => {
            const id = howPage * 6
            return data.slice(id-6,id)
        }

        const data = getDataByHowPage( this.props.theNews.data, howPage )
        const filteredData = getDataByHowPage( this.props.theNews.filteredData,howPage)


        if(text){
            if(filteredData.length === 0){
                return <p className='message'>the News is Not defined</p>
            }

            switch (contentReady) {
                case true:
                    return (
                        <div className='blockNews'>
                            {
                                filteredData.map(i => {
                                    return (
                                        <Card
                                            className="theNewsCard"
                                            key={i.id}
                                            id={i.id}
                                            routTo="/news"
                                            title={i.title}
                                            urlImg={`url(image/theNews/${i.id}.jpg)`}
                                        />
                                    )
                                })
                            }
                        </div>
                    )

                default:
                    return (
                        <div className='blockNews'>
                            {
                                filteredData.map(i => {
                                    return (
                                        <Card
                                            className="theNewsCard"
                                            key={i.id}
                                            id={i.id}
                                            routTo="/news"
                                            title={i.title}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
            }
        }

        switch (contentReady) {
            case true:
                return (
                    <div className='blockNews'>
                        {
                            data.map(i => {
                                return (
                                    <Card
                                        className="theNewsCard"
                                        key={i.id}
                                        id={i.id}
                                        routTo="/news"
                                        title={i.title}
                                        urlImg={`url(image/theNews/${i.id}.jpg)`}
                                    />
                                )
                            })
                        }
                    </div>
                )
            default:
                return (
                    <div className='blockNews'>
                        {
                            data.map(i => {
                                return (
                                    <Card
                                        className="theNewsCard"
                                        key={i.id}
                                        id={i.id}
                                        routTo="/news"
                                        title={i.title}
                                    />
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
    getDataTheNews,
    changeFilteredDataTheNews,
    contentReadyTheNews
}


export default connect(mapStateToProps,mapDispatchToProps)(RenderAllNews)