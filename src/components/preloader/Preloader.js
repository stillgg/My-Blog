import React from 'react'
import './Preloader.css'
import {MainPage} from '../mainPage/MainPage'

export class Preloader extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            contentReady : false
        }
        this.getContent = this.getContent.bind(this)
    }

    getContent(){
        setTimeout(()=>{
            this.setState({
                contentReady : true
            })
        },2900)
    }

    render() {

        if(this.state.contentReady){
            return <MainPage/>
        }

        this.getContent()

        return (
            <div className="App">
                <div className='Logo'>
                    <svg id="My-blog"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink"
                         x="0px"
                         y="0px"
                         viewBox="0 0 574 547"
                        // style="enable-background:new 0 0 574 547;"
                         xmlSpace="preserve">
                        <style type="text/css">
                            {`.st0{opacity:0.85;fill:#5D5D5D;}`}
                            {`.st1{opacity:0.85;fill:#868686;}`}
                            {`.st2{fill:#535353;}`}
                            {`.st3{fill:none;}`}
                            {`.st4{fill:#FFFFFF;}`}
                            {`.st5{font-family:'Furore';}`}
                            {`.st6{font-size:61px;}`}
                            {`.st7{font-family:'MyriadPro-Regular';}`}

                            {`@media{
                        .st0{
                            animation: spin infinite 5s linear;
                        }`}

                            {`@media{
                        .st1{
                            animation: spin infinite 3s linear reverse;
                            // alternate-reverse
                        }`}

                            {`@media{
                        .st2{
                            animation: spin infinite 10s linear;
                        }`}

                            {`@keyframes spin{from {
                               transform:rotate(0deg);
                               transform-origin: 50% 50%;
                           }
                           to {
                              transform:rotate(360deg);  
                              transform-origin: 50% 50%;
                           }
                         }`
                            }


                            {`@media{
                                svg{
                                    animation: scale infinite 1.5s linear alternate-reverse;
                                }`
                            }
                            {`@keyframes scale{from {
                                        height: 45vmin;
                                   }
                                   to {
                                        height: 0vmin;
                                   }
                                 }`
                            }
                        </style>
                        <g id="_x33_">
                            <path className="st0" d="M393.2,468.5l-216.9,7.9c-17.1,0.6-33.8-2.8-48.7-10.2c-31.2-15.6-73.1-51.1-56.1-127
                            c1.9-8.4,4.8-16.5,8.6-24.4C129.5,211.8,190.7,119.6,211.7,89c6.5-9.4,14.2-17.9,23.1-25.1C266.8,38,342.2-5.5,411.2,86.3
                            c71,104.1,105.2,181.6,118.1,214.3c4.9,12.5,7.3,26,7.1,39.7c-1.1,58.2-20.8,98.6-88.4,119.6C438.7,462.8,402.7,468.2,393.2,468.5z
                            "/>
                        </g>

                        <g id="_x32_">
                            <path className="st1" d="M267.7,474.9L83,360.8c-14.6-9-26.5-21.2-34.8-35.6c-17.3-30.3-32.3-83.2,24-136.7
                            c6.2-5.9,13.2-11.1,20.7-15.5C191.4,114.8,293.6,72.3,328,58.5c10.6-4.2,21.8-7,33.2-8c40.9-3.7,127.8,2,134,116.7
                            c1.1,126-13.6,209.4-21.1,243.8c-2.9,13.1-8.3,25.7-16.2,37c-33.3,47.7-72.2,70.3-139.9,50.2C308.7,495.4,275.8,479.9,267.7,474.9z
                            "/>
                        </g>

                        <g id="_x31_">
                            <path className="st2" d="M231,461L94.2,309.4c-10.8-12-18.6-26.3-22.7-41.9c-8.5-32.7-10-86.2,51.2-123.4c6.8-4.1,14-7.3,21.6-9.7
                            c99.2-31.5,198.2-47.4,231.5-52.2c10.3-1.5,20.7-1.4,30.9,0.3c36.7,6.2,111.6,32.3,91.8,142.1c-26.8,119.2-58.1,194.6-72.3,225.3
                            c-5.4,11.7-13,22.3-22.4,31C364.1,518,325,530.1,270,495C262.4,490.2,237,467.7,231,461z"/>
                        </g>

                        <g id="text">
                            <rect x="164.24" y="240.12" className="st3" width="222.76" height="58.88"
                            />
                            <text
                                // transform='rotate(45 -150 300)'
                                // transform="matrix(1 0 0 1 164.2354 285.6841)"
                                // transform='rotate(45 351.5 193.68)'
                            >
                                <tspan x="150" y="300" className="st4 st5 st6">My Blog</tspan>
                                <tspan x="215.82" y="0" className="st7 st6"></tspan>
                            </text>
                        </g>
                    </svg>

                </div>

            </div>
        )
    }
}

