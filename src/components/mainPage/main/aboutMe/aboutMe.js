import React from "react"



export function AboutMe() {
    return(
        <div className="aboutMe">
            <h1>About Me</h1>
            <p className="portfolio">Hey what's up my name Egor. I am frontend developer.</p>

            <div className="contactsWrapper">
                <div className="contacts">

                    <div className="photo">
                    </div>

                    <div className="socialNetworks">

                        <div className="textImg">
                            <img className="iconGmail" src="./iconGmail.svg" alt="gmail"/>
                            <a href="https://mail.google.com/mail" target="_blank" rel="noopener noreferrer">still2095@gmail.com</a>
                        </div>

                        <div className="textImg">
                            <img className="iconGithub" src="./iconGithub.svg" alt="github"/>
                            <a href="https://github.com/stillgg" target="_blank" rel="noopener noreferrer">stillgg</a>
                        </div>
                    </div>

                    <div className="text" onClick={ (e)=>{
                        const children = e.target.parentNode.children

                        if( e.target.className.includes('Active') ){
                            for(let i of children){
                                i.className = i.className.substring(0, i.className.length - 6)
                            }
                            return
                        }

                        for(let i of children){
                            // if(i.className === 'socialNetworks'){
                            //     continue
                            // }
                            i.className+="Active"
                        }

                    } }>
                        contacts
                    </div>
                </div>
            </div>
        </div>
    )
}