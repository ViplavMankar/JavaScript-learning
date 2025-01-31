const myArr = [1,2,3,4]

// console.log(myArr);

myArr.push(5);

// console.log(myArr);

const newArr = []

newArr.pop();
// console.log(newArr);

myArr.unshift(-1);
// console.log(myArr);

const anotherArr = myArr.join()
// console.log(anotherArr);

// slice and splice

console.log("A: " + myArr);


const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B: "+myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C: "+myArr);





