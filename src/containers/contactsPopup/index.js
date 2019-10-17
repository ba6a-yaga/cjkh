import React from 'react';
import './index.scss';
import MasonryLayout from '../../components/masonryLayout';
import TextOnImage from '../../components/textOnImage';
import Popup from '../../components/popup';
import TitleBlock from '../../components/titleBlock';
import Phone from '../../components/phone';
import Email from '../../components/email';
class ContactsPopup extends React.Component {
    formElement = () => {
      return <div> </div>
    }
    render() {
      let data = this.props.data


      return (
        <Popup>
          <div className="App-contacts-content">
            <div class="App-contacts-info">
              <TitleBlock text={data.title}></TitleBlock>
              <Phone value={data.phone} />
              <Email value={data.email} />
            </div>
            <form>
              {data.form.map((item, index) => this.formElement(item))}
            </form>
          </div>
        </Popup>
      )
        
  }
}

export default ContactsPopup;