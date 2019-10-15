import React from 'react';
import './index.css';
import Button from '../button'
import IconArrow from '../iconArrow'
import Title from '../title'


class Banner extends React.Component {

    state = {
        currentImage: 0,
        counterImage: 1,
        userAgent: window.navigator.userAgent,
    }

    prevImage = () => {
        let re = /Safari|Firefox|Chrome/
        let found = this.state.userAgent.match(re)
        let media = document.getElementsByClassName('by-banner-photo')

        if (found !== null && found.length > 0 && found[0] !== 'Safari' && media.length > 1) {

            media[this.state.currentImage].animate([
                {transform: 'translateX(0%)'},
                {transform: 'translateX(100%)'},
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

            media[prevImage].animate([
                {transform: 'translateX(-100%)'},
                {transform: 'translateX(0%)'},
            ],{
                fill: 'forwards',
                duration: 500,
                easing: 'ease-in',
                direction: 'normal',
            })
        } else if (media.length > 1) {
            media[this.state.currentImage].style.setProperty("animation", ".5s ease-in forwards image-center-left")
            
            let prevImage = this.state.currentImage===0?this.props.media.length-1:this.state.currentImage-1
            let counterImage = prevImage+1

            this.setState({
                currentImage: prevImage,
                counterImage: counterImage,
            })

            media[prevImage].style.setProperty("animation", ".5s ease-in forwards image-right-center")
        }
    }

    nextImage = (e) => {

        let re = /Safari|Firefox|Chrome/
        let found = this.state.userAgent.match(re)
        let media = document.getElementsByClassName('by-banner-photo')

        if (found !== null && found.length > 0 && found[0] !== 'Safari' && media.length > 1) {
            media[this.state.currentImage].animate([
                {transform: 'translateX(0%)'},
                {transform: 'translateX(-100%)'},
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
                    {transform: 'translateX(100%)'},
                    {transform: 'translateX(0%)'},
                ],{
                    fill: 'forwards',
                    duration: 500,
                    easing: 'ease-in',
                    direction: 'normal',
                })
            }, 250)
    
        } else if (media.length > 1) {
            media[this.state.currentImage].style.setProperty("animation", ".5s ease-in forwards image-center-right")
            
            let nextImage = this.state.currentImage===this.props.media.length-1?0:this.state.currentImage+1
            let counterImage = nextImage+1

            this.setState({
                currentImage: nextImage,
                counterImage: counterImage,
            })

            media[nextImage].style.setProperty("animation", ".5s ease-in forwards image-left-center")
        }
    }

    Shape(props) {
        return (
            <svg className="by-banner-shape" width={650} height={527} {...props}>
                <g fill="none" fillRule="evenodd">
                <path
                    d="M409.589 0c119.202 93.607 159.405 186.695 120.61 279.265S531.338 454.131 650 526.152H0V0h409.589z"
                    fill="#8299DC"
                />
                <path
                    d="M77.709 0c119.202 93.607 159.405 186.695 120.61 279.265s1.138 174.866 119.8 246.887H0V0h77.709z"
                    fillOpacity={0.3}
                    fill="#F06787"
                />
                </g>
            </svg>
        )
    }
      
    render() {
        let media = this.props.media
        return (
            <aside className="by-wrapper-banner clearfix">
                {this.props.children}
                {media.map((img, i) => 
                    i === 0? 
                    <img className="by-banner-photo" alt="" src={img} key={i} />
                    :
                    <img className="by-banner-photo invise" alt="" src={img} key={i} />
                )}
                <this.Shape />
                <aside className="by-banner-title">
                    <Title text="Заголовок новости" desc="может быть длинным и при этом с описанием" />
                </aside>
                <aside className="by-banner-control second">
                    <Button text="Назад" iconFloat="left" onClick={this.prevImage}>
                        <IconArrow iconInvert={true} color="#FF4D77" width={22} height={14} />
                    </Button>
                </aside>
                <aside className="by-banner-control first">
                    <Button className="first" text="Далее" iconFloat="right" onClick={this.nextImage} >
                        <IconArrow color="#FFF" width={23} height={15} />
                    </Button>
                </aside>
            </aside>
        )
    }
}

export default Banner;

