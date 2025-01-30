// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // Named IIFE with name :- 'chai', 
    console.log(`DB CONNECTED`);
})(); // IIFE executed with 2 parenthesis ()()

(
    (name) => {
        console.log(`DB connected two ${name}`);
        
    }
)('viplav') // Simple IIFE, parameterized IIFE
