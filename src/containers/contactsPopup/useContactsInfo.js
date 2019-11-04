import { useContext } from 'react';
import { ContactsInfoContext } from "./ContactsInfoContext";

const useContactsInfo = () => {
  const [state, setState] = useContext(ContactsInfoContext)
  console.log("state", state)
  function sendContactsInfo(data) {
    setState({...state, email:data.email, name:data.name, name:data.message, errors:[]})
    // fetch("http://192.168.31.144:3000/sendData", {
    //     method: 'post',
    //     headers: {'Content-Type':'application/json'},
    //     body: JSON.stringify({
    //         email: data.email,
    //         digest_password:data.password
    //     })
    // })
    
    // .then(result => {
    //   if (result.status === 201) {
    //     // TODO Тут выработать единый стиль обработки успешного ответа
    //     setState({...state})
    //   } else if (result.status === 200){
    //     // TODO Тут выработать единый стиль обработки ошибок
    //     setState({...state, errors:{name:"Имя пользователя или пароль введены не верно"}})
    //   } else {

    //   }
    //   console.log("result = ", result.status)
    // })
    // .catch(error => {
    //   console.log("error = ", error)
    // });
  }
  
  return {
    sendContactsInfo,
    errors:state.errors
  }
};

export default useContactsInfo;
