import React from "react";
import "./index.scss";

const Arrow = props => (
  <span className={`by-arrow icon-arrow-left ${props.iconInvert ? 'by-icon-arrow-left' : null}`}></span>
);

export default Arrow;