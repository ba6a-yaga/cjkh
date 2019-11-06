import React from "react";
const Phone = props => (
  <a className="by-phone" href={`tel:${props.value}`}>{props.value}</a>
);

export default Phone;