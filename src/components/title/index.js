import React from 'react';
import './index.css';

class Title extends React.Component {

    render() {
        return(
            <aside className="by-main-title">
                <p className="by-main-title-desc">{this.props.desc}</p>
                <h1 className="by-main-title-text">{this.props.text}</h1>
            </aside>
        )
    }
}

export default Title;