const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); :- Empty object in node's case , But in browser this is basically window element in global context

function something(){
    let name = "Hello"
    console.log(this)  // 'this' is accessible
}
// something()

const func = () => {
    let name = "Hello"
    console.log(this) // 'this' is not accessible in arrow functions
}

// func()

const func2 = (num1,num2) => (
    num1 + num2
) // implicit return 

console.log(func2(4,5))