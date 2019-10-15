import React from "react";
import './index.scss'
import Button from "../button";

const InfoBlock = props => (
  <div className="by-info-block">
      {props.image ? <img src={props.image.src} alt={props.image.alt} />: null}
      {props.title ? <h1 className="by-title-text" dangerouslySetInnerHTML={{__html:props.title}} ></h1>: null}
      {props.subtitle ? <div className="by-subtitle-text" dangerouslySetInnerHTML={{__html:props.subtitle}} ></div>: null}
      {props.more ? <div className="by-more-text" dangerouslySetInnerHTML={{__html:props.more}} ></div>: null}
      {props.desc ? <div className="by-description-text" dangerouslySetInnerHTML={{__html:props.desc}} ></div>: null}
      {props.button ? <Button text={props.button} onClick={props.handler}/> : null}
  </div>
);

export default InfoBlock;