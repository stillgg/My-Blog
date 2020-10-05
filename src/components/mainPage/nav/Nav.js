import React from 'react'
import {Link} from 'react-router-dom'

export function Nav() {
    return(
        <nav className='Nav'>
            <div className='MyBlog'>
                <Link to='/startPage' className='MyBlogLink'>
                    <h1>My Blog</h1>
                </Link>
            </div>

            <div className='Articles'>
                <Link to='/articles' className="glitch-btn" >
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
                <Link to='/theNews'  className="glitch-btn" >
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
                <Link to='/aboutMe' activeClassName='activeNav' className="glitch-btn" >
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