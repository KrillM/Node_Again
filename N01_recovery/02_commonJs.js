const {odd, even} = require('./var')
const checkNumber = require('./func')

function checkStringOddOrEven(str){
    if(str.length%2)return odd
    else return even
}

console.log(checkNumber(15))
console.log(checkStringOddOrEven('reze'))