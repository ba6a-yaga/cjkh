import React from 'react';
import './index.scss';
import MasonryLayout from '../../components/masonryLayout';
import TextOnImage from '../../components/textOnImage';
import Popup from '../../components/popup';
import TitleBlock from '../../components/titleBlock';
import Phone from '../../components/phone';
import Email from '../../components/email';
import Button from '../../components/button';
class Form extends React.Component {

    getInput(item) {
      switch(item.type) {
        case "email":
            return <input type="text" placeholder={item.placeholder}/>
        case "password":
            return <input type="password" placeholder={item.placeholder}/>
        case "textarea":
            return <textarea placeholder={item.placeholder} rows={3}/>
        case "submit":
            return <Button text={item.title}></Button>
          default:
            return <input type="text" placeholder={item.placeholder}/>
      }
    }
    formElement = (item, index) => {
      return (
        <div key={index} className="by-form-input-row">
          
          {item.type !== "submit" && <label className="by-form-label">{item.title}</label>}
          <div className="by-input-container">{this.getInput(item)}</div>
        </div>
      )
    }
    render() {
      let data = this.props.data

      return (
        <form className="by-form">
          {data.map((item, index) => this.formElement(item, index))}
        </form>
      )
        
  }
}

export default Form;