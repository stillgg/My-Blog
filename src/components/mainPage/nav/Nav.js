import React from 'react'
import {Link} from 'react-router-dom'

export function Nav() {

    function rec(node){
        if(node.parentNode.tagName === 'NAV'){

            node.parentNode.classList.toggle('NavActive')

            // console.log(node.parentNode.querySelector('div'))

            return
        }

        return rec(node.parentNode)
    }

    return(
        <nav className='Nav'>
            <div className='hiddenNavBtn' onClick={
                (e)=> {
                    e.target.parentNode.classList.toggle('activeNav')
                    // if(classList.contains('activeNav') ){
                    //     classList.add('Nav')
                    //     classList.remove('activeNav')
                    // }else{
                    //     classList.add('activeNav')
                    //     classList.remove('Nav')
                    // }


                }

            }>
            </div>

            <div className='MyBlog'>
                <Link to='/startPage' className='MyBlogLink'>
                    <h1>My Blog</h1>
                </Link>
            </div>

            <div className='Articles'>
                <Link to='/articles' onClick={
                    (e)=>{
                        rec(e.target)
                    }
                }
                      className="glitch-btn" >
                    <div className="text">Articles</div>

                    <div className="mask mask1">
                        <span>Articles</span>
                    </div>

                    <div className="mask mask2">
                        <span>Articles</span>
                    </div>

                    <div className="mask mask3">
                        <span>Articles</span>
                    </div>
                </Link>
            </div>

            <div className='TheNews'>
                <Link to='/theNews' className="glitch-btn" onClick={
                    (e)=>{
                        rec(e.target)
                    }}
                >
                    <div className="text">The News</div>

                    <div className="mask mask1">
                        <span>The News</span>

                    </div>
                    <div className="mask mask2">
                        <span>The News</span>
                    </div>
                    <div className="mask mask3">
                        <span>The News</span>
                    </div>
                </Link>
            </div>

            <div className='AboutMe'>
                <Link to='/aboutMe' className="glitch-btn" onClick={
                    (e)=>{
                        rec(e.target)
                    }} >

                    <div className="text">About Me</div>

                    <div className="mask mask1">
                        <span>About Me</span>
                    </div>

                    <div className="mask mask2">
                        <span>About Me</span>
                    </div>

                    <div className="mask mask3">
                        <span>About Me</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}