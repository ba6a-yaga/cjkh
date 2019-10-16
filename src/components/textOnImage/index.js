import React from 'react';
import './index.scss';

const TextOnImage = props => (
  <section className={`by-text-on-image ${ props.className ? props.className :'' }`}>
    <img src={props.image.src} alt={props.image.alt} />
    <p className="by-text" dangerouslySetInnerHTML={{__html:props.text}}></p>
  </section>
);

export default TextOnImage;