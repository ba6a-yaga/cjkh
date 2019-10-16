import React from "react";
import './index.scss'


class Footer extends React.Component {
  render() {
        return(
          <div className={`by-footer ${ this.props.className }`}>
            <div className={'by-footer-content'}>
              &copy; 2019 Все права защищены. Сделанно с душей <a className="by-mailto" href="mailto:у@бабыяги.рус">у@бабыяги.рус</a>
            </div>
          </div>
        )
  }
};

export default Footer;

