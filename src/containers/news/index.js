import React from 'react';
import './index.scss';
import IconSocial from '../../components/iconSocial';
import Consult from '../../containers/consult';
class News extends React.Component {
    render() {
      let data = this.props.data
      let social = this.props.social
      let consult = this.props.consult
      return (
        <section className={`App-news ${ this.props.className }`}>
          <div className="by-news-info">
            <h1 className="by-title-text" dangerouslySetInnerHTML={{__html:data.title}} ></h1> 
            
            <div className="App-social-icons">
              {social.map((item, i) => 
                <IconSocial key={i} social={item.icon} href={item.link} title={item.name}/>
              )}
            </div>
          </div>
          <div className="App-works-consult">
              <Consult title={consult.title} button={consult.button.title} ></Consult>
          </div>

        </section>
      )
        
  }
}

export default News;