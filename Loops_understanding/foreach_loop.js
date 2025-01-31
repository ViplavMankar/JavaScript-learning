const langs = ["js","ruby","php","node",".net"]

// langs.forEach( function (lang) {
//     console.log(lang);
    
// })
// OR
// langs.forEach( (lang) => {
//     console.log(lang);
    
// })
// OR

// function printMe(item){
//     console.log(item);
    
// }
// langs.forEach(printMe)

langs.forEach((val,index,arr) => {
    // console.log(val,index,arr);
    
})

const myPlace = [
    {
        placeName: "Nagpur",
        landmark: "Dikshabhoomi"
    },
    {
        placeName: "Delhi",
        landmark: "Red fort"
    },
    {
        placeName: "Mumbai",
        landmark: "Gateway of India"
    },
]

myPlace.forEach((place) => {
    console.log(` ${place.placeName} is famous for ${place.landmark}.` )
    
})