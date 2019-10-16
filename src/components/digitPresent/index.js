import React from "react";
import './index.css'

const DigitPresent = props => (
    <aside className="by-wrapper-digits">
        <p className="by-digits">{props.digits}
            <span className="by-unit">{props.unit}</span>
        </p>
        <p className="by-text">{props.text}</p>
    </aside>
);

export default DigitPresent;

