import React from 'react';
import './index.scss';
import TextBlock from '../../components/textBlock';
import Button from '../../components/button';
import Pagination from '../../components/pagination';
import LabeledValue from '../../components/labeledValue';
import Arrow from '../../components/arrow';
import Consult from '../../components/consult';
class Autopark extends React.Component {
    videoPlayerRef = React.createRef();
    state ={
      videoPlaying:false
    }
    getButtonPlayIcon() {
      return this.state.videoPlaying ? <span className="icon-pause"></span> : <span className="icon-play"></span>
    }
    expand = () => {
      
    }
    onVideoEnded = () => {
      this.setState({videoPlaying:false})
    }
    componentDidMount = () =>  {
      this.videoPlayerRef.current.addEventListener("ended", this.onVideoEnded)
    }
    playVideo = () => {
      if (this.state.videoPlaying) {
        this.setState({videoPlaying:false})
        this.videoPlayerRef.current.pause()
      } else {
        this.videoPlayerRef.current.play()
        this.setState({videoPlaying:true})
      }
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
                ref={this.videoPlayerRef}
                className="by-autopark-video"
                playsInline
              >
                <source src={data.video.src} />
              </video>
              <div className="by-autopark-video-info">
                <Button className="by-autopark-play-button" onClick={this.playVideo.bind(this)}>{this.getButtonPlayIcon()}</Button>
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