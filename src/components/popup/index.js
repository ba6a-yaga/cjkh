import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {CSSTransition} from 'react-transition-group';


const modalRoot = document.getElementById('modal');

class Popup extends React.Component {
  state = {
    isVisible:false,
  }
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
   getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    this.show()
    let size = this.getScrollbarWidth()
    document.body.style.setProperty("--scroll-width", `${size}px`)
    document.body.classList.add("modal-open")
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  onCloseClick = () => {
    this.hide()
  }
  hide = () => {
    this.setState({isVisible: false})
    if (this.props.animation) {
      setTimeout(() => {
        document.body.classList.remove("modal-open")
        this.props.onHide()
      },250)
    } else {
      document.body.classList.remove("modal-open")
        this.props.onHide()
    }
  }
  show = () => {
    this.setState({isVisible: true})
  }
  render() {
    return ReactDOM.createPortal(
        <CSSTransition in={this.state.isVisible} timeout={550} classNames={`${this.props.animation ? this.props.animation: ''}`} appear unmountOnExit>
          <div className={`by-modal-dialog`}>
            <div className="by-modal-container" >
              <div className="by-modal">
                <div className="by-modal-content">
                  <div className="by-modal-content-block">
                      {this.props.children}
                  </div>
                  <div className="button-close" onClick={this.onCloseClick}>
                      <span className="cross cross-left"></span>
                      <span className="cross cross-right"></span>
                      <span>ЗАКРЫТЬ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      ,
      this.el,
    );
  }
  // render() {
  //   return (
     

  //   )
  // }
}

export default Popup