const arr1 = ["dan","man","van"]

const arr2 = ["lance","vance","dance"]

const comb_arr = [...arr1, ...arr2]

// console.log(comb_arr);

const complex_arr = [1,2,3,[4,5],[6,7,[8,9]]]

// console.log(complex_arr.flat(Infinity));

console.log(Array.from("Viplav"));
console.log(Array.from({name: 'Viplav'}))
console.log(Array.isArray("Viplav"));

let num1 = 100, num2=200,num3=300;

console.log(Array.of(num1,num2,num3));

