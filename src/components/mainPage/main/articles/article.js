import React from "react"
import {Link} from "react-router-dom";
import {connect} from "react-redux";



import {getArticle} from "../../../../store/actions"




class Article extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text : ''
        }
        this.changeText = this.changeText.bind(this)
    }

    changeText(id){
        this.setState(
            {text : this.props.articles.data[id-1].text}
        )
    }

    render() {
        const articles = this.props.articles.data

        return (
            <div className='articles'>
                {articles.map(i => {
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
                })}
            </div>
        )

    }
}







const mapStateToProps = state =>{
    console.log(state)
    return state
}

const mapDispatchToProps = {
    getArticle
}

export default connect(mapStateToProps,mapDispatchToProps)(Article)