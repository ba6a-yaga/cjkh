import React from "react";
import './index.scss'
// import '../../assets/webanimations.min.js'

class BurgerMenu extends React.Component {

    state = {
        width: 45,
        height: 32,
        fill: "#000",
        isOpened: false
    }

    openMenu = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }
    hideMenu = () => {
        this.setState({
            isOpened: false
        })
    }

    render() {
        return(
            <aside className={`burger-menu-wrapper-btn  ${this.props.desktopHidden ? 'desktop-hidden' : 'desktop-visible'}`}>
                <div className={`fullscreen ${this.state.isOpened ? 'visible': ''}`}>
                    <div className="fullscreen-container">
                        <button className={`burger-menu-btn inner-burger-menu-btn  ${this.state.isOpened ? 'opened': ''}`} onClick={this.openMenu} >
                            <aside className="burger-menu-icon">
                                <span id="burger-rect1" className="burger-rect1 rect"></span>
                                <span id="burger-rect2" className="burger-rect2 rect"></span>
                                <span id="burger-rect3" className="burger-rect3 rect"></span>
                            </aside>
                        </button>
                        <div className="burger-menu-content"> 
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <button className={`burger-menu-btn ${this.state.isOpened ? 'opened': ''}`} onClick={this.openMenu} >
                    <aside className="burger-menu-icon">
                        <span id="burger-rect1" className="burger-rect1 rect"></span>
                        <span id="burger-rect2" className="burger-rect2 rect"></span>
                        <span id="burger-rect3" className="burger-rect3 rect"></span>
                    </aside>
                </button>
            </aside>
        )
    }
}

export default BurgerMenu;

