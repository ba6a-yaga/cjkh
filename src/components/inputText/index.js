import React from 'react'

class InputText extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.value)
    this.state = {
      value:this.props.value ? this.props.value : ''
    }
    this.handleChange  = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }
  render() {
    const data = this.props
    return (
      <input type={data.type} placeholder={data.placeholder} onChange={this.handleChange} value={this.state.value}/>
    )
  }
}
export default InputText