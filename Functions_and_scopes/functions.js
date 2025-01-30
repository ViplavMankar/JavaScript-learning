// if function definition has any parameters as defined, 
// but during calling the function we do not pass the parameter as an argument to the function call,
//  then the value in the function call is 'undefined'
// as opposed to other static type languages or Compile time languages like C,C++,Java,C#. 
// And JavaScript is run time language

function func(name){
    return `${name} has logged in`
}

// console.log(func("Viplav"))
// console.log(func())

function addToCart(...num){ // Both, 'Rest Parameter' and 'Spread Operator' are same in JS, 
// wherein in this context ... is used as Rest Parameter
    return num
}

console.log(addToCart(300,400,500));
 