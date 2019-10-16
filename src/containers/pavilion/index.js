import React from 'react';
import './index.scss';
import MasonryLayout from '../../components/masonryLayout';
import TextOnImage from '../../components/textOnImage';
class Pavilion extends React.Component {
    render() {
      let data = this.props.data
      return (
        <section className={`App-pavilion ${ this.props.className }`}>
          <MasonryLayout className="by-pavilion-masonry">
            {data.list.map((item, index) => 
              <TextOnImage key={index} text={item.title} image={item.image}/>
            )}
          </MasonryLayout>
          <div className="by-pavilion-info">
            <h1 className="by-title-text" dangerouslySetInnerHTML={{__html:data.title}} ></h1> 
            <div className="by-description-text" dangerouslySetInnerHTML={{__html:data.desc}} ></div>
          </div>
        </section>
      )
        
  }
}

export default Pavilion;