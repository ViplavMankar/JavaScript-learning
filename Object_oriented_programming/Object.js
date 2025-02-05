function multiplyBy5(num){
    return num*5
}

// console.log(multiplyBy5(3));
// console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Score is :- ${this.score}`);
}

const userOne = new createUser("Greg",70)
const userTwo = new createUser("Homie",60)

userOne.printMe()


 
