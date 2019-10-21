import React from 'react';
import './index.scss';
import MasonryLayout from '../../components/masonryLayout';
import TextOnImage from '../../components/textOnImage';
import Popup from '../../components/popup';
import TitleBlock from '../../components/titleBlock';
import Phone from '../../components/phone';
import Email from '../../components/email';
import Form from '../form';
class ContactsPopup extends React.Component {
    render() {
      let data = this.props.data

      return (
          <div className="App-contacts-content">
            <div className="App-contacts-info">
              <TitleBlock text={data.title}></TitleBlock>
              <Phone value={data.phone} />
              <Email value={data.email} />
            </div>
            <Form data={data.form}></Form>
          </div>
      )
        
  }
}

export default ContactsPopup;