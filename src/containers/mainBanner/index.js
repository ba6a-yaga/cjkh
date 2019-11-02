import React from 'react';
import './index.scss';
import TextBlock from '../../components/textBlock';
import Button from '../../components/button';
import IconArrow from '../../components/iconArrow';
import Pagination from '../../components/pagination';
import LabeledValue from '../../components/labeledValue';
import Arrow from '../../components/arrow';
class MainBanner extends React.Component {
    state = {
        currentBanner : 0,
        nextBanner : 0,
        offset : 0,
        count : this.props.list.length,
        userAgent: window.navigator.userAgent,
        touchStartX: 0,
        touchEndX: 0,
        touchStartY: 0,
        touchEndY: 0,
    }

    componentDidMount() {
        let banner = document.querySelector('.by-main-banner')
        banner.addEventListener('touchstart', e => this.setState(
          {
            touchStartX: e.changedTouches[0].screenX, 
            touchStartY: e.changedTouches[0].screenY
          }))
        banner.addEventListener('touchend', e => {
            this.setState({
              touchEndX: e.changedTouches[0].screenX,
              touchEndY: e.changedTouches[0].screenY 
             })
            this.detectingMove()
        })
        // banner.addEventListener('touchmove', e => e.preventDefault())
    }
    
    detectingMove = () => {
        // move on right
        let horizontalMove = Math.abs(this.state.touchStartX - this.state.touchEndX) > Math.abs(this.state.touchStartY - this.state.touchEndY)
        let thresholdPassed = Math.abs(this.state.touchStartX - this.state.touchEndX) > 50 
        if (horizontalMove && this.state.touchStartX > this.state.touchEndX && thresholdPassed) {
            this.changeBanner(1)
        }
        // move on left
        if (horizontalMove && this.state.touchStartX < this.state.touchEndX && thresholdPassed) {
            this.changeBanner(-1)
        }
    }

    changeBanner(offset) {
      this.setState({
        offset:offset,
        nextBanner: (this.state.currentBanner + offset + this.state.count) % this.state.count
      })
      setTimeout(() => {
        this.setState({
            nextBanner : -1,
            currentBanner : this.state.nextBanner,
        })
      }, 10)
    }
    switchAnim(index){
      return `by-switch-anim ${index === this.state.currentBanner ? "by-current" : ''} ${index === this.state.nextBanner ? "by-next" : ''} ${this.state.offset === -1 ? "offset-prev" :  "offset-next"}`
    }
    render() {
        let list = this.props.list
        return( 
          <div className={`by-main-banner ${ this.props.className }`}>
            <div className="by-main-banner-container">
              <Pagination count={list.length} active={this.state.currentBanner + 1} hideNumber={true}/>
              <div className="by-main-banner-desc by-switch-anim-container">
                {list.map((item, index)=> 
                  <TextBlock 
                    key={index} 
                    title={item.title} 
                    desc={item.desc} 
                    button="ЧИТАТЬ"
                    className={this.switchAnim(index)}
                  ></TextBlock>
                )}
              </div>
            </div>
            <div className="by-main-banner-image-main">
              <div className="by-main-banner-title by-switch-anim-container">
                {list.map((item, index)=> 
                  <div key={index} className={this.switchAnim(index)}> 
                  
                  <img 
                  src={item.image.src} 
                  alt={item.image.title} 
                  
                  />
                  </div>
                )}
              </div>
              <div className="by-main-banner-arrows">

                <aside className="by-main-banner-btn left">
                    <Button onClick={() => { this.changeBanner(-1) }}>
                        <Arrow iconInvert={false} color="#FF4D77" width={22} height={14} />
                    </Button>
                </aside>

                <aside className="by-main-banner-mini-btn right">
                    <Button onClick={() => { this.changeBanner(1) }}>
                        <Arrow iconInvert={true} color="#FF4D77" width={22} height={14} />
                    </Button>
                </aside>
                <div className="by-main-banner-image-title by-switch-anim-container">
                {list.map((item, index)=> 
                  <p key={index} className={this.switchAnim(index)}>
                    {item.image.title}
                  </p>
                )}
                </div>
                  
              </div>

            </div>


            <div className="by-main-banner-characteristics">
              
              <div className="by-main-banner-title by-switch-anim-container">
                {list.map((item, index)=> 
                  <div key={index}  className={`by-main-banner-top-view ${this.switchAnim(index)}`}>
                    <div className="by-main-banner-info">
                    {item.characteristics.map((l, i) => 
                      <LabeledValue key={i} title={l.label} value={l.value} />
                    )}
                    </div>
                    <img 
                      
                      src={item.moreImage.src} 
                      alt={item.moreImage.title}
                    />
                  </div>
                )}
              </div>

            </div>


          </div>
        )
    }
}

export default MainBanner;