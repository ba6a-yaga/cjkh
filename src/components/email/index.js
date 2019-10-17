import React from "react";
const Email = props => (
  <a className="by-phone" href={`mailto:${props.value}`}>{props.value}</a>
);

export default Email;