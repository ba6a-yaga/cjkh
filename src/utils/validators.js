

const nonemptyValidator = {
  validate : (value) => {
    return new Promise((resolve, reject) => {
      if (value !== undefined && value !== null && value !== '') {
        resolve(true);
      } else {
        reject({
          message:"Поле не должно быть пустым",
          type:"nonempty"
        });
      }
    })
  }
} 

const emailValidator  = {
  validate :(value) => {
    return new Promise((resolve, reject) => {
        nonemptyValidator.validate(value)
        .then((result) => {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const isMatch = re.test(String(value).toLowerCase());
          if (isMatch) {
            resolve(true);
          } else {
            reject({
              message:"Неверный формат email адреса",
              type:"email"
            });
          }
        }).catch((error)=> {
          reject(error)
        }
      ) 
    })
  } 
}

export {emailValidator, nonemptyValidator}