let myName = "Viplav    "
let mySurname = "Mankar   "
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

//inheritance

const User = {
    name: "manny",
    email: "manny@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingAssistant = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: "Language Assignment",
    __proto__: TeachingAssistant
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingAssistant, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Viplav    ".trueLength()
"iceTea   ".trueLength()