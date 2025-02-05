class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const userOne = new Teacher("Viplav","viplav@google.com", "1234")

userOne.addCourse()
const superUser = new User("Super")

console.log(userOne instanceof User);
