const desc = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(desc);

const user = {
    name: "Viplav",
    email: "viplav@google.com",

    writeUserName : function(){
        console.log(`Username is ${this.name}`);
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user,"name",{
    writable: false,
    enumerable: false 
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));

for (let [key,value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
        
    }
    
}