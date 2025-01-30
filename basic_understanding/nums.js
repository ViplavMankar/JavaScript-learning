const balance = 100
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundred = 100000000

// console.log(hundred.toLocaleString('en-IN'));

const max = 15
const min = 9

for(let i=0;i<10;i++)
    console.log(Math.round(Math.random() * (max-min)) + min); // range is from [9,15]
console.log(Math.floor(Math.random() * (max-min)) + min); // range is from [9,14]
console.log(Math.ceil(Math.random() * (max-min)) + min); // range is from [10,15]
