import React from "react";
import "./index.css";

const IconArrow = props => (
  <svg className={props.iconInvert ? 'by-icon-arrow-left' : ''} width={props.width} height={props.height} {...props}>
    <path d="M8 .5l14 7-14 7v-6h-9v-2h9v-6z" fill={props.color} fillRule="nonzero" />
  </svg>
);

export default IconArrow;