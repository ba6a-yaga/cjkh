import React from "react";
import './index.css'

const TitleBlock = props => (
    <div className={`by-title-block ${ props.className }`}>
        <h1 className="by-titleblock-text">{props.text}</h1>
        {props.children}
    </div>
);

export default TitleBlock;

