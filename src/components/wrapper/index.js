import React from "react";
import './index.scss'

const Wrapper = props => (
  <div className={`by-wrapper-container ${props.className ? props.className : ''}`}>
    <div className="by-wrapper">
      {props.children}
    </div>
  </div>
);

export default Wrapper;
