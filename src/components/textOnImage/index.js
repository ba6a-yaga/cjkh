import React from 'react';
import './index.scss';
import TextBlock from '../textBlock';

const TextOnImage = props => (
  <section className={`by-text-on-image ${ props.className ? props.className :'' }`}>
    <img src={props.image.src} alt={props.image.alt} />
    <TextBlock  className="by-text" title={props.title} desc={props.text}></TextBlock>
  </section>
);

export default TextOnImage;