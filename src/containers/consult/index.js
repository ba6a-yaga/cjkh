import React from "react";
import './index.scss'
import Button from "../../components/button";
import ContactsPopup from "../contactsPopup";

import AppData from "../../AppData"
import Popup from "../../components/popup";
import { ContactsInfoProvider } from "../contactsPopup/ContactsInfoContext";

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
  onBackClick() {
    this.contactsPopupRef.current.hide()
  }
  render() {
    return(
      <aside className="by-consult">
        <p className="by-consult-text" dangerouslySetInnerHTML={{__html:this.props.title}}></p>
        <Button text={this.props.button} onClick={this.showPopup.bind(this)}/>
        {
          this.state.isVisible && (
          <Popup ref={this.contactsPopupRef} onHide={this.onHide.bind(this)} animation="zoom-inout">
            <ContactsInfoProvider>
              <ContactsPopup data={AppData.contacts} onBackClick={this.onBackClick.bind(this)}></ContactsPopup>
            </ContactsInfoProvider>
          </Popup>)
        }
        
      </aside>
    )
  }
}

export default Consult;