import React from 'react';
import './index.scss';
class Popup extends React.Component {
  state = {
    isVisible:false,
  }
  render() {
    return (
      <aside className={`by-modal-dialog ${ this.props.className ? this.props.className: '' }`}>
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
      </aside>

    )
  }
}

export default Popup