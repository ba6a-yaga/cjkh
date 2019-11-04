import React, {useContext} from 'react';
import './index.scss';
import MasonryLayout from '../../components/masonryLayout';
import TextOnImage from '../../components/textOnImage';
import Popup from '../../components/popup';
import TitleBlock from '../../components/titleBlock';
import Phone from '../../components/phone';
import Email from '../../components/email';
import Form from '../form';
import useContactsInfo from './useContactsInfo'
import { ContactsInfoContext } from './ContactsInfoContext';
export default function ContactsPopup(props) {
    const [state, setState] = useContext(ContactsInfoContext)

    const { sendContactsInfo, errors} = useContactsInfo();
    let data = props.data
    const onFormSubmit = () => {
      
    }
    console.log(state)
    return (
        <div className="App-contacts-content">
          <div className="App-contacts-info">
            <TitleBlock text={data.title}></TitleBlock>
            <Phone value={data.phone} />
            <Email value={data.email} />
          </div>
          <Form data={data.form} onFormSubmit={onFormSubmit} errors={state.errors}></Form>
        </div>
    )
}