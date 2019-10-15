import React from "react";
import './index.scss'
import Button from "../button";

const TextBlock = props => (
  <div className={`by-text-block ${props.className}`}>
      <h1 className="by-title-text">{props.title}</h1>
      <div className="by-description-text" dangerouslySetInnerHTML={{__html:props.desc}} ></div>
      <Button text={props.button} onClick={props.handler}/>
  </div>
);

export default TextBlock;

