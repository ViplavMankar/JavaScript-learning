//Primitive

// Call by value datatypes
/* string, number, boolean, null, undefined, symbol, BigInt*/

//Reference(non Primitive)

// Call by reference datatypes /* Array, Objects, functions */

// Javascript is dynamically typed language, as opposed to any other language till now worked with(C, C++, Java, C#)

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n

const heros = ["shaktiman", "naagraj", "doga"]; // return type is object type
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){// return type is function object
    console.log("Hello world");
}

// console.log(typeof anotherId); 


// Stack(Primitive) , Heap(Non-Primitive)

let userOne = {
    email : "example@google.com",
    upiId : "sample@ybl"
}

let userTwo = userOne;
userTwo.email = "newEmail@google.com"

console.log(userOne.email); // heap has the object and the reference has been given to userTwo, so the value changes for both
console.log(userTwo.email);

