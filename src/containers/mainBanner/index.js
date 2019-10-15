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
        count : this.props.list.length,
        userAgent: window.navigator.userAgent,
    }
    
    changeBanner(offset) {
        this.setState({
            currentBanner: (this.state.currentBanner + offset + this.state.count) % this.state.count
        })
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
                    className={`by-switch-anim ${index === this.state.currentBanner ? "by-current" : undefined}`}
                  ></TextBlock>
                )}
              </div>
            </div>
            <div className="by-main-banner-image-main">
              <div className="by-main-banner-title by-switch-anim-container">
                {list.map((item, index)=> 
                  <img 
                  key={index} 
                  src={item.image.src} 
                  alt={item.image.title} 
                  className={`by-switch-anim ${index === this.state.currentBanner ? "by-current" : undefined}` }
                  />
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
                  <p key={index} className={`by-switch-anim ${index === this.state.currentBanner ? "by-current" : undefined}` }>
                    {item.image.title}
                  </p>
                )}
                </div>
                  
              </div>

            </div>


            <div className="by-main-banner-characteristics">
              
              <div className="by-main-banner-title by-switch-anim-container">
                {list.map((item, index)=> 
                  <div key={index}  className={`by-main-banner-top-view by-switch-anim ${index === this.state.currentBanner ? "by-current" : undefined}` }>
                    <div className="by-main-banner-info">
                    {item.characteristics.map((l, i) => 
                      <LabeledValue key={i} title={l.label} value={l.value} />
                    )}
                    </div>
                    <img 
                      
                      src={item.image.src} 
                      alt={item.image.title}
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