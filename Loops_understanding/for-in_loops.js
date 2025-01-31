const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const prog = ["js","cpp","rust","c"]

for (const key in prog) {
    console.log(prog[key]);
    
}

//for...in iterates over enumerable properties of an object. The keys in a map are not enumerable properties

//for...of iterates over an iterable, which is how the Map yields up its keys/values for iteration.
// map is not iterable and so nothing gets printed in for in loop, same thing is printable in for of loop


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }