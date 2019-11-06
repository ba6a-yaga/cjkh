import React from 'react';
import './index.css';
import Preloader from '../preloader';

class Button extends React.Component {

    clickAnimation = () => {
        
    }

    handler = () => {
        this.clickAnimation();
        if (this.props.onClick !== undefined) this.props.onClick();
    }

    render () {
        let iconFloat = this.props.iconFloat
        if (iconFloat === undefined) {
            iconFloat = "left"
        }

        return(
            <button className={`by-btn ${this.props.bordered ? "by-btn-bordered":''} ${this.props.className ? this.props.className : '' }`}
                    onClick={this.handler}>
                {iconFloat === "left"? this.props.children : ''}
                {this.props.text && !this.props.preloader && <p>{this.props.text}</p>}
                {this.props.preloader && <Preloader visible={this.props.preloader}></Preloader>}
                {iconFloat === "right"? this.props.children : ''}
            </button>
        )
    }
}

export default Button;