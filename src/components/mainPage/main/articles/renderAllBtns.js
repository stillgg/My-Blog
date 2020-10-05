import React, {Component} from 'react'
import {connect} from "react-redux"
import {changeArticlePage} from "../../../../store/actions";

class RenderAllBtns extends Component{
    render() {
        const howManyPages = this.props.articles.howManyPages

        function getBtns(value) { /*getBtnsHowManyPages*/
            const arr = []
            for(let i=1; i<=value; i++ ){
                arr.push(i)
            }
            return arr
        }

        const btns = getBtns(howManyPages)

        return(
            <div className="prevNextButtons">
                {
                    btns.map( (item,id) =>{
                        let className = "btn"

                        if(item.length === 1){
                            return null
                        }


                        if(id === this.props.articles.howPage-1){
                            className = "btn active-btn"
                        }

                        return <div
                            className={className}
                            key={id}
                            onClick={(e)=>{
                                e.target.classList.add('active-btn')

                                for(let i of e.target.parentNode.children){

                                    if(e.target === i){
                                        continue
                                    }

                                    i.classList.remove('active-btn')
                                }

                                return this.props.changeArticlePage(id+1)

                            }}>{item}</div>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = {
    changeArticlePage
}

export default connect(mapStateToProps,mapDispatchToProps)(RenderAllBtns)