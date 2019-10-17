import React from 'react';
import './index.scss';
import IconArrow from '../iconArrow'
import Button from '../button'
import Pagination from '../pagination'
import Arrow from '../arrow';
import { visible } from 'ansi-colors';

class Slider extends React.Component {

    state = {
        current: 0,
        counter: 1,
        pagesCount: 0,
        userAgent: window.navigator.userAgent,
    }

    columnGap = 20
    carouselRef = React.createRef()
    containerRef = React.createRef()
    elementWidth = 0
    elementsPerPage = 0
    carouselWidth = 0
    containerWidth = 0
    componentDidMount = () => {
        let carousel = this.carouselRef.current;
        console.log(this.props)
        if (this.carouselRef.current.children.length > 0) {
            this.carouselWidth =  this.carouselRef.current.offsetWidth 
            this.containerWidth =  this.containerRef.current.offsetWidth 
            const width = this.carouselRef.current.children[0].offsetWidth
            this.elementWidth = width + this.columnGap
            this.elementsPerPage = Math.floor(this.containerWidth / this.elementWidth)
            const tail = (this.props.children.length % this.elementsPerPage === 0) ? 0 : 1
            var pagesCount = Math.floor(this.props.children.length / this.elementsPerPage + tail)
            this.setState({pagesCount:pagesCount})
            if (this.props.pagesCountUpdated !== undefined) {
                this.props.pagesCountUpdated(pagesCount)
            }
        }
        this.updateTail(0)
    }

    isElementVisible(index, currentPage) {
        let elemLeft = index * this.elementWidth
        let elemRight = index * this.elementWidth + this.elementWidth - this.columnGap
        const translate = this.getTranslate(currentPage)
        console.log(elemLeft, elemRight, -translate, this.containerWidth, -translate + this.containerWidth)
        return elemLeft >= -translate && 
                elemRight <= -translate + this.containerWidth + 20
    }

    getTranslate(page) {
        if (page === this.state.pagesCount - 1) {
            return this.containerWidth - this.carouselWidth + this.columnGap
        } else {
            return -(this.elementsPerPage * page) * this.elementWidth
        }
    }
    
    updateCurrent = (offset) => {
        var next = Math.min(Math.max(this.state.current + offset, 0), this.state.pagesCount - 1)
        this.setState({
            current: next
        })
        this.updateTail(next)
        if (this.props.currentPageUpdated !== undefined) {
            this.props.currentPageUpdated(next)
        }
    }


    updateTail = (next) => {
        Array.from(this.carouselRef.current.children).forEach((elem, index) => {
            this.isElementVisible(
                index, 
                next,
            ) ? elem.classList.remove("by-element-tail") : elem.classList.add("by-element-tail")
        });
    } 

    render() {
        let translate = this.getTranslate(this.state.current)
        const transformSliderStyles = { 
            transform: `translate(${translate}px, ${0}px)` 
        };
        return(
            <aside className="by-wrapper-slider">
                <aside className="by-slider-buttons" >
                    <aside className="by-slider-mini-btn left">
                        <Button onClick={() => this.updateCurrent(-1)}>
                            <Arrow iconInvert={false} color="#FF4D77" />
                        </Button>
                    </aside>
                    <aside className="by-slider-mini-btn right">
                        <Button onClick={() => this.updateCurrent(1)}>
                            <Arrow iconInvert={true} color="#FF4D77" />
                        </Button>
                    </aside>
                </aside>
                <aside className="by-slider-object-container" ref={this.containerRef}>
                    <aside className="by-slider-object" ref={this.carouselRef} style={transformSliderStyles}>
                        {this.props.children}
                    </aside>
                </aside>
                {
                    this.props.pagination 
                    ?   <aside className="by-carousel-pagination" >
                            <Pagination count={this.state.counter} active={this.state.current} />
                        </aside> 
                    :   null
                }
            </aside>
        )
    }
}

export default Slider;