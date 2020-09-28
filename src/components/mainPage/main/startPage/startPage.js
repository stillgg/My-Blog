import React from 'react'

import {connect} from 'react-redux'

const StartPage = () => {
    return (
        <div className='startPageContainer'>
            <div className="wrapper">
                <h1>Hello</h1>
                <p>In this blog you can see my articles,the news and what am I do.</p>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    console.log(state)
    return state
}

export default connect(mapStateToProps)(StartPage)