import React from "react";
import './index.scss'
import Button from "../button";

const TextBlock = props => (
  <div className={`by-text-block ${props.className ? props.className : ''}`}>
      {props.title ? <h1 className="by-title-text" dangerouslySetInnerHTML={{__html:props.title}} ></h1>: null}
      {props.desc ? 
        <div className="by-description-text" dangerouslySetInnerHTML={{__html:props.desc}} ></div> : 
        <div className="by-description-text">{props.children}</div>}
      {props.button ? <Button text={props.button} onClick={props.handler}/> : null}
  </div>
);

export default TextBlock;

