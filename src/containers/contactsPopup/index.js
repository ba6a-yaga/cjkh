import React, {useContext} from 'react';
import './index.scss';
import Phone from '../../components/phone';
import Email from '../../components/email';
import Form from '../form';
// import useContactsInfo from './useContactsInfo'
import { ContactsInfoContext } from './ContactsInfoContext';
import TextBlock from '../../components/textBlock';
import Button from '../../components/button';
export default function ContactsPopup(props) {
    const [state, setState] = useContext(ContactsInfoContext)

    // const { sendContactsInfo, errors} = useContactsInfo();
    let data = props.data
    // const formSuccess = false
    const onFormSubmit = () => {
      setState({sended:true});
    }
    console.log(state)
    return (
        <div className="App-contacts-content">
          <div className="App-contacts-info">
            <TextBlock title={data.title}>
                <Phone value={data.phone} />
                <Email value={data.email} />
            </TextBlock>
           
          </div>
          {
            state.sended ? 
            <div className="form-success">
              <p className="form-succes-text">{data.formSuccess}</p>
              <Button text="НАЗАД" onClick={props.onBackClick}></Button>
            </div>:
            <Form data={data.form} onFormSubmit={onFormSubmit} errors={state.errors}></Form>
          }
        </div>
    )
}