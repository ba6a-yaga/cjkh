import React from "react";
import './index.scss'

const LabeledValue = props => (
  <div className={`by-labeled-value ${ props.className ? props.className : '' }`}>
    <span className={`by-labeled-value-title`}>{props.title}</span>
    <span className={`by-labeled-value-text`}>{props.value}</span>
  </div>
);

export default LabeledValue;

