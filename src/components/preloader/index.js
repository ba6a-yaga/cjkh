import React from "react";
import './index.scss'

const Preloader = props => (
  <div className={`by-mini-preloader ${props.className ? props.className : ''} ${props.visible ? 'visible' : 'hidden'} `}></div>
);

export default Preloader;
