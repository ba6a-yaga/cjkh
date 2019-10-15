import React from 'react';
import './index.scss';
import IconArrow from '../iconArrow'
import Button from '../button'
import Pagination from '../pagination'

class Slider extends React.Component {

    state = {
        current: 0,
        counter: 1,
        userAgent: window.navigator.userAgent,
    }

    prevImage = () => {

        let re = /Safari|Firefox|Chrome/
        let found = this.state.userAgent.match(re)
        let media = document.getElementsByClassName('by-carousel-media-object')

        if (found !== null && found.length > 0 && found[0] !== 'Safari' && media.length > 1) {
            media[this.state.currentImage].animate([
                {transform: 'translateX(0%)'},
                {transform: 'translateX(130%)'},
            ],{
                fill: 'forwards',
                duration: 500,
                easing: 'ease-in',
                direction: 'normal'
            })

            let prevImage = this.state.currentImage===0?this.props.media.length-1:this.state.currentImage-1
            let counterImage = prevImage+1

            this.setState({
                currentImage: prevImage,
                counterImage: counterImage,
            })

            setTimeout(()=>{
                media[prevImage].animate([
                    {transform: 'translateX(-130%)'},
                    {transform: 'translateX(0%)'},
                ],{
                    fill: 'forwards',
                    duration: 500,
                    easing: 'ease-in',
                    direction: 'normal',
                })
            }, 250)
            
        } else if(media.length > 1) {
            media[this.state.currentImage].style.setProperty("animation", ".5s ease-in forwards image-center-left")
            
            let prevImage = this.state.currentImage===0?this.props.media.length-1:this.state.currentImage-1
            let counterImage = prevImage+1

            this.setState({
                currentImage: prevImage,
                counterImage: counterImage,
            })

            setTimeout(()=>{
                media[prevImage].style.setProperty("animation", ".5s ease-in forwards image-right-center")
            },250)
        }
    }

    nextImage = (e) => {

        let re = /Safari|Firefox|Chrome/
        let found = this.state.userAgent.match(re)
        let media = document.getElementsByClassName('by-carousel-media-object')

        if (found !== null && found.length > 0 && found[0] !== 'Safari' && media.length > 1) {
            media[this.state.currentImage].animate([
                {transform: 'translateX(0%)'},
                {transform: 'translateX(-130%)'},
            ],{
                fill: 'forwards',
                duration: 500,
                easing: 'ease-in',
                direction: 'normal'
            })

            let nextImage = this.state.currentImage===this.props.media.length-1?0:this.state.currentImage+1
            let counterImage = nextImage+1

            this.setState({
                currentImage: nextImage,
                counterImage: counterImage,
            })

            setTimeout(()=>{
                media[nextImage].animate([
                    {transform: 'translateX(130%)'},
                    {transform: 'translateX(0%)'},
                ],{
                    fill: 'forwards',
                    duration: 500,
                    easing: 'ease-in',
                    direction: 'normal',
                })
            }, 250)
    
        } else if(media.length > 1) {
            media[this.state.currentImage].style.setProperty("animation", ".5s ease-in forwards image-center-right")
            
            let nextImage = this.state.currentImage===this.props.media.length-1?0:this.state.currentImage+1
            let counterImage = nextImage+1

            this.setState({
                currentImage: nextImage,
                counterImage: counterImage,
            })

            setTimeout(()=>{
                media[nextImage].style.setProperty("animation", ".5s ease-in forwards image-left-center")
            }, 250)
        }
    }

    render() {
        let media = this.props.list

        return(
            <aside className="by-wrapper-slider">
                <aside className="by-slider-mini-btn left">
                    <Button onClick={this.prevImage}>
                        <IconArrow iconInvert={true} color="#FF4D77" width={22} height={14} />
                    </Button>
                </aside>
                <aside className="by-slider-mini-btn right">
                    <Button onClick={this.nextImage}>
                        <IconArrow iconInvert={false} color="#FF4D77" width={22} height={14} />
                    </Button>
                </aside>
                <aside className="by-slider-object">
                {this.props.children}
                </aside>
                
                <aside className="by-carousel-pagination">
                    <Pagination count={this.state.counter} active={this.state.current} />
                </aside>
            </aside>
        )
    }
}

export default Slider;