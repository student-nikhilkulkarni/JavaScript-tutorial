//Immediately invoked function expression (IIFE)
// IIFE is used because in global scope some time problem occur due to pollution in global scope 
//so, to resolve the problem of variable, declaration  pollution in global scope iife is used
(function chai(){ //here chai is named iife
    console.log("DB CONNECTED");
    
})(); //; is important to end the function in iife  code

// (() => {
//     console.log(`DB CONNECTED TWO`);
    
// })();

//we can also write parameters as follows
((name) => { // here it is unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
    
})('nikhil')

