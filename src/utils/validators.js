const requiredValidator = {
  type:"required",
  validate : (value, options) => {
    const { error = "Поле не должно быть пустым"} = options || {};
    return new Promise((resolve, reject) => {
      if (value !== undefined && value !== null && value !== '' && typeof value === "string") {
        resolve(true);
      } else {
        reject({
            message:error,
            type:"required"
        });
      }
    })
  }
} 

const emailValidator = {
  type:"email",
  validate :(value,  options) => {
    const { error = "Неверный формат email адреса"} = options || {};
    return new Promise((resolve, reject) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const isMatch = re.test(String(value ? value : '').toLowerCase());
      if (isMatch) {
        resolve(true);
      } else {
        reject({
          message:error,
          type:"email"
        });
      }
    })
  } 
}

const lengthValidator = {
  type:"length",
  validate : (value,  options) => {
    const {
            min = 1,
            max = 256
        } = options || {};
    const error = (options && options.error) || `Поле должно быть длиннее ${min} и короче ${max} символов`
    return new Promise((resolve, reject) => {
      const val = typeof value === "string" ? String(value ? value : '') : ""
      if (val.length >= min && val.length <= max) {
        resolve(true);
      } else {
        reject({
          message:error,
          type:"length"
        });
      }
    })
  } 
}

const regexValidator = {
  type:"regexp",
  validate :(value,  options) => {
    const { error = "Неверный формат", regexp=/^$/g} = options || {};
    return new Promise((resolve, reject) => {
      const re = regexp
      const isMatch = re.test(String(value ? value : '').toLowerCase());
      if (isMatch) {
        resolve(true);
      } else {
        reject({
          message:error,
          type:"regexp"
        });
      }
    })
  } 
}

export {emailValidator, requiredValidator, lengthValidator, regexValidator}