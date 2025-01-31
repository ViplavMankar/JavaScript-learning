const mySym = Symbol("key1")


const JsUser = {
    name: "Viplav",
    "full name": "Viplav Mankar",
    [mySym]: "mykey1",
    age: 18,
    location: "Noida",
    email: "viplav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email="viplav@gmail.com"
// console.log(JsUser.email);

// Object.freeze(JsUser)
// JsUser.email="viplav@hotmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello ${this["full name"]}`);
    
}

console.log(JsUser.greeting());


