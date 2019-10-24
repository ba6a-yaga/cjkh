import React from 'react';
import './index.scss';
import MasonryLayout from '../../components/masonryLayout';
import TextOnImage from '../../components/textOnImage';
import Popup from '../../components/popup';
import TitleBlock from '../../components/titleBlock';
import Phone from '../../components/phone';
import Email from '../../components/email';
import Button from '../../components/button';
import InputText from '../../components/inputText';
import {emailValidator, nonemptyValidator} from "../../utils/validators"
class Form extends React.Component {
    
    constructor(props) {
      super(props);

      let fieldsValues = props.data
        .filter((item) => item.hasOwnProperty("name"))
        .reduce((obj, item) => { obj[item.name]=''; return obj}, {})

      this.state = {
        ...fieldsValues,
        errors:[],
        loading:false
      }
    }
    data = this.props.data

    componentDidMount() {
    }

    onInputChange = (e, item) => {
      this.setState({
        [item.name]:e.currentTarget.value
      })
      if (this.state.errors.length > 0) {
        this.setState({errors:this.state.errors.filter((err, index) => {
          return err.field !== item.name
        })})
      }
    }

    onFormSubmit(e) {
      e.preventDefault();
      this.submitForm()
    }

    onSubmitClick() {

    }

    onFormSubmitFinish() {
      if (this.props.onFormSubmit) {
        var values = this.props.data
          .filter((item) => item.hasOwnProperty("name"))
          .reduce((obj, item) => { obj[item.name]=this.state[item.name]; return obj}, {})
        this.props.onFormSubmit(values)
      }
    }

    submitForm() {
      this.validateForm()
      .then((result)=> {
        if (result.length === 0) {
          // this.setState({loading:true})
          // setTimeout(() => {this.setState({loading:false})}, 1000)
          this.onFormSubmitFinish()
          console.log("Тут должна быть отправка сообщения на сервер")
        } else {
          this.setState({errors:result})
        }
      })
      .catch(() => {

      })
    }

    validateForm() {
      var errors = []
      var promises = []
      this.props.data.forEach(item => {
        const validatePromise = this.validateInput(item)
        if (validatePromise) {
          promises.push(validatePromise)
          validatePromise
          .then((result) => {
            
          }).catch((error) => {
            error.field = item.name
            errors.push(error)
          })
        }
      });

      return new Promise((resolve, reject) => {
        Promise.allSettled(promises)
        .then(results => {
          resolve(errors)
        })
        .catch(result => {
          reject("Неизвестная ошибка")
        })
      })
    }

    validateInput(item) {
      let validator = this.getValidator(item.validator, item.required)
      if (validator && this.state.hasOwnProperty(item.name)) {
        return validator.validate(this.state[item.name])
      }
    }
  
    getValidator(validator, required) {
      if (required) {
        switch (validator){ 
          case "email":
            return emailValidator;
          case "nonempty":
            return nonemptyValidator;
          default:
            return undefined;
        }
      }
    }
    getInput(item) {
      let onInputChange = (e) => {this.onInputChange(e, item)}
      let value = this.state[item.name]
      let placeholder = item.placeholder
      
      switch(item.type) {
        case "text":
            return <input type="text" placeholder={placeholder} value={value} onChange={onInputChange}/>
        case "password":
            return <input type="password" placeholder={placeholder} onChange={onInputChange}/>
        case "textarea":
            return <textarea placeholder={placeholder} rows={3} onChange={onInputChange} value={value}/>
        case "submit":
            return <Button preloader={this.state.loading} text={item.title} onClick={this.onSubmitClick.bind(this)}></Button>
          default:
            return <input type="text" placeholder={placeholder} value={value} onChange={onInputChange} />
      }
    }
    formElement = (item, index) => {
      let error = this.state.errors.find(el => el.field === item.name)
      return (
        <div key={index} className={`by-form-input-row ${error ? "by-form-input-error": ""}`}>
          {item.type !== "submit" && <label className="by-form-label">{item.title}</label>}
          <div className="by-input-container">
            {this.getInput(item)}
            {<div className="by-input-error">{error ? error.message : " "}</div>}
          </div>
         
        </div>
      )
    }
    render() {
      let data = this.props.data

      return (
        <form className="by-form" onSubmit={this.onFormSubmit.bind(this)}>
          {/* {this.state.errors.length > 0 && 
            <div className="by-errors">
              {this.state.errors.map((item, index) => 
                <p key={index}>{item.error}</p>
              )}
            </div>
          } */}
          {data.map((item, index) => this.formElement(item, index))}
        </form>
      )
        
  }
}

export default Form;