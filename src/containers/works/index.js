import React from 'react';
import './index.scss';
import Consult from '../../containers/consult';
class Works extends React.Component {
  render() {
    let data = this.props.data
    let consult = this.props.consult
    return (
      <section className={`App-works ${ this.props.className }`}>
        <div className="App-works-art">
            <img src={data.image.src} alt={data.image.alt} />
        </div>
        <div className="App-works-info">
          {data.title ? <h1 className="by-title-text" dangerouslySetInnerHTML={{__html:data.title}} ></h1> : null}
          {data.desc ? <div className="by-description-text" dangerouslySetInnerHTML={{__html:data.desc}} ></div> : null}
          <div className="App-works-consult">
            <Consult title={consult.title} button={consult.button.title} ></Consult>
          </div>
        </div>
      </section>
    )
  }
}

export default Works;