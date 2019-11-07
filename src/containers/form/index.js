import React from 'react';
import './index.scss';
import Button from '../../components/button';
import 'core-js/es/promise/all-settled'
class Form extends React.Component {
    
  constructor(props) {
    super(props);
    

    let fieldsValues = props.data
      .filter((item) => item.hasOwnProperty("name"))
      .reduce((obj, item) => { obj[item.name]=''; return obj}, {})
    let secureInputs = props.data
      .filter((item) => item.hasOwnProperty("name") && item.type==="password")
      .reduce((obj, item) => { obj[item.name]=true; return obj}, {})

    this.state = {
      ...fieldsValues,
      secure:{...secureInputs},
      errors:props.errors,
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
    // if (this.state.errors.length > 0) {
    //   this.setState({errors:this.state.errors.filter((err, index) => {
    //     return err.field !== item.name
    //   })})
    // }
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.submitForm()
  }

  onSubmitClick() {
    this.submitForm()
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
    .then((errors)=> {
      if (errors.length === 0) {
        this.setState({errors:[]})
        this.onFormSubmitFinish()
      } else {
        this.setState({errors:errors})
      }
    })
    .catch(() => {
      
    })
  }

  validateForm() {
    var errors = []
    var promises = []
    this.props.data.forEach(item => {
        if (item.validators) {
            let promise = item.validators.reduce((p, {validator, options} )=> {
                return p.then(() => validator.validate(this.state[item.name], options).catch((error) => {
                    if (errors.findIndex(err => err.field === item.name) === -1) {
                      error.field = item.name
                      errors.push(error)
                    }
                }));
            }, Promise.resolve([])) 
            promises.push(promise)
        }
    });
    
    return new Promise((resolve, reject) => {
      Promise.allSettled(promises)
      .then(results => {
        resolve(errors)
      })
      .catch(result => {
        resolve(errors)
        reject("Неизвестная ошибка")
      })
    })
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
    getErrorsLabel() {
      return <p>Устраните <strong>{`${this.state.errors.length}`}</strong> {`${this.declOfNum(this.state.errors.length, ["ошибку","ошибки", "ошибок"])}`}</p>
    }
    declOfNum(number, titles) {  
      const cases = [2, 0, 1, 1, 1, 2];  
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5)?number % 10 : 5]];  
    }
    render() {
      let data = this.props.data

      return (
        <form className="by-form" onSubmit={this.onFormSubmit.bind(this)}>
          {this.state.errors.length > 0 && 
            <div className="by-errors">
              {this.getErrorsLabel()}
              {this.state.errors.map((item, index) => 
                <div className="by-error-label" key={index}>— {item.message}</div>
              )}
            </div>
          }
          {data.map((item, index) => this.formElement(item, index))}
        </form>
      )
        
  }
}

export default Form;