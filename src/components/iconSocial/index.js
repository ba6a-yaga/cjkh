import React from 'react';
import './index.scss';

class IconSocial extends React.Component {

    getIcon = () => {
        return <span className={`by-wrapper-icon-symbol icon-${this.props.social}`}></span>;
    }

    render() {
        return(
            <a className="by-wrapper-icon-social" href={this.props.link} target="_blank" rel="noopener noreferrer">
                {this.getIcon()}
            </a>
        )
    }
}

export default IconSocial;