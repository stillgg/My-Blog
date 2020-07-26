import React from 'react'
import './mainPage.scss'
export function MainPage() {
    return(
        <div className='MainPage'>
            <nav className='Nav'>
                <div className='MyBlog'>
                    <h1>My Blog</h1>
                </div>

                <div className='Articles'>
                    <a className="glitch-btn" href="#" target="_blank">
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
                    </a>
                </div>

                <div className='TheNews'>
                    <a className="glitch-btn" href="#" target="_blank">
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
                    </a>
                </div>

                <div className='AboutMe'>
                    <a className="glitch-btn" href="#" target="_blank">
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
                    </a>
                </div>
            </nav>
            <main className='Main'>

            </main>
        </div>
    )
}