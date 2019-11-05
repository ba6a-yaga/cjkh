import React, { useState } from 'react';

const ContactsInfoContext = React.createContext([{}, () => {}]);

const ContactsInfoProvider = (props) => {
  const [state, setState] = useState({
    email:'',
    name:'',
    message:'',
    sended:false,
    errors:[]
  });
  
  return (
    <ContactsInfoContext.Provider value={[state, setState]}>
      {props.children}
    </ContactsInfoContext.Provider>
  );
};

export { ContactsInfoContext, ContactsInfoProvider };