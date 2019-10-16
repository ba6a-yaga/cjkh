import React from 'react';
import './index.scss';
import TextBlock from '../../components/textBlock';
import Button from '../../components/button';
import Pagination from '../../components/pagination';
import LabeledValue from '../../components/labeledValue';
import Arrow from '../../components/arrow';
import Consult from '../../components/consult';
class Autopark extends React.Component {
    expand = () => {
      
    }
    render() {
        let data = this.props.data
        let consult = this.props.consult
        return(
          <div className={`by-autopark ${ this.props.className }`}>
            <div className="by-autopark-container">
              <div className="by-autopark-desc">
                  <TextBlock title={data.title}></TextBlock>
              </div>
            </div>
            <div className="by-autopark-video-container">
              <video
                className="by-autopark-video"
                autoPlay
                playsInline
                loop
              >
                <source src={data.video.src} />
              </video>
              <div className="by-autopark-video-info">
                <Button className="by-autopark-play-button"><span className="icon-play"></span></Button>
                <strong className="by-autopark-video-title">{data.video.title}</strong>
                <span className="by-autopark-video-desc">{data.video.desc}</span>
              </div>
            </div>


            <div className="by-autopark-info-container">
              <div className="by-autopark-info">
                <div className="by-autopark-description">
                  <div className="by-description-text" dangerouslySetInnerHTML={{__html:data.desc}} >
                  </div>
                  <Button text="РАЗВЕРНУТЬ" bordered={true} onClick={this.expand}/>
                </div>
                
                <div className="App-consult">
                  <Consult title={consult.title} button={consult.button.title} ></Consult>
                </div>
              </div>

            </div>


          </div>
        )
    }
}

export default Autopark;