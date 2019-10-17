import React from 'react';
import './index.css';

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
                {this.props.text !== undefined? <p>{this.props.text}</p> : null}
                {iconFloat === "right"? this.props.children : ''}
            </button>
        )
    }
}

export default Button;