import React from "react";
import './index.css'

const TitleBlock = props => (
    <h1 className={`by-titleblock-text ${ props.className }`}>{props.text}</h1>
);

export default TitleBlock;

