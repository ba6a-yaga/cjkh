import React from "react";
const Email = props => (
  <a className="by-email" href={`mailto:${props.value}`}>{props.value}</a>
);

export default Email;