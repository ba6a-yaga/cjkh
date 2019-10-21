import React from "react";
import ReactDOM from "react-dom";
import './index.scss'
import Button from "../../components/button";
import ContactsPopup from "../contactsPopup";

import AppData from "../../AppData"
import Popup from "../../components/popup";

class Consult extends React.Component {
  contactsPopupRef = React.createRef()
  state = {
    isVisible:false
  }
  showPopup() {
    this.setState({
      isVisible:true
    })
  }
  onHide() {
    this.setState({
      isVisible:false
    })
  }
  render() {
    return(
      <aside className="by-consult">
        <p className="by-consult-text" dangerouslySetInnerHTML={{__html:this.props.title}}></p>
        <Button text={this.props.button} onClick={this.showPopup.bind(this)}/>
        {
          this.state.isVisible && (
          <Popup ref={this.contactsPopupRef} onHide={this.onHide.bind(this)} animation="zoom-inout">
            <ContactsPopup data={AppData.contacts}></ContactsPopup>
          </Popup>)
        }
        
      </aside>
    )
  }
}

export default Consult;