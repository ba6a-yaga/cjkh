import React from 'react';
import './index.scss';

const MasonryLayout = props => (
  <section className={`by-masonry-layout ${ props.className ? props.className :'' }`}>
    {props.children}
  </section>
);

export default MasonryLayout;