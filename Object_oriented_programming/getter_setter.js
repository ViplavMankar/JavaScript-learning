class User{
    constructor(email,password){
        this.email = email; 
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()// this property _email is still accessible and is just assumed by devs,
        //  to be overriding at getting and setting time
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `viplav${this._password}mankar`
    }
    set password(value){
        this._password = value
    }
    
}

const viplav = new User("viplav@mankar.ai", "abc")
console.log(viplav.password);
console.log(viplav.email);