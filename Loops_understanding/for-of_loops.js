const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// The below code is printed

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for of loops don't run for objects, since they are not iterable

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } 