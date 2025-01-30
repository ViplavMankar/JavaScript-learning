// {} this is scope, but only when we consider the curly braces with functions and loops, and not object delarations

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c); // since c gets printed and it was declared inside the if's scopes. hence var doesn't follow scope,
                // hence is not used nowadays. Use let and const

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

//addOne(5) :- this will run correctly due to it's declaration type
function addOne(num){
    return num + 1 
}
//addOne(5)


// addTwo(5) :-  will give error here since addTwo is not yet declared and called this function
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(7));
