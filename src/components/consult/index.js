import React from "react";
import './index.scss'
import Button from "../button";

const Consult = props => (
    <aside className="by-consult">
      <p className="by-digits" dangerouslySetInnerHTML={{__html:props.title}}></p>
      <Button text={props.button} onClick={props.handler}/>
    </aside>
);

export default Consult;