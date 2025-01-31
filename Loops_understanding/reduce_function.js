const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const withGSTPay = shoppingCart.reduce((acc,item,index) => {
    console.log(`acc: ${acc}, price: ${item.price}, index:${index}`);
    
    return (acc+item.price+(item.price*(5/100)))
},0)

console.log(withGSTPay);

