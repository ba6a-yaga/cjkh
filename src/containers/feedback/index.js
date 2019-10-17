import React from 'react';
import './index.scss';
import TitleBlock from '../../components/titleBlock';
import Slider from '../../components/slider';
import InfoBlock from '../../components/infoBlock';
import Pagination from '../../components/pagination';
class Feedback extends React.Component {
  formatTitle = (title) => {
    if (this.props.colorize) {
      return title.replace(/\s[\W]*$/, x => `<span>${x}</span>`);
    } else {
      return title
    }
  }
  render() {
    let data = this.props.data
    return (
      <section className={`App-feedback ${ this.props.className }`}>

        <TitleBlock className="App-title-with-divider" text={data.title}>
          <Pagination  count={data.list.length} active={1} hideNumber={true} />
        </TitleBlock>
        <section className="by-slider-contrainer">
          <Slider elementsCount={data.list.length} current>
            {data.list.map((item, index) => 
              <InfoBlock 
                className={`App-info-block ${this.props.roundImage ? "by-round-image":''}` }
                image={item.image} 
                title={this.formatTitle(item.title)} 
                desc={item.desc} 
                more={item.place} 
                subtitle={item.position} 
                key={index} 
              ></InfoBlock>
            )}
          </Slider>
        </section>
      </section>
    )
  }
}

export default Feedback