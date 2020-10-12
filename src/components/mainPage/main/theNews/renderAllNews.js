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

                                        // <div className="news" key={i.id}>
                                        //     <h2>{i.title}</h2>
                                        //
                                        //     <div className="img" style={{
                                        //         background: `url(image/theNews/${i.id}.jpg)`,
                                        //         backgroundSize: "cover"
                                        //     }}></div>
                                        //
                                        //     <div className='read-btn-wrapper'>
                                        //         <Link onClick={() => this.props.getDataTheNews(i.id)} to='/news' className='read-btn'>
                                        //             read
                                        //         </Link>
                                        //     </div>
                                        // </div>
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
                                            onClickMethod={ this.props.getDataTheNews }
                                        />

                                        // <div className="article" key={i.id}>
                                        //     <h2>{i.title}</h2>
                                        //
                                        //     <NotReadyData/>
                                        //
                                        //     <div className='read-btn-wrapper'>
                                        //         <Link onClick={() => this.props.getDataTheNews(i.id)} to='/news' className='read-btn'>
                                        //             read
                                        //         </Link>
                                        //     </div>
                                        // </div>
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

                                    // <div className="article" key={i.id}>
                                    //     <h2>{i.title}</h2>
                                    //     <div className="img" style={{
                                    //         background: `url(image/theNews/${i.id}.jpg)`,
                                    //         backgroundSize: "cover"
                                    //     }}>
                                    //     </div>
                                    //     <div className='read-btn-wrapper'>
                                    //         <Link onClick={() => this.props.getDataTheNews(i.id)} to='/news' className='read-btn'>
                                    //             read
                                    //         </Link>
                                    //     </div>
                                    // </div>
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
                                    <Card
                                        className="theNewsCard"
                                        key={i.id}
                                        id={i.id}
                                        routTo="/news"
                                        title={i.title}
                                        // onClick={() => this.props.getDataTheNews(i.id)}
                                    />
                                    // <div className="article" key={i.id}>
                                    //     <h2>{i.title}</h2>
                                    //     <NotReadyData/>
                                    //     <div className='read-btn-wrapper'>
                                    //         <Link onClick={() => this.props.getDataTheNews(i.id)} to='/news' className='read-btn'>
                                    //             read
                                    //         </Link>
                                    //     </div>
                                    // </div>
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