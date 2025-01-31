const nums = [1,2,3,4,5,6,7,8,9,10]

const addedNums = nums.map((num) => num + 10)

// console.log(addedNums);

// you can replicate the filter method's functionality with map method, but these are seperate to be used seperately

const newNums = nums
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);