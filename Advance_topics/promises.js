// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async call completed");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async 2 completed");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise async 2 completed");
    
// })

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: "Viplav", email: "viplav@google.com"})
    },1000)
})

// promiseThree.then((user) => {
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "Viplav", email: "viplav@google.com"})
//         }
//         else{
//             reject('ERROR: Some error occured')
//         }
//     },1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => {
//     console.log("The promise is either resolved or rejected");  
// })


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Viplav", email: "viplav@google.com"})
//         }
//         else{
//             reject('ERROR: Some error occured')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//     console.log(response);   
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/viplavmankar')
        const responseInJSON = await response.json()
        console.log(responseInJSON);
        
    } catch (error) {
        console.log(error);
        
    }
}

// getAllUsers()

fetch('https://api.github.com/users/viplavmankar')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))