const user = {
    username : 'viplav',
    email : 'viplav@email.com',
    getUserDetails : function(){
        console.log("Data from database");
        console.log(`Username : ${this.username}`);
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise()

// const dateOne = new Date()

function User(username,loginCount, IsLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.IsLoggedIn = IsLoggedIn
    return this // this is implicitly defined anyway 
}

const userOne = new User("viplav",12,true)
const userTwo = new User("Something",5,false)
console.log(userOne instanceof User);
console.log(userTwo);

