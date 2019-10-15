import React from "react";
import './index.scss'

const Wrapper = props => (
  <div className={`by-wrapper ${props.className ? props.className : ''}`}>{props.children}
  </div>
);

export default Wrapper;
