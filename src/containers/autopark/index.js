import React from 'react';
import './index.scss';
import TextBlock from '../../components/textBlock';
import Button from '../../components/button';
import Consult from '../../containers/consult';
import ExpandableText from '../../components/expandableText';
class Autopark extends React.Component {
    videoPlayerRef = React.createRef();
    collapsedTextRef = React.createRef();
    state = {
      videoPlaying:false,
      textCollapsed:true
    }
    
    getButtonPlayIcon() {
      return this.state.videoPlaying ? <span className="icon-pause"></span> : <span className="icon-play"></span>
    }
    expand = () => {
      if (this.state.textCollapsed) {
        this.setState({
          textCollapsed:false
        })
        this.collapsedTextRef.current.style.maxHeight = `${this.collapsedTextRef.current.scrollHeight}px`; // element.scrollHeight;
      } else {
        this.setState({
          textCollapsed:true
        })
        this.collapsedTextRef.current.style.maxHeight = ""; // element.scrollHeight;
      }
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
                <source src={`${data.video.src}#t=0.01`} type='video/mp4' />
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
                  <ExpandableText text={data.desc} linesCount={8}></ExpandableText>
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