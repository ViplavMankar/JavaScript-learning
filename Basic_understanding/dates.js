let aDate = new Date()

console.log(typeof aDate);

let myCreatedDate = new Date(2024, 1, 25)
console.log(myCreatedDate.toDateString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    day: "2-digit"
})