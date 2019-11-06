import React from 'react';
import './index.scss';
import Button from '../button'
import Pagination from '../pagination'
import Arrow from '../arrow';

class Slider extends React.Component {

    state = {
        current: 0,
        counter: 1,
        pagesCount: 0,
        userAgent: window.navigator.userAgent,
        touchStartX: 0,
        touchEndX: 0,
        touchStartY: 0,
        touchEndY: 0,
    }

    columnGap = 20
    carouselRef = React.createRef()
    containerRef = React.createRef()
    elementWidth = 0
    elementsPerPage = 0
    carouselWidth = 0
    containerWidth = 0
    windowWidth = 0
    resizeId = 0

    detectingMove = () => {
        // move on right
        let horizontalMove = Math.abs(this.state.touchStartX - this.state.touchEndX) > Math.abs(this.state.touchStartY - this.state.touchEndY)
        let thresholdPassed = Math.abs(this.state.touchStartX - this.state.touchEndX) > 50 
        if (horizontalMove && this.state.touchStartX > this.state.touchEndX && thresholdPassed) {
            this.updateCurrent(1)
        }
        // move on left
        if (horizontalMove && this.state.touchStartX < this.state.touchEndX && thresholdPassed) {
            this.updateCurrent(-1)
        }
        this.setState({
            touchStartX: 0,
            touchEndX: 0,
            touchStartY: 0,
            touchEndY: 0,
        })
    }

    onResize(e) {
        clearTimeout(this.resizeId);
        this.resizeId = setTimeout(this.doneResizing.bind(this), 500);
    }

    doneResizing () {
        const isClient = typeof window === 'object';
        this.windowWidth = isClient ? window.innerWidth : undefined;
            
        this.updatePagesCount()
        this.updateTail(this.state.current)
    }

    updatePagesCount() {
        if (this.carouselRef.current.children.length > 0) {
            this.carouselWidth =  this.carouselRef.current.offsetWidth 
            this.containerWidth =  this.containerRef.current.offsetWidth 
            const width = this.carouselRef.current.children[0].offsetWidth
            this.elementWidth = width + this.columnGap
            this.elementsPerPage = Math.floor(this.containerWidth / this.elementWidth)
            const tail = (this.props.children.length % this.elementsPerPage === 0) ? 0 : 1
            var pagesCount = Math.floor(this.props.children.length / Math.max(this.elementsPerPage, 1) + tail)
            if (this.windowWidth < 1024) {
                pagesCount = Math.floor(this.props.children.length / Math.max(this.elementsPerPage, 1))
            }
            this.setState({pagesCount:pagesCount})

            if (this.props.pagesCountUpdated !== undefined) {
                this.props.pagesCountUpdated(pagesCount)
            }
            if (this.state.current > pagesCount) {
                this.setState({current:pagesCount - 1})
            }
        }
    } 
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.onResize)
    }
    componentDidMount = () => {
        this.onResize()
        
        this.updatePagesCount() 
        this.containerRef.current.addEventListener('touchstart', e => this.setState(
          {
            touchStartX: e.changedTouches[0].screenX, 
            touchStartY: e.changedTouches[0].screenY
        }))
        this.containerRef.current.addEventListener('touchmove', e => {
            let horizontalMove = Math.abs(this.state.touchStartX - e.changedTouches[0].screenX) > Math.abs(this.state.touchStartY - e.changedTouches[0].screenY)
            if (horizontalMove) {
                if (e.cancelable) {
                    e.preventDefault()
                } 
            }
        })
        this.containerRef.current.addEventListener('touchend', e => {
            this.setState({
              touchEndX: e.changedTouches[0].screenX,
              touchEndY: e.changedTouches[0].screenY 
             })
            this.detectingMove()
            
        })
        
        this.updateTail(0)
        window.addEventListener("resize", this.onResize.bind(this))
    }

    isElementVisible(index, currentPage) {
        let elemLeft = index * this.elementWidth
        let elemRight = index * this.elementWidth + this.elementWidth - this.columnGap
        const translate = this.getTranslate(currentPage)
        return elemLeft >= -translate && 
                elemRight <= -translate + this.containerWidth + 20
    }

    getTranslate(page) {
        if (page === this.state.pagesCount - 1 && this.windowWidth >= 1024) {
            return this.containerWidth - this.carouselWidth
        } else {
            return -(Math.max(this.elementsPerPage, 1) * page) * this.elementWidth
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