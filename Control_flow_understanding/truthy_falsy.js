const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false'," ", [] - empty array, {} - empty object, function(){}

const arr = []

if(arr.length === 0){
    // console.log("Empty array");
    
}

const obj = {}

if(Object.keys(obj).length === 0){
    // console.log("empty object");
}

// Nullish Coalescing operator - ??

let abc;
abc = 5 ?? 10
// console.log(abc);
abc = null ?? 10
// console.log(abc);
abc = undefined ?? 20
// console.log(abc);

// Ternary Operator

const price = 50
price > 80 ? console.log("More than 80") : console.log("Less than 80");


