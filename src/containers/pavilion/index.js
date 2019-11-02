import React from 'react';
import './index.scss';
import MasonryLayout from '../../components/masonryLayout';
import TextOnImage from '../../components/textOnImage';
import ExpandableText from '../../components/expandableText';
import Pagination from '../../components/pagination';
class Pavilion extends React.Component {
    state = {
      currentBanner : 0,
      nextBanner : 0,
      offset : 0,
      count : this.props.data.list.length,
      touchStartX: 0,
      touchEndX: 0,
      touchStartY: 0,
      touchEndY: 0,
    }

    componentDidMount() {
      let banner = document.querySelector('.App-pavilion')
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
      console.log(this.state)
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
      let data = this.props.data
      return (
        <section className={`App-pavilion ${ this.props.className ? this.props.className : "" }`}>
          <MasonryLayout className="by-pavilion-masonry by-switch-anim-container">
            {data.list.map((item, index) => 
              <TextOnImage 
                key={index}
                text={item.title} 
                image={item.image} 
                className={this.switchAnim(index)}
              />
            )}
          </MasonryLayout>
          <div className="by-pavilion-info">
            <h1 className="by-title-text" dangerouslySetInnerHTML={{__html:data.title}} ></h1> 
            <ExpandableText text={data.desc} linesCount={7}></ExpandableText>
            <aside className="by-pagination">
                <Pagination count={data.list.length} active={this.state.currentBanner + 1} hideNumber={true}/>
            </aside>
          </div>
        </section>
      )
        
  }
}

export default Pavilion;