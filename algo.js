const oruko = 'awele.jpg'
console.log(oruko.lastIndexOf('.'))
const sub = oruko.substring(oruko.lastIndexOf('.') + 1)

console.log(sub)

function isOddNumber(number) {
    return number % 2;
}

let numbers = [1, 2, 4, 7, 3, 5, 6];

console.log(isOddNumber(2))

console.log(numbers.filter(isOddNumber))


console.log(oruko.slice(0, 1) + oruko.slice(2, oruko.length))

function firstLetterToUpperCase(data) {
    const firstLetter = data.slice(0, 1).toUpperCase();
   
    const remainingLeters = data.slice(1, data.length);
   
    return firstLetter + remainingLeters
}

  

const str = 'year 5678'

const bufferString = new Buffer(str).toString('base64')

console.log(bufferString)

const my = 'eWVhciA1Njc4'

const da = new Buffer(my, 'base64')
console.log(da.toString('ascii'))


const fs = require('fs')

const data = fs.readFileSync('./basic.js')
// console.log(data.toString('base64'))

const obj = {
    firstName: "Wale",
    lastName: "Soga",
    country: "NIGERIA",
    phoneNumber: "+2348011118986",
    email: "yooo@yomail.com",
    password: "luvME@001",
    termsAndCondition: "I have read and accepted SAS-P Terms of Use",
    privacyAndPolicy: "I have read and accepted SAS-P Privacy and Policy",
    marketingEmails: "I would like to receive marketing emails from SAS-P"
}

function check(value) {
    if(!value) {
        return false
    }

    if (value.termsAndCondition !== undefined) {
        return false
    }

}
