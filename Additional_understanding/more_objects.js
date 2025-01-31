const obj = new Object() // Singleton object

const newObj = {} // Non Singleton Object

newObj.id = 1
newObj.name = "Viplav"
newObj.email = "viplav@gmail.com"

// console.log(newObj);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
//  const obj3 = Object.assign({}, obj1, obj2, obj4)

//  console.log(obj3 === obj1);

 const obj3 = {...obj1,...obj2}
//  console.log(obj3);
 
//  console.log(Object.keys(newObj));
//  console.log(Object.values(newObj));
//  console.log(Object.entries(newObj));
 
 console.log(newObj.hasOwnProperty('email'));


 // *************************************Object Destructuring************************************************** //

// const navbar = ({company}) => {

// }


//  navbar(company="something")


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);