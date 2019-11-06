import React from "react";
import './index.scss'


class Footer extends React.Component {
  render() {
        return(
          <div className={`by-footer ${ this.props.className }`}>
            <div className={'by-footer-content'}>
              &copy; 2019 Все права защищены. <span className="made-with-soul"> Сделанно с душей <a className="by-mailto" href="mailto:у@бабыяги.рус">у@бабыяги.рус</a></span>
            </div>
          </div>
        )
  }
};

export default Footer;

