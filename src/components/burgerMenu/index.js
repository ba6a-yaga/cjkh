import React from "react";
import './index.css'
// import '../../assets/webanimations.min.js'

class BurgerMenu extends React.Component {

    state = {
        width: 45,
        height: 32,
        fill: "#000",
        isOpened: false
    }

    runAnimation = () => {

        let str = window.navigator.userAgent
        let re = /Safari|Firefox|Chrome/
        let found = str.match(re)
        
        let rect1 = document.getElementById('burger-rect1')
        let rect2 = document.getElementById('burger-rect2')
        let rect3 = document.getElementById('burger-rect3')
        let fullscreen = document.getElementsByClassName('fullscreen')

        if (found !== null && found.length > 0 && found[0] !== 'Safari') {
            if (rect1 !== undefined && rect2 !== undefined && rect3 !== undefined) {
                if (this.state.isOpened) {
                    rect1.animate([
                        {transform: 'translateY(0%)'},
                        {transform: 'translateY(140%)'},
                        {transform: 'translateY(140%) rotate(45deg)'}
                    ],{ 
                        fill: 'forwards',
                        duration: 500,
                        easing: 'linear',
                        direction: 'reverse',
                    })
    
                    rect3.animate([
                        {transform: 'translateY(0%)'},
                        {transform: 'translateY(-140%)'},
                        {transform: 'translateY(-140%) rotate(-45deg)'}
                    ],{ 
                        fill: 'forwards',
                        duration: 500,
                        easing: 'linear',
                        direction: 'reverse',
                    })
    
                    rect2.animate([
                        { opacity: 100 },
                        { opacity: 100 },
                        { opacity: 0 },
                        { opacity: 0 },
                    ],{ 
                        fill: 'forwards',
                        duration: 500,
                        easing: 'linear',
                        direction: 'reverse',
                    })
                        
                    if (fullscreen.length > 0) {
                        setTimeout(()=>{
                            fullscreen[0].animate(
                                [
                                    {left: '-100%'},
                                    {left: '0%'},
                                ],
                                {
                                    duration: 250,
                                    easing: 'ease-in',
                                    fill: 'forwards',
                                    direction: 'reverse',
                                }
                            )
                            setTimeout(()=>{
                                fullscreen[0].classList.remove('visible')
                            }, 500)
                        }, 500)
                        
                    }
                    this.setState({isOpened: false})
                } else {
                    rect1.animate([
                        {transform: 'translateY(0%)'},
                        {transform: 'translateY(140%)'},
                        {transform: 'translateY(140%) rotate(45deg)'}
                    ],{ 
                        fill: 'forwards',
                        duration: 500,
                        easing: 'ease-in',
                        direction: 'normal',
                    })
    
                    rect3.animate([
                        {
                            transform: 'translateY(0%)'
                        },
                        {
                            transform: 'translateY(-140%)'
                        },
                        {
                            transform: 'translateY(-140%) rotate(-45deg)'
                        }
                        ],{ 
                            fill: 'forwards',
                            duration: 500,
                            easing: 'ease-in',
                            direction: 'normal',
                        }
                    )
    
                    rect2.animate([
                            { opacity: 100 },
                            { opacity: 100 },
                            { opacity: 0 },
                            { opacity: 0 },
                        ],{ 
                            fill: 'forwards',
                            duration: 500,
                            easing: 'ease-in',
                            direction: 'normal',
                        }
                    )
                    
                    if (fullscreen.length > 0) {
                        setTimeout(()=>{
                            fullscreen[0].classList.add('visible')
    
                            fullscreen[0].animate(
                                [
                                    {left: '-100%'},
                                    {left: '0%'},
                                ],
                                {
                                    duration: 250,
                                    easing: 'linear',
                                    fill: 'forwards',
                                }
                            )
    
                            // fullscreen[0].classList.add('fixed')
                        }, 500)
                        
                    }
                    this.setState({isOpened: true})
                }
            }
        } else {
            if (this.state.isOpened) {
                rect1.style.setProperty("animation", "rect1-hide .5s linear forwards ")
                rect2.style.setProperty("animation", "rect2-hide .5s linear forwards")
                rect3.style.setProperty("animation", "rect3-hide .5s linear forwards ")
                
                setTimeout(()=>{
                    fullscreen[0].style.setProperty("animation","fullscreen-hide .25s linear forwards")
                    setTimeout(()=>{
                        fullscreen[0].classList.remove('visible')
                    }, 500)
                }, 500)

                this.setState({
                    isOpened: false
                })
                
            } else {
                rect1.style.setProperty("animation", "rect1 .5s linear forwards ")
                rect2.style.setProperty("animation", "rect2 .5s linear forwards")
                rect3.style.setProperty("animation", "rect3 .5s linear forwards ")

                setTimeout(()=>{
                    fullscreen[0].classList.add('visible')
                    fullscreen[0].style.setProperty("animation","fullscreen .25s linear forwards")
                }, 500)

                this.setState({
                    isOpened: true
                })
            }
            
        }
        
    }

    openMenu = () => {
        this.runAnimation()
    }

    render() {
        return(
            <aside className="burger-menu-wrapper-btn">
                <div className="fullscreen">
                    {this.props.children}
                </div>
                <button className="burger-menu-btn" onClick={this.openMenu} >
                    <aside className="burger-menu-icon">
                        <span id="burger-rect1" className="rect"></span>
                        <span id="burger-rect2" className="rect"></span>
                        <span id="burger-rect3" className="rect"></span>
                    </aside>
                </button>
            </aside>
        )
    }
}

export default BurgerMenu;

