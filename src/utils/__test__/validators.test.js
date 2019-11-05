import React from 'react';

import 'core-js/es/promise/all-settled'
import {emailValidator, requiredValidator, lengthValidator} from "../validators"

const defaultRequiredError = "Поле не должно быть пустым"
const defaultEmailError = "Неверный формат email адреса"
const defaultLengthError = "Поле должно быть длиннее 1 и короче 256 символов"

describe("Require validator", () => {
    test('requiredValidator: Should call reject when value is empty', async () => {
        expect.assertions(1);
        return requiredValidator.validate("").catch((error) => {
            return expect(error.message).toBe(defaultRequiredError)
        })
    });
    
    test('requiredValidator: Should call reject with custom error label', async () => {
        expect.assertions(1);
        const errorMessage = "Поле логин не должно быть пустым"
        return requiredValidator.validate("", { error:errorMessage }).catch((error) => {
            return expect(error.message).toBe(errorMessage)
        })
    });
    
    test('requiredValidator: Should return true when not empty field', async () => {
        expect.assertions(1);
        return requiredValidator.validate("test").then((result) => {
            return expect(result).toBe(true)
        })
    });
    
    test('requiredValidator: Should not fall and return error on null value and null options', async () => {
        expect.assertions(1);
        return requiredValidator.validate(null, null).catch((error) => {
            return expect(error.message).toBe(defaultRequiredError)
        })
    });
    
    test('requiredValidator: Should not fall and return error on undefined value and undefined options', async () => {
        expect.assertions(1);
        return requiredValidator.validate(undefined, undefined).catch((error) => {
            return expect(error.message).toBe(defaultRequiredError)
        })
    });
    
    test('requiredValidator: Should not fall and return error on missleading type', async () => {
        expect.assertions(1);
        return requiredValidator.validate({}, {}).catch((error) => {
            return expect(error.message).toBe(defaultRequiredError)
        })
    });
})


describe("Email validator", () => {
    test('emailValidator: Should call reject when value is empty', async () => {
        expect.assertions(1);
        return emailValidator.validate("").catch((error) => {
            return expect(error.message).toBe(defaultEmailError)
        })
    });
    
    test('emailValidator: Should call reject with custom error label', async () => {
        expect.assertions(1);
        const errorMessage = "Email должен быть emailom"
        return emailValidator.validate("", { error:errorMessage }).catch((error) => {
            return expect(error.message).toBe(errorMessage)
        })
    });
    
    test('emailValidator: Should return true when correct email sended', async () => {

        const correctEmails = [
            "email@example.com",
            "firstname.lastname@example.com",
            "email@subdomain.example.com",
            "firstname+lastname@example.com",
            "email@123.123.123.com",
            "1234567890@example.com",
            "_______@example.com",
            "email@example.name",
            "email@example.museum",
            "email@example.co.jp",
        ]
        expect.assertions(correctEmails.length);
        let promises = []
        correctEmails.forEach(email => {
            promises.push(emailValidator.validate(email).then((result) => {
                return expect(result).toBe(true)
            }).catch((error) => {
                console.log(email)
            }))
        })
        return Promise.all(promises)
    });

    test('emailValidator: Should return error when incorrect email sended', async () => {

        const incorrectEmails = [
            "plainaddress",
            "#@%^%#$@#$@#.com",
            "@example.com",
            "Joe Smith <email@example.com>",
            "email.example.com",
            "email@example@example.com",
            ".email@example.com",
            "email.@example.com",
            "email..email@example.com",
            "email@example.com (Joe Smith)",
            "email@example",
            "email@111.222.333.44444",
            "email@example..com",
            "Abc..123@example.com",
        ]
        expect.assertions(incorrectEmails.length);
        let promises = []
        incorrectEmails.forEach(email => {
            promises.push(emailValidator.validate(email).then((result) => {
                console.log(email)
            }).catch((error) => {
                return expect(error.message).toBe(defaultEmailError)
            }))
        })
        return Promise.allSettled(promises)
    });
    
    test('emailValidator: Should not fall and return error on null value and null options', async () => {
        expect.assertions(1);
        return emailValidator.validate(null, null).catch((error) => {
            return expect(error.message).toBe(defaultEmailError)
        })
    });
    
    test('emailValidator: Should not fall and return error on undefined value and undefined options', async () => {
        expect.assertions(1);
        return emailValidator.validate(undefined, undefined).catch((error) => {
            return expect(error.message).toBe(defaultEmailError)
        })
    });
    
    test('emailValidator: Should not fall and return error on missleading type', async () => {
        expect.assertions(1);
        return emailValidator.validate({}, {}).catch((error) => {
            return expect(error.message).toBe(defaultEmailError)
        })
    });
})




describe("Length limit validator", () => {
    
    test('lengthValidator: Should call reject when value is empty', async () => {
        expect.assertions(1);
        return lengthValidator.validate("").catch((error) => {
            return expect(error.message).toBe(defaultLengthError)
        })
    });
    
    test('lengthValidator: Should call reject with custom error label', async () => {
        expect.assertions(1);
        const errorMessage = "Поле должно быть длиннее 4 и короче 20 символов"
        return lengthValidator.validate("", { min:4, max:20, error:errorMessage }).catch((error) => {
            return expect(error.message).toBe(errorMessage)
        })
    });
    
    test('lengthValidator: Should call reject with default error label and custom min max values', async () => {
        expect.assertions(1);
        const errorMessage = "Поле должно быть длиннее 4 и короче 20 символов"
        return lengthValidator.validate("", { min:4, max:20 }).catch((error) => {
            return expect(error.message).toBe(errorMessage)
        })
    });
    
    test('lengthValidator: Should call reject with default error label and custom min max values', async () => {
        expect.assertions(1);
        const errorMessage = "Поле должно быть длиннее 4 и короче 20 символов"
        return lengthValidator.validate("012345678901234567890", { min:4, max:20 }).catch((error) => {
            return expect(error.message).toBe(errorMessage)
        })
    });
    
    
    test('lengthValidator: Should not fall and return error on null value and null options', async () => {
        expect.assertions(1);
        return lengthValidator.validate(null, null).catch((error) => {
            return expect(error.message).toBe(defaultLengthError)
        })
    });
    
    test('lengthValidator: Should not fall and return error on undefined value and undefined options', async () => {
        expect.assertions(1);
        return lengthValidator.validate(undefined, undefined).catch((error) => {
            return expect(error.message).toBe(defaultLengthError)
        })
    });
    
    test('lengthValidator: Should not fall and return error on missleading type', async () => {
        expect.assertions(1);
        return lengthValidator.validate({}, {}).catch((error) => {
            return expect(error.message).toBe(defaultLengthError)
        })
    });
})